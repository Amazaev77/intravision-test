import React from 'react'
import classes from './table.module.css'
import RequestList from './RequestList'

const Table = () => {
  return (
    <div>
      <div className={classes['table-row-head']}>
        <div className={classes['table-cell-head']}>ID</div>
        <div className={classes['table-cell-head']}>Название</div>
        <div className={classes['table-cell-head']}>Статус</div>
        <div className={classes['table-cell-head']}>Исполнитель</div>
      </div>
      <RequestList />
    </div>
  )
}

export default Table
