import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Routes from './pages/Routes'
import classes from './app.module.css'

const App = () => {
  return (
    <div className={classes['app']}>
      <Sidebar />
      <div className={classes['wrapper']}>
        <Header />
        <main className={classes['main']}>
          <Routes />
        </main>
      </div>
    </div>
  )
}

export default App
