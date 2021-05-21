import React from 'react'
import classes from './sidebar.module.css'
import logo from '../../icons/logo.png'
import book from '../../icons/book.png'
import file from '../../icons/file.png'
import city from '../../icons/city.png'
import people from '../../icons/people.png'
import analytics from '../../icons/analytics.png'
import settings from '../../icons/settings.png'
import MenuItem from '../MenuItem'

const Sidebar = () => {
  return (
    <div className={classes['sidebar-inner']}>
      <aside className={classes['sidebar']}>
        <img className={classes['sidebar-logo']} src={logo} alt="logo" />
        <nav>
          <ul className={classes['sidebar-menu']}>
            <MenuItem link="/base" icon={book} text="База знаний" alt="book" />
            <MenuItem link="/" icon={file} text="Заявки" alt="file" />
            <MenuItem
              link="/employees"
              icon={city}
              text="Сотрудники"
              alt="city"
            />
            <MenuItem
              link="/clients"
              icon={people}
              text="Клиенты"
              alt="people"
            />
            <MenuItem
              link="/assets"
              icon={analytics}
              text="Активы"
              alt="analytics"
            />
            <MenuItem
              link="/settings"
              icon={settings}
              text="Настройки"
              alt="settings"
            />
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar
