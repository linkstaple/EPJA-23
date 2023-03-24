import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createStyles } from '@theme'

import { useAppDispatch } from 'src/hooks/useRedux'
import { setBudget } from 'src/store/slices/budgetSlice'

import MoneyIcon from '@icons/Money.svg'
import RubleIcon from '@icons/Ruble.svg'

import { routeConfig } from '../../util/routes'

export const Budget = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const cls = useStyles()

  const [amount, setAmount] = useState<number>(10000)

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (RegExp('^[ 0-9]+$').test(value)) setAmount(Number(value))
    if (value === '') setAmount(0)
  }

  const handleContinue = () => {
    dispatch(setBudget(amount))

    navigate(routeConfig.orders.path as string)
  }

  return (
    <div className={cls.wrapper}>
      <div className={cls.title}>
        <p>Стартовый</p>
        <p>бюджет</p>
      </div>
      <div>
        <div className={cls.bugetContainer}>
          <img
            src={MoneyIcon}
            alt="Money"
          />
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
          />
          <img
            src={RubleIcon}
            alt="Ruble"
          />
        </div>

        <div className={cls.btnContainer}>
          <button
            className={cls.btn}
            onClick={handleContinue}
          >
            Продолжить
          </button>
        </div>
      </div>
    </div>
  )
}

const useStyles = createStyles(({ colors }) => ({
  wrapper: {
    width: '100%',
    padding: '19px 30px 30px 28px',
    fontFamily: 'TTNorms-Bold, sans-serif',
    color: 'white',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

    '& input': {
      background: '#1A1515',
      textAlign: 'right',
      padding: '12px',
      color: colors.control,
      border: 'none',
      fontFamily: 'TTNorms-Bold, sans-serif',
      fontSize: '20px',
    },
  },
  bugetContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '23px',
    marginTop: '27px',

    '& img': {
      padding: '0 20px',
    },
  },
  title: {
    fontWeight: '700',
    fontSize: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    background: colors.control,
    padding: '10px 15px',
    fontSize: '18px',
    fontWeight: '700',
    marginTop: '35px',
  },
}))
