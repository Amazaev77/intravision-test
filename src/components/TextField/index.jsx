import React from 'react'
import classes from './text-field.module.css'

const TextField = props => {
  const { title, height, value, onChange, placeholder, className } = props

  return (
    <div className={classes['text-field']}>
      <div className={classes['text-field-title']}>{title}</div>
      <textarea
        style={{ height }}
        className={`${className} ${classes['text-field-textarea']}`}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder && placeholder}
      />
    </div>
  )
}

export default TextField
