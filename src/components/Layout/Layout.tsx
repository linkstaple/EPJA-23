import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { createStyles } from '@theme'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FilterModal from '../FilterModal/FilterModal'

const Layout = () => {
  const cls = useStyles()

  const [showFilterModal, setShowFilterModal] = useState(false)

  const closeFilterModal = () => {
    setShowFilterModal(false)
  }
  const openFilterModal = () => {
    setShowFilterModal(true)
  }

  return (
    <div className={cls.wrapper}>
      <Header />

      <Outlet />

      <Footer onOpenFiter={openFilterModal} />
      {showFilterModal && <FilterModal close={closeFilterModal} />}
    </div>
  )
}

const useStyles = createStyles({
  wrapper: {
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
})

export default Layout
