export type Offer = {
  buy: {
    asset: string
    price: number
    payType: string
    minAvailabelAmount: number
    maxAvailableAmount: number
  }
  sell: {
    asset: string
    price: number
    payType: string
    minAvailabelAmount: number
    maxAvailableAmount: number
    marketPrice: string
  }
  profit: number
}
