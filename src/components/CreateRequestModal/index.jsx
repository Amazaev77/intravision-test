import React, { useState } from 'react'
import classes from './modal.module.css'
import cancelIcon from '../../icons/cancel.svg'
import TextField from '../TextField'
import Button from '../Button'
import {
  addRequest,
  closeCreateRequestModal,
} from '../../redux/actions/requests'
import { useDispatch } from 'react-redux'

const CreateRequestModal = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleShowModal = () => {
    dispatch(closeCreateRequestModal())
  }

  const handleSaveRequest = () => {
    if (name && description) {
      dispatch(addRequest(name, description))
    }
  }

  return (
    <div className={classes['modal-block']}>
      <div className={classes['modal-header']}>
        <div className={classes['modal-title']}>Новая заявка</div>
        <div className={classes['modal-cancel']}>
          <img onClick={handleShowModal} src={cancelIcon} alt="cancel" />
        </div>
      </div>
      <div className={classes['modal-content']}>
        <div className={classes['modal-content-wrap']}>
          <TextField
            title="Название"
            height={85}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            title="Описание"
            height={134}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Button className={classes['btn-save']} onClick={handleSaveRequest}>
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateRequestModal
