import React, { useState } from 'react'
import classes from './header.module.css'
import loupe from '../../icons/loupe.svg'

const Header = () => {
  const [searchValue, setSearchValue] = useState('')

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className={classes['header-inner']}>
      <header className={classes['header']}>
        <form onSubmit={onSubmit} className={classes['header-form']}>
          <input
            className={classes['header-input']}
            type="text"
            value={searchValue}
            placeholder="Введите Фамилию, Статус, Приоритет, Тег и т.д. чтобы найти заявки"
            onChange={e => setSearchValue(e.target.value)}
          />
          <img
            className={classes['header-loupe-icon']}
            src={loupe}
            alt="loupe"
          />
        </form>
      </header>
    </div>
  )
}

export default Header
