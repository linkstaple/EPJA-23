import React from 'react'
import { RouteProps } from 'react-router-dom'
import { OrderPage, MainPage, OrdersPage } from '../pages'

export enum AppRoutes {
  MAIN = 'main',
  ORDERS = 'orders',
  ORDER = 'order',
}

export const __BASE_ROUTE__ = '/epja-23'

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: __BASE_ROUTE__ + '/',
  [AppRoutes.ORDERS]: __BASE_ROUTE__ + '/orders',
  [AppRoutes.ORDER]: __BASE_ROUTE__ + '/orders/offer',
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
  [AppRoutes.ORDER]: {
    path: RoutePath.order,
    element: <OrderPage />,
  },
}
