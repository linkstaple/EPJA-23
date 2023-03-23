import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { io } from 'socket.io-client'

import { routeConfig } from './util/routes'
import { createStyles } from '@theme'

const App = () => {
  const c = useStyles()

  useEffect(() => {
    const socket = io('https://9182739817293213.site')

    const handleSocket = data => {
      console.log(data)
    }

    socket.on('cases', handleSocket)

    return () => {
      socket.off('cases', handleSocket)
    }
  }, [])

  return (
    <div className={c.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path={routeConfig.main.path}
            element={routeConfig.main.element}
          />
          <Route
            path={routeConfig.orders.path}
            element={routeConfig.orders.element}
          />
          <Route
            path={routeConfig.order.path}
            element={routeConfig.order.element}
          />
        </Routes>
      </Suspense>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    p: {
      margin: 0,
    },
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    button: {
      border: 0,
    },
  },
  app: {
    background: colors.background,
    width: '100vw',
    overflowX: 'hidden',
    minHeight: '100vh',
  },
}))

export default App
