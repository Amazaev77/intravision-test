import React from 'react'
import classes from './button.module.css'

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${className} ${classes['button']}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
