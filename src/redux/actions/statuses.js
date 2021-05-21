import {
  CLEAR_STATUSES,
  LOAD_STATUSES_STARTED,
  LOAD_STATUSES_SUCCEEDED,
} from '../types'

export const loadStatuses = () => {
  return async dispatch => {
    dispatch({ type: LOAD_STATUSES_STARTED })

    const guid = '16e6d3bc-294f-4636-abdb-36d40d83e816'
    const api = 'http://intravision-task.test01.intravision.ru/api/'

    const response = await fetch(`${api}${guid}/Statuses`)
    const statuses = await response.json()

    dispatch({ type: LOAD_STATUSES_SUCCEEDED, payload: statuses })
  }
}

export const clearStatuses = () => {
  return { type: CLEAR_STATUSES }
}
