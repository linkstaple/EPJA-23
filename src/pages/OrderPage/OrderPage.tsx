import React, { useEffect } from 'react'
import { createStyles } from '@theme'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import cn from 'classnames'

import { roundWithAsset } from 'src/util/roundWithAsset'
import { routeConfig } from 'src/util/routes'
import { FOOTER_HEIGHT, banksMapper } from 'src/util/consts'

const OrderPage = () => {
  const navigate = useNavigate()
  const cls = useStyles()
  const { activeCase, budget } = useAppSelector(state => state.budget)

  const emptyActiveCases = Object.keys(activeCase).length === 0

  useEffect(() => {
    if (emptyActiveCases) {
      navigate(routeConfig.orders.path)
    }
  }, [])

  if (emptyActiveCases) return null

  const buyAmount = roundWithAsset(budget / activeCase.buy.price, activeCase.buy.asset)
  const sellAmount = roundWithAsset(buyAmount / Number(activeCase.sell.marketPrice), activeCase.sell.asset)

  return (
    <div className={cls.orderPageContainer}>
      <div className={cls.subHeader}>
        <div className={cls.banks}>
          <p>
            {banksMapper[activeCase.buy.payType]} - {banksMapper[activeCase.sell.payType]}
          </p>
        </div>

        <div className={cls.coins}>
          <p>
            {activeCase.buy.asset} - {activeCase.sell.asset}
          </p>
          <p className={cls.profitPercent}>+{activeCase.profit}%</p>
        </div>
      </div>
      <div className={cls.steps}>
        <div className={cls.step}>
          <div className={cn(cls.seqNumber, cls.rightBorder)}>
            <p>1</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textYellow}>{activeCase.buy.asset}</p>
            <p>через {banksMapper[activeCase.buy.payType]}</p>
          </div>
          <div className={cls.cell}>
            <p className={cls.textMuted}>получаем</p>
            <p className={cls.textYellow}>
              {buyAmount} {activeCase.buy.asset}
            </p>
          </div>
        </div>
        {activeCase.buy.asset !== activeCase.sell.asset && (
          <div className={cls.step}>
            <div className={cn(cls.seqNumber, cls.rightBorder)}>
              <p>2</p>
            </div>
            <div className={cn(cls.cell, cls.rightBorder)}>
              <p className={cls.textMuted}>меняем</p>
              <p className={cls.textAqua}>
                {activeCase.buy.asset} на {activeCase.sell.asset}
              </p>
            </div>
            <div className={cls.cell}>
              <p className={cls.textMuted}>получаем</p>
              <p className={cls.textAqua}>
                {sellAmount} {activeCase.sell.asset}
              </p>
            </div>
          </div>
        )}
        <div className={cls.step}>
          <div className={cn(cls.seqNumber, cls.rightBorder)}>
            <p>{activeCase.buy.asset === activeCase.sell.asset ? 2 : 3}</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textMuted}>продаём</p>
            <p>на {banksMapper[activeCase.sell.payType]}</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textMuted}>по курсу</p>
            <p>{new Intl.NumberFormat().format(activeCase.sell.price)}</p>
          </div>
          <div className={cls.cell}>
            <p className={cls.textMuted}>профит</p>
            <p className={cls.profitPercent}>{Math.floor((budget * activeCase.profit) / 100)} ₽</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  orderPageContainer: {
    flex: 1,
    marginBottom: FOOTER_HEIGHT,
  },
  subHeader: {
    height: 40,
    width: '100%',
    fontSize: 14,
    fontWeight: '700',
    display: 'flex',
    flexDirection: 'row',
  },
  banks: {
    padding: 12,
    backgroundColor: colors.control,
    width: 'fit-content',
  },
  coins: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 12,
    flexGrow: 1,
    color: 'white',
    fontWeight: '300',
  },
  profitPercent: {
    color: colors.primaryGreen,
  },
  steps: {
    padding: 15,
    fontFamily: 'TTNorms, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  step: {
    height: 64,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    color: 'white',
    borderRadius: '5px',
    backgroundColor: colors.backgroundLight,
  },
  seqNumber: {
    height: '100%',
    width: 41,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.control,
    fontWeight: '700',
    fontSize: 24,
    padding: 15,
  },
  textYellow: {
    color: colors.control,
  },
  textAqua: {
    color: colors.aqua,
  },
  textMuted: {
    color: colors.textMinor,
  },
  cell: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 15px',
  },
  rightBorder: {
    borderRight: '2px solid black',
  },
}))

export default OrderPage
