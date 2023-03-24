import { Coin } from 'src/store/types'

export function roundWithAsset(data: number, asset: Coin) {
  switch (asset) {
    case 'USDT':
    case 'BUSD':
      return Number(data.toFixed(2))

    case 'BTC':
    case 'BNB':
    case 'ETH':
      return Number(data.toFixed(8))

    default:
      return Number(data.toFixed(0))
  }
}
