import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newTransactionsCurrentPageSelector } from '../../store/selectors/newTransactions'
import { useFetchNewTransactions } from '../../container/hooks/useFetchNewTransactions'
import { ButtonLink } from '@gnosis.pm/safe-react-components'
import { setPreviousPage } from '../../store/actions/transactionsNew/setPreviousPage'
import { setNextPage } from '../../store/actions/transactionsNew/setNextPage'

const Transactions = (): React.ReactElement => {
  const dispatch = useDispatch()
  useFetchNewTransactions()
  const transactions = useSelector(newTransactionsCurrentPageSelector)

  if (!transactions) return <div>No txs available for safe</div>

  const nextPageButtonHandler = () => {
    dispatch(setNextPage())
  }

  const previousPageButtonHandler = () => {
    dispatch(setPreviousPage())
  }

  return (
    <>
      {transactions.map((tx, index) => {
        const txHash = tx.transactionHash || tx.txHash
        return <div key={index}>Tx hash: {txHash}</div>
      })}
      <ButtonLink color="primary" onClick={() => previousPageButtonHandler()}>
        Previous Page
      </ButtonLink>
      <ButtonLink color="primary" onClick={() => nextPageButtonHandler()}>
        Next Page
      </ButtonLink>
    </>
  )
}

export default Transactions