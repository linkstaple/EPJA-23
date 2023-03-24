import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createStyles } from '@theme'
import cn from 'classnames'

import forwardSVG from '@icons/Arrow.svg'

import { setCoinFilter, useFilteredOffers } from 'src/store/slices/userSlice'
import { setActiveCase } from 'src/store/slices/budgetSlice'

import { useAppDispatch, useAppSelector } from 'src/hooks/useRedux'
import { CoinFilterType, Offer } from 'src/store/types'

import { banksMapper, coinsList } from 'src/consts'
import { routeConfig } from 'src/util/routes'

import FilterModal from 'src/components/FilterModal/FilterModal'

const OrdersPage = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const c = useStyles()
  const tableWrapperRef = useRef<HTMLDivElement>(null)

  const [showFilterModal, setShowFilterModal] = useState(false)
  const offers = useFilteredOffers()
  const selectedCoin = useAppSelector(state => state.user.coinFilter)
  const { budget } = useAppSelector(state => state.budget)

  const closeFilterModal = () => {
    setShowFilterModal(false)
  }
  const openFilterModal = () => setShowFilterModal(true)
  const onCoinClick = (coin: CoinFilterType) => () => {
    dispatch(setCoinFilter(coin))
    tableWrapperRef.current?.scrollTo({ top: 0 })
  }
  const onOfferClick = (offer: Offer) => () => {
    dispatch(setActiveCase(offer))
    navigate(routeConfig.order.path)
  }

  return (
    <div className={c.ordersPageContainer}>
      {showFilterModal && <FilterModal close={closeFilterModal} />}
      <ul className={c.scrollList}>
        {coinsList.map(({ title, type }, idx) => (
          <li
            key={idx}
            className={cn(c.scrollListItem, {
              [c.scrollListItemSelected]: type === selectedCoin,
            })}
            onClick={onCoinClick(type)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className={c.offerBlock}>
        <div
          className={c.tableWrapper}
          ref={tableWrapperRef}
        >
          {offers.length === 0 && <p className={c.offersNotFoundMessage}>Сделки не найдены</p>}
          {offers.length !== 0 && (
            <table className={c.offerList}>
              <tbody>
                {offers.map((offer, idx) => (
                  <tr key={idx}>
                    <td className={c.offerItem}>
                      <div className={c.offerItemContent}>
                        <p className={c.bankLabel}>{banksMapper[offer.buy.payType]}</p>
                        <p className={c.currencyLabel}>{offer.buy.asset}</p>
                      </div>
                    </td>
                    <td className={c.offerItem}>
                      <div className={c.offerItemContent}>
                        <p className={c.currencyLabel}>{offer.sell.asset}</p>
                        <p className={c.bankLabel}>{banksMapper[offer.sell.payType]}</p>
                      </div>
                    </td>
                    <td className={c.offerItem}>
                      <div className={c.offerItemContent}>
                        <p className={c.profitLabel}>Профит</p>
                        <p className={c.profitValue}>{`${Math.floor((offer.profit * budget) / 100)} ₽`}</p>
                      </div>
                      <div className={c.offerItemContent}>
                        <button
                          className={c.forwardIcon}
                          onClick={onOfferClick(offer)}
                        >
                          <img src={forwardSVG} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
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
    display: 'flex',
    flexFlow: 'column',
  },
  scrollList: {
    background: colors.background,
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
    '&:hover': {
      cursor: 'pointer',
    },
  },
  scrollListItemSelected: {
    color: '#000',
    background: colors.control,
  },
  offerBlock: {
    padding: [16, 12, 14],
    flex: '1 1 auto',
    marginBottom: 86,
    overflow: 'hidden',
  },
  tableWrapper: {
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    cursor: 'pointer',
  },
  offersNotFoundMessage: {
    whiteSpace: 'nowrap',
    fontSize: 33,
    lineHeight: '37px',
    fontWeight: 600,
    color: colors.text,
  },
}))

export default OrdersPage
