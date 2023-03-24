import { createStyles } from '@theme'
import cn from 'classnames'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useAppSelector } from 'src/hooks/useRedux'
import { BankFilter } from 'src/store/slices/userSlice'
import { BankType } from 'src/store/types'
import { banksMapper } from 'src/util/banksMapper'

const banksList = Object.keys(banksMapper) as unknown as BankType[]

type FilterModalProps = {
  close: (newFilters: BankFilter) => void
}

const FilterModal: React.FC<FilterModalProps> = ({ close }) => {
  const c = useStyles()
  const banksFilter = useAppSelector(state => state.user.bankFilter)
  const [filterState, setFilterState] = useState(() => ({ ...banksFilter }))

  const onBankClick = (bankId: BankType) => () => {
    setFilterState(prevState => {
      prevState[bankId] = !prevState[bankId]
      return { ...prevState }
    })
  }

  const closeModal = () => {
    close(filterState)
  }

  return createPortal(
    <div className={c.layout}>
      <p className={c.headerLabel}>Банки и платёжки</p>
      <ul>
        {banksList.map((bankId, idx) => (
          <li
            key={idx}
            className={cn(c.banksListItem, { [c.banksListItemActive]: filterState[bankId] })}
            onClick={onBankClick(bankId)}
          >
            {banksMapper[bankId]}
          </li>
        ))}
      </ul>
      <button
        className={c.submitButton}
        onClick={closeModal}
      >
        Применить
      </button>
    </div>,
    document.body,
  )
}

const useStyles = createStyles(({ colors }) => ({
  layout: {
    position: 'absolute',
    left: 0,
    top: 0,
    content: '',
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    padding: 12,
    background: 'rgba(4, 3, 3, 0.94)',
  },
  headerLabel: {
    width: 'min-content',
    color: colors.text,
    fontSize: 20,
    lineHeight: '23px',
    fontWeight: '700',
    marginBottom: 16,
  },
  banksList: {},
  banksListItem: {
    width: 'min-content',
    padding: [8, 17],
    whiteSpace: 'nowrap',
    color: colors.text,
    border: '1px solid #414141',
    borderRadius: 32,
    background: 'rgba(23, 23, 23, 0.6)',
    fontSize: 17,
    lineHeight: '20px',
    cursor: 'pointer',
    '&:active': {
      scale: 0.9,
    },
    '&+&': {
      marginTop: 12,
    },
  },
  banksListItemActive: {
    borderColor: '#F3BA2F',
    color: '#F3BA2F',
  },
  submitButton: {
    position: 'absolute',
    content: '',
    right: 12,
    bottom: 12,
    fontSize: 11,
    lineHeight: '13px',
    fontWeight: 700,
    background: '#F3BA2F',
    color: '#000',
    padding: 12,
    borderRadius: 52,
    cursor: 'pointer',
  },
}))

export default FilterModal
