import React from 'react'
import { createStyles } from '@theme'

const App = () => {
  const c = useStyles()
  return <h1 className={c.title}>Hello world для проекта - epja-23</h1>
}

const useStyles = createStyles({
  title: {
    color: 'blue',
  },
})

export default App
