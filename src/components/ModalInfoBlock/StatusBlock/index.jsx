import React from 'react'
import classes from './status-block.module.css'
import editIcon from '../../../icons/edit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { clearStatuses, loadStatuses } from '../../../redux/actions/statuses'
import { editStatus } from '../../../redux/actions/requests'

const Statuses = () => {
  const dispatch = useDispatch()

  const { statusRgb, statusName, id } = useSelector(
    state => state.requests.selectedRequest
  )

  const statusesLoadHandler = () => {
    dispatch(loadStatuses())
  }

  const selectStatusHandler = statusId => {
    dispatch(editStatus(statusId, id))
    dispatch(clearStatuses())
  }

  const statuses = useSelector(state => state.statuses.statuses)
  const loading = useSelector(state => state.statuses.loading)

  return (
    <div className={classes['status-block']}>
      <div
        style={{ backgroundColor: statusRgb }}
        className={classes['status-block-circle']}
      />
      <div>{statusName}</div>
      <img
        src={editIcon}
        alt="edit icon"
        className={classes['status-block-edit-icon']}
        onClick={statusesLoadHandler}
      />
      {loading && (
        <div className={classes['status-list']}>
          <div>Загрузка...</div>
        </div>
      )}
      {statuses && (
        <div className={classes['status-list']}>
          {statuses.map(({ rgb, name, id }) => (
            <div
              key={id}
              style={{ color: rgb }}
              onClick={() => selectStatusHandler(id)}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Statuses
