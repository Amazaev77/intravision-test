import React from 'react'
import { Route } from 'react-router-dom'
import RequestPage from './RequestPage'

const BasePage = () => <h1>База знаний</h1>
const EmployeesPage = () => <h1>Сотрудники</h1>
const ClientsPage = () => <h1>Клиенты</h1>
const AssetsPage = () => <h1>Активы</h1>
const SettingsPage = () => <h1>Настройки</h1>

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={RequestPage} />
      <Route path="/base" exact component={BasePage} />
      <Route path="/employees" exact component={EmployeesPage} />
      <Route path="/clients" exact component={ClientsPage} />
      <Route path="/assets" exact component={AssetsPage} />
      <Route path="/settings" exact component={SettingsPage} />
    </>
  )
}

export default Routes
