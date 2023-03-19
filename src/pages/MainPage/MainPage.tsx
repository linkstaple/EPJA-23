import React from 'react'
import { createStyles } from '@theme'
import { Budget } from 'src/components/Budget/Budget'

import BANNER from '../../assets/images/back2.png'

const MainPage = () => {
  const cls = useStyles()

  return (
    <div className={cls.wrapper}>
      <div className={cls.background}>
        <img
          src={BANNER}
          alt="background banner"
        />
      </div>
      <div className={cls.content}>
        <Budget />
      </div>
    </div>
  )
}

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
  },
  background: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    flexGrow: 1,
    zIndex: 0,

    '& img': {
      width: '100vw',
      height: '100vh',
      objectFit: 'cover',
      position: 'absolute',
      top: '-100px',
    },
  },
  content: {
    position: 'relative',
    color: 'white',
    zIndex: 2,
  },
}))

export default MainPage
