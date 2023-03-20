import React from 'react'
import { createStyles } from '@theme'
import cn from 'classnames'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const OrderPage = () => {
  const cls = useStyles()

  return (
    <>
      <Header />

      <div className={cls.subHeader}>
        <div className={cls.banks}>
          <p>Тиньков - Тиньков</p>
        </div>

        <div className={cls.coins}>
          <p>USDT - ETH</p>
          <p className={cls.profitPercent}>+1,2%</p>
        </div>
      </div>
      <div className={cls.steps}>
        <div className={cls.step}>
          <div className={cn(cls.seqNumber, cls.rightBorder)}>
            <p>1</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textYellow}>USDT</p>
            <p>через Тиньков</p>
          </div>
          <div className={cls.cell}>
            <p className={cls.textMuted}>получаем</p>
            <p className={cls.textYellow}>164.44 USDT</p>
          </div>
        </div>
        <div className={cls.step}>
          <div className={cn(cls.seqNumber, cls.rightBorder)}>
            <p>2</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textMuted}>меняем</p>
            <p className={cls.textAqua}>USDT на ETH</p>
          </div>
          <div className={cls.cell}>
            <p className={cls.textMuted}>получаем</p>
            <p className={cls.textAqua}>0,023 ETH</p>
          </div>
        </div>
        <div className={cls.step}>
          <div className={cn(cls.seqNumber, cls.rightBorder)}>
            <p>3</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textMuted}>продаём</p>
            <p>на Сбербанк</p>
          </div>
          <div className={cn(cls.cell, cls.rightBorder)}>
            <p className={cls.textMuted}>по курсу</p>
            <p>64,402</p>
          </div>
          <div className={cls.cell}>
            <p className={cls.textMuted}>профит</p>
            <p className={cls.profitPercent}>240 ₽</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

const useStyles = createStyles(({ colors }) => ({
  subHeader: {
    height: 40,
    width: '100%',
    fontFamily: 'TT Norms, sans-serif',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0 15px',
    flexGrow: 1,
  },
  rightBorder: {
    borderRight: '2px solid black',
  },
}))

export default OrderPage
