import * as Icons from '@ofekashery/vercel-icons'
import makeStyles from '@src/styles/makeStyles'
import { Avatar, Button, Link, Text, ZeitUIThemes } from '@zeit-ui/react'
import React from 'react'

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  root: {
    borderTop: `solid 1px ${ui.palette.accents_2}`,
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    backgroundColor: ui.palette.accents_1
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    padding: `calc(${ui.layout.gap} * 2) ${ui.layout.pageMargin} calc(${ui.layout.gap} * 4)`,
    boxSizing: 'border-box',
    margin: '0 auto'
  },
  avatar: {
    width: '100px !important',
    height: '100px !important',
    marginRight: '30px !important'
  },
  name: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    lineHeight: 1
  },
  createProjectButton: {},
  [`@media screen and (max-width: ${ui.layout.pageWidthWithMargin})`]: {
    createProjectButton: {
      display: 'none !important'
    },
    avatar: {
      width: '80px !important',
      height: '80px !important',
      marginRight: '20px !important'
    },
    username: {
      fontSize: 24
    }
  },
  integrationsTitle: {
    textTransform: 'uppercase',
    color: `${ui.palette.accents_5} !important`,
    fontWeight: 800,
    fontSize: 12,
    margin: 0
  },
  integrationsUsername: {
    margin: '0 0 0 4px',
    fontWeight: 0
  }
}))

const Heading = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Avatar alt="Your Avatar" className={classes.avatar} src="/images/profile_image.jpg" />
        <div className={classes.name}>
          <div className={classes.title}>
            <Text h2 className={classes.username}>
              Haze Lee
            </Text>
            <Link href="mailto:hazelee@realignist.me" target="_blank" rel="noopener" pure>
              <Button className={classes.createProjectButton} type="secondary" auto>
                Contact with Mail
              </Button>
            </Link>
          </div>
          <div>
            <Text className={classes.integrationsTitle}>External Links</Text>
            <Link href="https://github.com/Hazealign" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Github size={16} aria-label="Github" />
                <Text className={classes.integrationsUsername}>Hazealign</Text>
              </div>
            </Link>
            <Link href="https://twitter.com/Hazealign" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Twitter size={16} aria-label="Twitter" />
                <Text className={classes.integrationsUsername}>@Hazealign</Text>
              </div>
            </Link>
            <Link href="https://twitter.com/Realignist" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Twitter size={16} aria-label="Twitter" />
                <Text className={classes.integrationsUsername}>@Realignist</Text>
              </div>
            </Link>
            <Link href="https://twitter.com/BrumeDawn" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Twitter size={16} aria-label="Twitter" />
                <Text className={classes.integrationsUsername}>@BrumeDawn</Text>
              </div>
            </Link>
            <Link href="https://facebook.com/realignist" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Facebook size={16} aria-label="Facebook" />
                <Text className={classes.integrationsUsername}>Haze Lee</Text>
              </div>
            </Link>
            <Link href="tel:+82-10-8210-2762" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.Phone size={16} aria-label="Phone" />
                <Text className={classes.integrationsUsername}>Phone</Text>
              </div>
            </Link>
            <Link href="https://line.me/R/ti/p/hazealign" target="_blank" rel="noopener" pure underline>
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '1rem' }}>
                <Icons.MessageCircle size={16} aria-label="Line" />
                <Text className={classes.integrationsUsername}>Line</Text>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Heading
