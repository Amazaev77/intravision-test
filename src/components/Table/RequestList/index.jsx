import React, { useEffect } from 'react'
import classes from '../table.module.css'
import { useDispatch, useSelector } from 'react-redux'
import TableRow from './TableRow'
import { loadRequests } from '../../../redux/actions/requests'

const RequestList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRequests())
  }, [dispatch])

  const requests = useSelector(state => state.requests.requests)
  const loading = useSelector(state => state.requests.loading)

  const skeleton = new Array(8)
    .fill()
    .map((_, index) => <div key={index} className={classes['skeleton']} />)

  if (loading) {
    return skeleton
  }

  return requests.map(request => (
    <TableRow
      key={request.id}
      request={request}
      rowClass={classes['row-class']}
    />
  ))
}

export default RequestList
