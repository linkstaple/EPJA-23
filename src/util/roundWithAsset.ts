import { CoinFilterType } from './../store/types'

export function roundWithAsset(data: number, asset: CoinFilterType) {
  switch (asset) {
    case CoinFilterType.USDT:
    case CoinFilterType.BUSD:
      return data.toFixed(2)

    case CoinFilterType.BTC:
    case CoinFilterType.ETH:
    case CoinFilterType.BNB:
      return data.toFixed(8)

    default:
      return data.toFixed(0)
  }
}
