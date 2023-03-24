import { BankType } from 'src/store/types'

export const banksMapper: { [x: BankType]: string } = {
  TinkoffNew: 'Тинькофф',
  RosBank: 'Росбанк',
  RaiffeisenBank: 'Райффайзенбанк',
  QIWI: 'Qiwi',
  YandexMoney: 'Yandex Money',
  PostBankRussia: 'Почта Банк',
  ABank: 'ABank',
}
