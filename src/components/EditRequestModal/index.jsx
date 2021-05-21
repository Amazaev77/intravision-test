import React, { useState } from 'react'
import classes from './modal.module.css'
import cancelIcon from '../../icons/cancel.svg'
import Button from '../Button'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, closeEditRequestModal } from '../../redux/actions/requests'
import TextField from '../TextField'
import Comments from '../Comments'
import ModalInfoBlock from '../ModalInfoBlock'

const EditRequestModal = () => {
  const dispatch = useDispatch()

  const [comment, setComment] = useState('')

  const handleCloseModal = () => {
    dispatch(closeEditRequestModal())
  }

  const handleAddComment = () => {
    dispatch(addComment(comment))
    setComment('')
  }

  const selectedRequest = useSelector(state => state.requests.selectedRequest)
  const { id, name, description } = selectedRequest

  return (
    <div className={classes['modal-block']}>
      <div className={classes['modal-header']}>
        <div className={classes['modal-title']}>№ {id}</div>
        <div className={classes['modal-name']}>{name}</div>
        <div className={classes['modal-cancel']}>
          <img onClick={handleCloseModal} src={cancelIcon} alt="cancel" />
        </div>
      </div>
      <div className={classes['modal-content']}>
        <div className={classes['modal-content-wrap']}>
          <div className={classes['modal-description']}>
            <span>Описание</span>
            <div
              dangerouslySetInnerHTML={{ __html: description }}
              className={classes['modal-description-text']}
            />
          </div>
          <TextField
            placeholder="Добавление комментария"
            className={classes['modal-add-comment-textarea']}
            value={comment}
            onChange={e => setComment(e.target.value)}
            height={80}
          />
          <Button className={classes['btn-save']} onClick={handleAddComment}>
            Сохранить
          </Button>
          <Comments />
        </div>
        <ModalInfoBlock />
      </div>
    </div>
  )
}

export default EditRequestModal
