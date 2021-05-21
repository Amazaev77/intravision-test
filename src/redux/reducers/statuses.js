import {
  LOAD_STATUSES_STARTED,
  LOAD_STATUSES_SUCCEEDED,
  CLEAR_STATUSES,
} from '../types'

const initialState = {
  statuses: null,
  loading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STATUSES_STARTED:
      return {
        ...state,
        loading: true,
      }

    case LOAD_STATUSES_SUCCEEDED:
      return {
        ...state,
        statuses: action.payload,
        loading: false,
      }
    case CLEAR_STATUSES:
      return {
        ...state,
        statuses: null,
      }
    default:
      return state
  }
}
