import React from 'react'
import { createStyles } from '@theme'
import cn from 'classnames'
import backSVG from '@icons/Group.svg'
import settingsSVG from '@icons/setting-1.svg'
import forwardSVG from '@icons/Arrow.svg'

const times = <T,>(array: T[], timesNumber: number): T[] =>
  timesNumber === 1 ? array : array.concat(times(array, timesNumber - 1))

const scrollListItems = ['Все', 'USDT', 'BTC', 'BNB', 'ETH', 'BUSD']
const selectedItemId = 3
const offer = {
  fromBank: 'Тиньков',
  fromCurrency: 'USDT',
  toBank: 'Тиньков',
  toCurrency: 'ETH',
  profit: 240,
}
const offersList = times([offer], 10)

const OrdersPage = () => {
  const c = useStyles()
  return (
    <div className={c.ordersPageContainer}>
      <div className={c.header}>
        <p>Binance</p>
        <p>11:40</p>
        <p>945 связок </p>
      </div>
      <ul className={c.scrollList}>
        {scrollListItems.map((currency, idx) => (
          <li
            key={idx}
            className={cn(c.scrollListItem, {
              [c.scrollListItemSelected]: idx === selectedItemId,
            })}
          >
            {currency}
          </li>
        ))}
      </ul>
      <div className={c.offerBlock}>
        <table className={c.offerList}>
          {offersList.map((offer, idx) => (
            <tr key={idx}>
              <td className={c.offerItem}>
                <div className={c.offerItemContent}>
                  <p className={c.bankLabel}>{offer.fromBank}</p>
                  <p className={c.currencyLabel}>{offer.fromCurrency}</p>
                </div>
              </td>
              <td className={c.offerItem}>
                <div className={c.offerItemContent}>
                  <p className={c.currencyLabel}>{offer.toCurrency}</p>
                  <p className={c.bankLabel}>{offer.toBank}</p>
                </div>
              </td>
              <td className={c.offerItem}>
                <div className={c.offerItemContent}>
                  <p className={c.profitLabel}>Профит</p>
                  <p className={c.profitValue}>{`${offer.profit} ₽`}</p>
                </div>
                <div className={c.offerItemContent}>
                  <div className={c.forwardIcon}>
                    <img src={forwardSVG} />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
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
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  ordersPageContainer: {
    width: '100%',
    height: '100vh',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  header: {
    background: colors.backgroundMinor,
    padding: [16, 21],
    display: 'flex',
    justifyContent: 'space-between',

    '& > p': {
      color: colors.text,
      margin: 0,
    },
  },
  scrollList: {
    background: colors.background,
    padding: 0,
    margin: 0,
    listStyle: 'none',
    display: 'flex',
    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
  },
  scrollListItem: {
    color: colors.text,
    padding: [11, 14],
    '& + &': {
      marginLeft: 23,
    },
  },
  scrollListItemSelected: {
    color: '#000',
    background: colors.control,
  },
  offerBlock: {
    // background: '#252525',
    padding: [16, 12, 14],
  },
  offerList: {
    width: '100%',
  },
  offerItem: {
    padding: 12,
    background: '#252525',
    '&:nth-child(1)': {
      borderRadius: [5, 0, 0, 5],
    },
    '&:nth-child(3)': {
      borderRadius: [0, 5, 5, 0],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  offerItemContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '& > p': {
      margin: 0,
      fontSize: 15,
      lineHeight: '18px',
    },
    '& > p + p': {
      marginTop: 4,
    },
  },
  currencyLabel: {
    color: colors.text,
    fontWeight: 700,
  },
  bankLabel: {
    color: colors.textMinor,
    fontWeight: 400,
  },
  profitLabel: {
    color: colors.text,
  },
  profitValue: {
    color: colors.primaryGreen,
    fontWeight: 500,
  },
  forwardIcon: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.3)',
  },
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
      margin: 0,
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
      margin: 0,
      color: colors.text,
    },
  },
  priceLabel: {
    color: colors.control,
    margin: 0,
  },
}))

export default OrdersPage
