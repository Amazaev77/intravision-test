import React from 'react'
import classes from './request.module.css'
import Button from '../../components/Button'
import Table from '../../components/Table'
import CreateRequestModal from '../../components/CreateRequestModal'
import { useDispatch, useSelector } from 'react-redux'
import EditRequestModal from '../../components/EditRequestModal'
import { showCreateRequestModal } from '../../redux/actions/requests'

const RequestPage = () => {
  const dispatch = useDispatch()

  const showCreateModal = useSelector(
    state => state.requests.showCreateRequestModal
  )
  const showEditModal = useSelector(state => state.requests.showEditRequestModal)

  const showModalHandler = () => {
    if (showCreateModal === false) {
      dispatch(showCreateRequestModal())
    }
  }

  return (
    <div className={classes['request-block']}>
      <Button
        className={classes['create-request-button']}
        onClick={showModalHandler}
      >
        Создать заявку
      </Button>
      <Table />
      {showCreateModal && <CreateRequestModal />}
      {showEditModal && <EditRequestModal />}
    </div>
  )
}

export default RequestPage
