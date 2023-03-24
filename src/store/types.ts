export type BankType = 'TinkoffNew' | 'RosBank' | 'RaiffeisenBank' | 'QIWI' | 'YandexMoney' | 'PostBankRussia' | 'ABank'

export enum CoinFilterType {
  All = 'All',
  USDT = 'USDT',
  BTC = 'BTC',
  BNB = 'BNB',
  ETH = 'ETH',
  BUSD = 'BUSD',
}

export type Coin = 'USDT' | 'BTC' | 'BNB' | 'ETH' | 'BUSD'

export type Offer = {
  buy: {
    asset: Coin
    price: number
    payType: BankType
    minAvailabelAmount: number
    maxAvailableAmount: number
  }
  sell: {
    asset: Coin
    price: number
    payType: BankType
    minAvailabelAmount: number
    maxAvailableAmount: number
    marketPrice: string
  }
  profit: number
}
