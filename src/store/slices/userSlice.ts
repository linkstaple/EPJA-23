import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BankType, CoinFilterType, Offer } from '../types'
import { useAppSelector } from 'src/hooks/useRedux'

export type BankFilter = Record<BankType, boolean>

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
    RaiffeisenBank: true,
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

export const useFilteredOffers = () =>
  useAppSelector(state => {
    const { allOffers, bankFilter, coinFilter } = state.user
    return allOffers.filter(
      ({ buy, sell }) =>
        bankFilter[buy.payType] &&
        bankFilter[sell.payType] &&
        (coinFilter === CoinFilterType.All || coinFilter === buy.asset),
    )
  })

export default userSlice.reducer
