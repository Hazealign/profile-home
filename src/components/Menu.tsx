/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import makeStyles from '@src/styles/makeStyles'
import { Button, Link, useTheme, ZeitUIThemes } from '@zeit-ui/react'
import React, { useEffect, useState } from 'react'

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  header: {
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 60,
    zIndex: 15
  },
  headerContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `0 ${ui.layout.pageMargin}`
  },
  headerTitle: {
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 5,
    fontSize: 18
  },
  nav: {
    position: 'sticky',
    top: 0,
    backgroundColor: ui.palette.background,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    zIndex: 15
  },
  navFixed: {
    borderBottom: ui.type === 'light' && 'none',
    boxShadow: ui.type === 'light' && 'rgba(0, 0, 0, 0.1) 0 0 15px 0'
  },
  navContent: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    height: '100%',
    margin: '0 auto',
    '& .tabs header': {
      padding: `0 ${ui.layout.pageMargin}`,
      borderBottom: 'none !important',
      flexWrap: 'nowrap !important',
      overflowY: 'hidden',
      overflowX: 'auto',
      overflow: '-moz-scrollbars-none',
      '-ms-overflow-style': 'none',
      '&::-webkit-scrollbar': {
        display: 'none'
      }
    },
    '& .content': {
      display: 'none !important'
    },
    '& .tab': {
      padding: '12px !important',
      margin: '0 !important',
      fontSize: '14px !important'
    }
  },
  sidebar: {
    display: 'flex',
    alignItems: 'center !important'
  },
  themeIcon: {
    width: '40px !important',
    height: '40px !important',
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'center !important',
    marginRight: 5,
    padding: '0 !important'
  },
  popover: {
    width: '180px !important'
  }
}))

const Menu = () => {
  useTheme()
  const classes = useStyles()
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    const scrollHandler = () => {
      const shouldFixed = document.documentElement.scrollTop > 60
      if (fixed !== shouldFixed) setFixed(shouldFixed)
    }
    document.addEventListener('scroll', scrollHandler)
    return () => document.removeEventListener('scroll', scrollHandler)
  }, [fixed])

  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerContent}>
          <div style={{ display: 'flex' }}>
            <div className={classes.headerTitle}>Profile</div>
          </div>
          <div className={classes.sidebar}>

            <Link href="https://resume.realignist.me" target="_blank" rel="noopener">
              <Button
                className={classes.themeIcon}
                style={{
                  minWidth: '75px !important',
                  border: 'none'
                }}
              >Résumé</Button>
            </Link>

            <Link href="https://archived.realignist.me" target="_blank" rel="noopener">
              <Button
                className={classes.themeIcon}
                style={{
                  minWidth: '125px !important',
                  border: 'none'
                }}
              >Blog (Archived)</Button>
            </Link>

            <Link href="https://realignist.me" target="_blank" rel="noopener">
              <Button
                className={classes.themeIcon}
                style={{
                  minWidth: '75px !important',
                  border: 'none'
                }}
              >Medium</Button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
