import React from 'react'
import classes from '../../table.module.css'
import { useDispatch } from 'react-redux'
import { getRequest } from '../../../../redux/actions/requests'

const TableRow = ({ rowClass, request }) => {
  const dispatch = useDispatch()

  const handleSelectRequest = () => {
    dispatch(getRequest(request.id))
  }

  const borderLeft = <div className={classes['border-left']} />

  return (
    <div
      className={`${rowClass} ${classes['table-row']}`}
      onClick={handleSelectRequest}
    >
      <div className={classes['table-cell']}>
        {borderLeft}
        {request.id}
      </div>
      <div className={classes['table-cell']}>{request.name}</div>
      <div className={classes['table-cell']}>
        <button
          style={{ backgroundColor: request.statusRgb }}
          className={classes['status-btn']}
        >
          {request.statusName}
        </button>
      </div>
      <div className={classes['table-cell']}>{request.executorName}</div>
    </div>
  )
}

export default TableRow
