import React from 'react'
import classes from './comment.module.css'
import dayjs from 'dayjs'

require('dayjs/locale/ru')

const Comment = ({ comment }) => {
  const date = dayjs(comment.createdAt).locale('ru')

  return (
    <div className={classes['comment-block']}>
      <div className={classes['comment-avatar']} />
      <div className={classes['comment-wrap']}>
        <div className={classes['comment-name']}>{comment.userName}</div>
        <div className={classes['comment-date']}>
          {date.format('DD MMMM, HH:mm прокомментировал(а)')}
        </div>
        <div className={classes['comment-text']}>{comment.comment}</div>
      </div>
    </div>
  )
}

export default Comment
