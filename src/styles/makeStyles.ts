import { useTheme, ZeitUIThemes } from '@zeit-ui/react'
import { createUseStyles } from 'react-jss'

const useStyles = (styles: ((ui: ZeitUIThemes) => any) | any) => {
  const theme: ZeitUIThemes = useTheme()
  if (typeof styles === 'function') {
    styles = styles(theme)
  }

  return createUseStyles(styles)()
}

const makeStyles = (styles: ((ui: ZeitUIThemes) => any) | any) => {
  return () => useStyles(styles)
}

export default makeStyles
