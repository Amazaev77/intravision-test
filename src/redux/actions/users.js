import { CLEAR_USERS, LOAD_USERS_STARTED, LOAD_USERS_SUCCEEDED } from '../types'

export const loadUsers = () => {
  return async dispatch => {
    dispatch({ type: LOAD_USERS_STARTED })

    const guid = '16e6d3bc-294f-4636-abdb-36d40d83e816'
    const api = 'http://intravision-task.test01.intravision.ru/api/'

    const response = await fetch(api + guid + '/Users')
    const users = await response.json()

    dispatch({
      type: LOAD_USERS_SUCCEEDED,
      payload: users,
    })
  }
}

export const clearUsers = () => {
  return { type: CLEAR_USERS }
}
