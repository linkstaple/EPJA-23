import React from 'react'
import { createStyles } from '@theme'

import backSVG from '@icons/Group.svg'
import settingsSVG from '@icons/setting-1.svg'

const Footer = () => {
  const c = useStyles()
  return (
    <>
      <div className={c.footer}>
        <div className={c.backIcon}>
          <img src={backSVG} />
        </div>
        <div className={c.filterBlock}>
          <p>Фильтр</p>
          <img src={settingsSVG} />
        </div>
        <div className={c.budgetBlock}>
          <p>Бюджет</p>
          <p className={c.priceLabel}>10000 ₽</p>
        </div>
      </div>
    </>
  )
}

const useStyles = createStyles(({ colors }) => ({
  footer: {
    width: '100%',
    height: 86,
    padding: 22,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: colors.background,
  },
  backIcon: {
    width: 40,
    height: 40,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(19, 17, 26, 0.52)',
  },
  filterBlock: {
    padding: [11, 11, 11, 13],
    height: 'min-content',
    borderRadius: 5,
    background: colors.backgroundLight,
    display: 'flex',
    '& > p': {
      fontSize: 13,
      lineHeight: '16px',
      color: colors.text,
    },
    '& > img': {
      width: 20,
      height: 20,
      marginLeft: 16,
    },
  },
  budgetBlock: {
    height: 'min-content',
    '& > p:nth-child(1)': {
      color: colors.text,
    },
  },
  priceLabel: {
    color: colors.control,
    margin: 0,
  },
}))

export default Footer
