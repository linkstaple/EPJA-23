import React from 'react'
import { createStyles } from '@theme'
import { Outlet } from 'react-router-dom'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  const cls = useStyles()

  return (
    <div className={cls.content}>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

const useStyles = createStyles(() => ({
  // content: {
  //   maxWidth: '100vw',
  //   width: '100vw',
  //   overflow: 'hidden',
  //   position: 'relative',
  // },
}))

export default Layout
