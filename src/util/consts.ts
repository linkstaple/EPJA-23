import { BankType, CoinFilterType } from 'src/store/types'

export const banksMapper: Record<BankType, string> = {
  TinkoffNew: 'Тинькофф',
  RosBank: 'Росбанк',
  RaiffeisenBank: 'Райффайзенбанк',
  QIWI: 'Qiwi',
  YandexMoney: 'Yandex Money',
  PostBankRussia: 'Почта Банк',
  ABank: 'ABank',
}

export const coinsList = [
  { title: 'Все', type: CoinFilterType.All },
  { title: 'USDT', type: CoinFilterType.USDT },
  { title: 'BTC', type: CoinFilterType.BTC },
  { title: 'BNB', type: CoinFilterType.BNB },
  { title: 'ETH', type: CoinFilterType.ETH },
  { title: 'BUSD', type: CoinFilterType.BUSD },
] as const

export const banksList = Object.keys(banksMapper) as unknown as BankType[]

export const FOOTER_HEIGHT = 86
