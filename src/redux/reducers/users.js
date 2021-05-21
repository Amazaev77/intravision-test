import { LOAD_USERS_STARTED, LOAD_USERS_SUCCEEDED, CLEAR_USERS } from '../types'

const initialState = {
  users: null,
  loading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_USERS_STARTED:
      return {
        ...state,
        loading: true,
      }

    case LOAD_USERS_SUCCEEDED:
      return {
        ...state,
        users: action.payload,
        loading: false,
      }

    case CLEAR_USERS:
      return { ...state, users: null }

    default:
      return state
  }
}
