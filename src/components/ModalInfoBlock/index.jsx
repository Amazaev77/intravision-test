import React from 'react'
import classes from './info-block.module.css'
import { useSelector } from 'react-redux'
import dayjs from 'dayjs'
import StatusBlock from './StatusBlock'
import ExecutorBlock from './ExecutorBlock'

const InfoBlockBox = ({ title, descr }) => {
  return (
    <div className={classes['info-block-box']}>
      <div className={classes['info-block-box-title']}>{title}</div>
      <div className={classes['info-block-box-name']}>{descr}</div>
    </div>
  )
}

const ModalInfoBlock = () => {
  const { createdAt, initiatorName, priorityName, tags } = useSelector(
    state => state.requests.selectedRequest
  )

  const date = dayjs(createdAt).format('DD.MM.YYYY')

  return (
    <div className={classes['info-block']}>
      <StatusBlock />
      <InfoBlockBox title="Заявитель" descr={initiatorName} />
      <InfoBlockBox title="Создана" descr="Маркова Анна" />
      <ExecutorBlock />
      <InfoBlockBox title="Приоритет" descr={priorityName} />
      <InfoBlockBox title="Срок" descr={date} />
      <InfoBlockBox
        title="Теги"
        descr={tags.map(tag => (
          <div key={tag.id} className={classes['info-block-tag']}>
            {tag.name}
          </div>
        ))}
      />
    </div>
  )
}

export default ModalInfoBlock
