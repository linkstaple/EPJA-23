import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router'

import { routeConfig } from './util/routes'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <div>{element}</div>
              </Suspense>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
