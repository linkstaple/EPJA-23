import React, { useEffect, useState } from 'react'
import { createStyles } from '@theme'

import { useFilteredOffers } from 'src/store/slices/userSlice'

const Header = () => {
  const cls = useStyles()
  const offers = useFilteredOffers()

  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-GB', {
          timeStyle: 'short',
        }),
      )
    }, 300)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={cls.header}>
      <p>Binance</p>
      <p>{time}</p>
      <p>{offers.length} связок </p>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  header: {
    background: colors.backgroundMinor,
    padding: [16, 21],
    display: 'flex',

    '& > p': {
      color: colors.text,

      '&:first-child': {
        width: '100%',
      },
      '&:last-child': {
        width: '100%',
        textAlign: 'right',
      },
    },
  },
}))

export default Header
