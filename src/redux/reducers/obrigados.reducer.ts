import {
  ObrigadoState,
  ObrigadoActionTypes,
  REDUX_OBRIGADOS_GET_HOME_TYPES
} from '../types'

const initialState: ObrigadoState = {
  getHomeSuccess: null,
  getHomeFailure: null
}

export function obrigadosReducer(
  state: ObrigadoState = initialState,
  action: ObrigadoActionTypes
): ObrigadoState {
  switch (action.type) {
    case REDUX_OBRIGADOS_GET_HOME_TYPES: {
      if (action.payload.success === null) {
        return {
          ...state,
          getHomeFailure: action.payload.failure
        }
      }
      return {
        ...state,
        getHomeSuccess: action.payload.success
      }
    }
    default:
      return state
  }
}
