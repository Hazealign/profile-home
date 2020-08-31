import makeStyles from '@src/styles/makeStyles'
import { Card, Text, ZeitUIThemes } from '@zeit-ui/react'
import React from 'react'

interface Props {
  title: string
  points: any[]
}

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  card: {
    padding: '0 !important',
    marginBottom: `calc(${ui.layout.gap}*1.5) !important`
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: ui.layout.gap,
    '& h3': {
      margin: 0
    }
  },
  dot: {
    display: 'flex !important',
    marginTop: ui.layout.gapQuarter,
    '& .icon': {
      backgroundColor: ui.palette.accents_5,
      width: '0.4rem',
      height: '0.4rem',
    },
    '& .label': {
      textTransform: 'none !important',
      display: 'flex',
      flex: 1,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      lineHeight: 'normal'
    },
    '& .link': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      fontSize: 14,
      lineHeight: 'normal',
      fontWeight: '600'
    }
  },
  tag: {
    display: 'flex !important',
    alignItems: 'center',
    textTransform: 'capitalize !important',
    fontSize: '12px !important',
    padding: '3px 7px !important',
    borderRadius: '16px !important',
    height: 'unset !important',
    marginLeft: 8,
    color: `${ui.palette.foreground} !important`
  },
}))

const ElementCard = ({ title, points }: Props) => {
  const classes = useStyles()
  return (
    <Card shadow className={classes.card}>
      <div className={classes.title}>
        <Text h3>{title}</Text>
      </div>
      <div className={classes.content}>
        <ul>{points.map(point => {
          return <li style={{ listStyle: 'disc' }} key={point}>
            {point}
          </li>
        })}
        </ul>
      </div>
    </Card>
  )
}

export default ElementCard
