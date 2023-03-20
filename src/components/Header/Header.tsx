import React from 'react'
import { createStyles } from '@theme'

const Header = () => {
  const cls = useStyles()

  return (
    <div className={cls.header}>
      <p>Binance</p>
      <p>11:40</p>
      <p>945 связок </p>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  header: {
    background: colors.backgroundMinor,
    padding: [16, 21],
    display: 'flex',
    justifyContent: 'space-between',

    '& > p': {
      color: colors.text,
      margin: 0,
    },
  },
}))

export default Header
