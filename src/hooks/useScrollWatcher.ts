import React, { useEffect } from 'react'
import { useAppSelector } from './useRedux'

const useTableScrollWatcher = (elementRef: React.RefObject<HTMLDivElement>) => {
  const { allOffers, coinFilter, bankFilter } = useAppSelector(state => state.user)

  useEffect(() => {
    elementRef.current?.scrollTo({ top: 0 })
  }, [allOffers, coinFilter, bankFilter])
}

export default useTableScrollWatcher
