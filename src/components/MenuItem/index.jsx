import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './menu-item.module.css'

const MenuItem = ({ link, alt, icon, text }) => {
  return (
    <li className={classes['menu-item']}>
      <NavLink
        to={link}
        className={classes['menu-item-link']}
        activeClassName={classes['menu-item-link-active']}
        exact
      >
        <img src={icon} alt={alt} />
        <div>{text}</div>
      </NavLink>
    </li>
  )
}

export default MenuItem
