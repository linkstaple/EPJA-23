import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import { routeConfig } from './util/routes'
import { createStyles } from '@theme'
import useOffersWatcher from './hooks/useOffersWatcher'

import Layout from './components/Layout/Layout'

const App = () => {
  const c = useStyles()
  useOffersWatcher()

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
            element={<Layout />}
          >
            <Route
              index
              element={routeConfig.orders.element}
            />
            <Route
              path={routeConfig.order.path}
              element={routeConfig.order.element}
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      fontFamily: 'TTNorms, sans-serif',
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
