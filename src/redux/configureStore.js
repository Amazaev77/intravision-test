import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger/src'
import requests from './reducers/requests'
import statuses from './reducers/statuses'
import users from './reducers/users'

const rootReducer = combineReducers({
  requests,
  statuses,
  users,
})

const logger = createLogger({
  collapsed: true,
  diff: true,
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))
