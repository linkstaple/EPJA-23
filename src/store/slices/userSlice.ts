import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BankType, CoinFilterType, Offer } from '../types'
import { useAppSelector } from 'src/hooks/useRedux'
import { useMemo } from 'react'

type BankFilter = Record<BankType, boolean>

type UserState = {
  allOffers: Offer[]
  bankFilter: BankFilter
  coinFilter: CoinFilterType
}

const initialState: UserState = {
  allOffers: [],
  bankFilter: {
    TinkoffNew: true,
    RosBank: true,
    RaiffeisenBankRussia: true,
    QIWI: true,
    YandexMoney: true,
    PostBankRussia: true,
    ABank: true,
  },
  coinFilter: CoinFilterType.All,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.allOffers = action.payload
    },
    setCoinFilter: (state, action: PayloadAction<CoinFilterType>) => {
      state.coinFilter = action.payload
    },
    setBankFilter: (state, action: PayloadAction<BankFilter>) => {
      state.bankFilter = action.payload
    },
  },
})

export const { setOffers, setCoinFilter, setBankFilter } = userSlice.actions

export const useFilteredOffers = () => {
  const { allOffers, bankFilter, coinFilter } = useAppSelector(state => state.user)
  const filteredOffers = useMemo(
    () =>
      allOffers.filter(
        ({ buy, sell }) =>
          (bankFilter[buy.payType] || bankFilter[sell.payType]) &&
          coinFilter !== CoinFilterType.All &&
          coinFilter === buy.asset,
      ),
    [allOffers],
  )

  return filteredOffers
}

export const useSelectedCoin = () => useAppSelector(state => state.user.coinFilter)

export const coinsList = [
  { title: 'Все', type: CoinFilterType.All },
  { title: 'USDT', type: CoinFilterType.USDT },
  { title: 'BTC', type: CoinFilterType.BTC },
  { title: 'BNB', type: CoinFilterType.BNB },
  { title: 'ETH', type: CoinFilterType.ETH },
  { title: 'BUSD', type: CoinFilterType.BUSD },
] as const

export default userSlice.reducer
