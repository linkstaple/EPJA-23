import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import { routeConfig } from './util/routes'
import { createStyles } from '@theme'

const App = () => {
  const c = useStyles()
  return (
    <div className={c.app}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(({ element, path }) => (
            <Route
              key={path}
              path={path}
              element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>}
            />
          ))}
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
  },
  app: {
    background: colors.background,
    width: '100vw',
    minHeight: '100vh',
  },
}))

export default App
