import { v4 as uuidv4 } from 'uuid'
import {
  ADD_REQUEST_STARTED,
  ADD_REQUEST_SUCCEEDED,
  CLOSE_CREATE_REQUEST_MODAL,
  CLOSE_EDIT_REQUEST_MODAL,
  EDIT_EXECUTOR_STARTED,
  EDIT_EXECUTOR_SUCCEEDED,
  EDIT_STATUS_STARTED,
  EDIT_STATUS_SUCCEEDED,
  LOAD_REQUEST_STARTED,
  LOAD_REQUEST_SUCCEEDED,
  LOAD_REQUESTS_STARTED,
  LOAD_REQUESTS_SUCCEEDED,
  SHOW_CREATE_REQUEST_MODAL,
  ADD_COMMENT_STARTED,
  ADD_COMMENT_SUCCEEDED,
} from '../types'
import dayjs from 'dayjs'

const guid = '16e6d3bc-294f-4636-abdb-36d40d83e816'
const api = 'http://intravision-task.test01.intravision.ru/api/'

export const loadRequests = () => {
  return async dispatch => {
    dispatch({ type: LOAD_REQUESTS_STARTED })

    const api =
      'http://intravision-task.test01.intravision.ru/odata/tasks?tenantguid='

    const response = await fetch(api + guid)
    const requests = await response.json()

    dispatch({ type: LOAD_REQUESTS_SUCCEEDED, payload: requests.value })
  }
}

export const addRequest = (name, description) => {
  return async dispatch => {
    dispatch({ type: ADD_REQUEST_STARTED })

    const res = await fetch(api + guid + '/Tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    })

    // дает неправильный id
    const result = await res.json()

    dispatch({
      type: ADD_REQUEST_SUCCEEDED,
      payload: result,
    })

    dispatch(loadRequests())
  }
}

export const getRequest = id => {
  return async dispatch => {
    dispatch({ type: LOAD_REQUEST_STARTED })

    const res = await fetch(api + guid + '/Tasks/' + id)
    const result = await res.json()

    dispatch({ type: LOAD_REQUEST_SUCCEEDED, payload: result })
  }
}

export const editStatus = (statusId, idRequest) => {
  return async (dispatch, getState) => {
    dispatch({ type: EDIT_STATUS_STARTED })

    // Беру статусы с другого редюсера
    const statuses = getState().statuses.statuses
    const status = statuses.find(status => status.id === statusId)

    // Тут я сделал бы запрос на изменение заявки, но возникли проблемы с api.
    // Далее он бы дал измененный элемент и я заменил бы его в редюсере

    dispatch({
      type: EDIT_STATUS_SUCCEEDED,
      payload: { id: idRequest, status },
    })
  }
}

export const editUser = (userId, idRequest) => {
  return async (dispatch, getState) => {
    dispatch({ type: EDIT_EXECUTOR_STARTED })

    // Беру юзеры с другого редюсера
    const users = getState().users.users
    const user = users.find(user => user.id === userId)

    // Тут я сделал бы запрос на изменение заявки, но возникли проблемы с api.
    // Далее он бы дал измененный элемент и я заменил бы его в редюсере

    dispatch({
      type: EDIT_EXECUTOR_SUCCEEDED,
      payload: { id: idRequest, user },
    })
  }
}

export const addComment = comment => {
  return async dispatch => {
    dispatch({ type: ADD_COMMENT_STARTED })

    // Не нашел способ добавить комментарий на сервере
    // Поэтому добавил только в редюсере

    const id = uuidv4()
    const createdAt = dayjs().format()
    const userName = 'Иванов Андрей'

    dispatch({
      type: ADD_COMMENT_SUCCEEDED,
      payload: { id, comment, createdAt, userName },
    })
  }
}

export const showCreateRequestModal = () => {
  return { type: SHOW_CREATE_REQUEST_MODAL }
}

export const closeCreateRequestModal = () => {
  return { type: CLOSE_CREATE_REQUEST_MODAL }
}

export const closeEditRequestModal = () => {
  return { type: CLOSE_EDIT_REQUEST_MODAL }
}
