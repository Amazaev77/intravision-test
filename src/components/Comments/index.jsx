import React from 'react'
import { useSelector } from 'react-redux'
import Comment from './Comment'

const Comments = () => {
  const comments = useSelector(
    state => state.requests.selectedRequest.lifetimeItems
  )

  if (!comments) {
    return null
  }

  return comments.map(comment => <Comment key={comment.id} comment={comment} />)
}

export default Comments
