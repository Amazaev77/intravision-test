import {
  LOAD_REQUESTS_STARTED,
  LOAD_REQUESTS_SUCCEEDED,
  SHOW_CREATE_REQUEST_MODAL,
  CLOSE_CREATE_REQUEST_MODAL,
  CLOSE_EDIT_REQUEST_MODAL,
  ADD_REQUEST_STARTED,
  ADD_REQUEST_SUCCEEDED,
  LOAD_REQUEST_STARTED,
  LOAD_REQUEST_SUCCEEDED,
  EDIT_STATUS_STARTED,
  EDIT_STATUS_SUCCEEDED,
  EDIT_EXECUTOR_STARTED,
  EDIT_EXECUTOR_SUCCEEDED,
  ADD_COMMENT_STARTED,
  ADD_COMMENT_SUCCEEDED,
} from '../types'

const initialState = {
  requests: [],
  loading: true,
  showCreateRequestModal: false,
  showEditRequestModal: false,
  selectedRequest: null,
  isLoadingRequest: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REQUESTS_STARTED:
      return {
        ...state,
        loading: true,
      }

    case LOAD_REQUESTS_SUCCEEDED:
      return {
        ...state,
        requests: action.payload,
        loading: false,
      }

    case SHOW_CREATE_REQUEST_MODAL:
      return {
        ...state,
        showCreateRequestModal: true,
        showEditRequestModal: false,
      }

    case CLOSE_CREATE_REQUEST_MODAL:
      return {
        ...state,
        showCreateRequestModal: false,
      }

    case CLOSE_EDIT_REQUEST_MODAL:
      return {
        ...state,
        showEditRequestModal: false,
      }
    case ADD_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      }

    case ADD_REQUEST_SUCCEEDED:
      // Так как сервер в ответ на post не дает добавленный элемент,
      // то сохраняю этот элемент в редюсере, взяв последний элемент в массиве,
      // чтобы вывести в окне для редактирования
      return {
        ...state,
        selectedRequest: state.requests[state.requests.length - 1],
        loading: false,
        showCreateRequestModal: false,
        showEditRequestModal: true,
      }

    case LOAD_REQUEST_STARTED:
      return {
        ...state,
        isLoadingRequest: true,
      }

    case LOAD_REQUEST_SUCCEEDED:
      return {
        ...state,
        selectedRequest: action.payload,
        isLoadingRequest: false,
        showEditRequestModal: true,
      }
    case EDIT_STATUS_STARTED:
      return {
        ...state,
        loading: true,
        isLoadingRequest: true,
      }
    case EDIT_STATUS_SUCCEEDED:
      return {
        ...state,
        requests: state.requests.map(item => {
          if (item.id === action.payload.id) {
            const { id, rgb, name } = action.payload.status

            return {
              ...item,
              statusId: id,
              statusRgb: rgb,
              statusName: name,
            }
          }
          return item
        }),
        selectedRequest: {
          ...state.selectedRequest,
          statusId: action.payload.status.id,
          statusName: action.payload.status.name,
          statusRgb: action.payload.status.rgb,
        },
        loading: false,
        isLoadingRequest: false,
      }
    case EDIT_EXECUTOR_STARTED:
      return {
        ...state,
        loading: true,
        isLoadingRequest: true,
      }
    case EDIT_EXECUTOR_SUCCEEDED:
      return {
        ...state,
        requests: state.requests.map(item => {
          if (item.id === action.payload.id) {
            const { id, name } = action.payload.user

            return {
              ...item,
              executorId: id,
              executorName: name,
            }
          }
          return item
        }),
        selectedRequest: {
          ...state.selectedRequest,
          executorId: action.payload.user.id,
          executorName: action.payload.user.name,
        },
        loading: false,
        isLoadingRequest: false,
      }

    case ADD_COMMENT_STARTED:
      return {
        ...state,
        loading: true,
      }

    case ADD_COMMENT_SUCCEEDED:
      return {
        ...state,
        selectedRequest: {
          ...state.selectedRequest,
          lifetimeItems: [
            ...state.selectedRequest.lifetimeItems,
            action.payload,
          ],
        },
        loading: false,
      }

    default:
      return state
  }
}
