import React from 'react'
import { RouteProps } from 'react-router-dom'
import { MainPage, OrdersPage } from 'src/pages'

export enum AppRoutes {
  MAIN = 'main',
  ORDERS = 'orders',
}

export const __BASE_ROUTE__ = '/epja-23'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: __BASE_ROUTE__ + '/',
  [AppRoutes.ORDERS]: __BASE_ROUTE__ + '/orders',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ORDERS]: {
    path: RoutePath.orders,
    element: <OrdersPage />,
  },
}
