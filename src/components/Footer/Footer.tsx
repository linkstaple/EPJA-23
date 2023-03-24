import React, { FC } from 'react'
import { createStyles } from '@theme'
import { useLocation, useNavigate } from 'react-router-dom'

import backSVG from '@icons/Group.svg'
import settingsSVG from '@icons/setting-1.svg'
import { routeConfig } from 'src/util/routes'
import { useAppSelector } from 'src/hooks/useRedux'

interface FooterProps {
  onOpenFiter?: () => void
}

const Footer: FC<FooterProps> = ({ onOpenFiter }) => {
  const c = useStyles()
  const navigate = useNavigate()
  const location = useLocation()
  const { budget } = useAppSelector(state => state.budget)

  const handleReturn = () => {
    if (location.pathname === routeConfig.order.path) navigate(routeConfig.orders.path)
    else navigate(routeConfig.main.path)
  }

  return (
    <>
      <div className={c.footer}>
        <button
          className={c.backIcon}
          onClick={handleReturn}
        >
          <img src={backSVG} />
        </button>
        <div
          className={c.filterBlock}
          onClick={onOpenFiter}
        >
          <p>Фильтр</p>
          <img src={settingsSVG} />
        </div>
        <div className={c.budgetBlock}>
          <p>Бюджет</p>
          <p className={c.priceLabel}>{budget} ₽</p>
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
    cursor: 'pointer',
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
