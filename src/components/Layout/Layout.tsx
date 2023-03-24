import React from 'react'
import { Outlet } from 'react-router-dom'
import { createStyles } from '@theme'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  const cls = useStyles()
  return (
    <div className={cls.wrapper}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

const useStyles = createStyles({
  wrapper: {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
  },
})

export default Layout
