import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Offer } from '../types'
import { useAppSelector } from 'src/hooks/useRedux'

type CoinType = 'Tinkoff' | 'RosBank' | 'RaiffeisenBankRussia' | 'QIWI' | 'YandexMoney' | 'PostBankRussia' | 'ABank'

type BankFilter = Record<CoinType, boolean>

type UserState = {
  allOffers: Offer[]
  bankFilter: BankFilter
  coinFilter: string | null
}

const initialState: UserState = {
  allOffers: [],
  bankFilter: {
    Tinkoff: true,
    RosBank: true,
    RaiffeisenBankRussia: true,
    QIWI: true,
    YandexMoney: true,
    PostBankRussia: true,
    ABank: true,
  },
  coinFilter: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setOffers: (state, action: PayloadAction<Offer[]>) => {
      state.allOffers = action.payload
    },
    setCoinFilter: (state, action: PayloadAction<string>) => {
      state.coinFilter = action.payload
    },
    clearCoinFilter: state => {
      state.coinFilter = null
    },
    setBankFilter: (state, action: PayloadAction<BankFilter>) => {
      state.bankFilter = action.payload
    },
  },
})

export const { setOffers, setCoinFilter, clearCoinFilter, setBankFilter } = userSlice.actions

export const useFilteredOffers = () => useAppSelector(state => state.user.allOffers)

export default userSlice.reducer
