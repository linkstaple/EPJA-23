import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { Offer } from 'src/store/types'
import { useAppDispatch } from './useRedux'
import { setOffers } from 'src/store/slices/userSlice'

const useOffersWatcher = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    const onData = (offers: Offer[]) => {
      dispatch(setOffers(offers))
    }

    const socket = io('https://9182739817293213.site')
    socket.on('cases', onData)

    return () => {
      socket.off('cases', onData)
    }
  }, [])
}

export default useOffersWatcher
