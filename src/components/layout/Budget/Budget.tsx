import { createStyles } from '@theme'
import React from 'react'

export const Budget = () => {
  const cls = useStyles()

  return (
    <div className={cls.wrapper}>
      <p>Стартовый</p>
      <p>бюджет</p>
      <div className={cls.bugetContainer}>
        <span>💰</span>
        <input
          type="text    "
          value={10000}
        />
        <span>₽</span>
      </div>
    </div>
  )
}

const useStyles = createStyles(() => ({
  wrapper: {
    width: '100%',
    padding: '19px 30px 30px 28px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'TT Norms',

    '& input': {
      background: '#1A1515',
      textAlign: 'right',
      padding: '12px',
      color: '#FFE55C',
      border: 'none',
      fontSize: '20px',
    },
  },
  bugetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}))
