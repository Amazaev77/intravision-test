import React from 'react'
import classes from './executor-block.module.css'
import { useDispatch, useSelector } from 'react-redux'
import editIcon from '../../../icons/edit.svg'
import { clearUsers, loadUsers } from '../../../redux/actions/users'
import { editUser } from '../../../redux/actions/requests'

const ExecutorBlock = () => {
  const dispatch = useDispatch()

  const { executorName, id } = useSelector(
    state => state.requests.selectedRequest
  )

  const users = useSelector(state => state.users.users)

  const usersLoadHandler = () => {
    dispatch(loadUsers())
  }

  const selectUserHandler = userId => {
    dispatch(editUser(userId, id))
    dispatch(clearUsers())
  }

  return (
    <div className={classes['executor-block']}>
      <div className={classes['executor-title']}>Исполнитель</div>
      <div className={classes['executor-name']}>{executorName}</div>
      <img
        src={editIcon}
        alt="edit icon"
        className={classes['executor-edit-icon']}
        onClick={usersLoadHandler}
      />
      {users && (
        <div className={classes['executor-list']}>
          {users.map(({ name, id }) => (
            <div key={id} onClick={() => selectUserHandler(id)}>
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExecutorBlock
