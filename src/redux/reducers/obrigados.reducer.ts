import {
  ObrigadoState,
  ObrigadoActionTypes,
  REDUX_OBRIGADOS_GET_HOME_TYPES,
  REDUX_OBRIGADOS_GET_PROFILE_TYPES,
  REDUX_OBRIGADOS_SHOW_TYPES
} from '../types'

const initialState: ObrigadoState = {
  getHomeSuccess: null,
  getHomeFailure: null,
  getProfileSuccess: null,
  getProfileFailure: null,
  showSuccess: null,
  showFailure: null
}

export function obrigadosReducer(
  state: ObrigadoState = initialState,
  action: ObrigadoActionTypes
): ObrigadoState {
  switch (action.type) {
    case REDUX_OBRIGADOS_GET_HOME_TYPES: {
      return {
        ...state,
        getHomeSuccess: action.payload.success,
        getHomeFailure: action.payload.failure
      }
    }
    case REDUX_OBRIGADOS_GET_PROFILE_TYPES: {
      return {
        ...state,
        getProfileSuccess: action.payload.success,
        getProfileFailure: action.payload.failure
      }
    }
    case REDUX_OBRIGADOS_SHOW_TYPES: {
      return {
        ...state,
        showSuccess: action.payload.success,
        showFailure: action.payload.failure
      }
    }
    default:
      return state
  }
}
