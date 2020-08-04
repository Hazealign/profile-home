import makeStyles from '@src/styles/makeStyles'
import { Avatar, Text, ZeitUIThemes } from '@zeit-ui/react'
import React from 'react'

interface Props {
  imageUrl: string
  children: string | React.ReactNode
}

const useStyles = makeStyles((ui: ZeitUIThemes) => ({
  root: {
    borderBottom: `solid 1px ${ui.palette.accents_2}`,
    padding: '10px 0px',
    alignItems: 'center',
    display: 'flex',
    fontSize: 14
  },
  avatar: {
    width: '32px !important',
    height: '32px !important',
    marginRight: '10px !important'
  },
  message: {
    margin: 0,
    flex: 1
  }
}))

const ListItem = ({ imageUrl, children }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Avatar
        className={classes.avatar}
        src={imageUrl}
      />
      <Text className={classes.message}>{children}</Text>
    </div>
  )
}

export default ListItem
