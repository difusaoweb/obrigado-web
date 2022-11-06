import { ResponseErrorOrNullTypes } from './common.types'
import { AlertActionTypes } from './alerts.types'

export interface ReduxObrigadosGetHomeFunctionParametersTypes {
  page: number
  perPage: number
}
export interface ReduxObrigadosGetHomeServiceParametersTypes
  extends ReduxObrigadosGetHomeFunctionParametersTypes {}

export interface ReduxObrigadosGetHomeObrigadoTypes {
  id: number
  value: number
  message: string | null
  createdAt: string
  sender: number
  receiver: number
}

export interface ReduxObrigadosGetHomeActionParametersTypes {
  success: {
    obrigados: ReduxObrigadosGetHomeObrigadoTypes[]
  } | null
  failure: ResponseErrorOrNullTypes
}

export const REDUX_OBRIGADOS_GET_HOME_TYPES = 'REDUX_OBRIGADOS_GET_HOME_TYPES'
interface ReduxObrigadosGetHomeActionTypes {
  type: typeof REDUX_OBRIGADOS_GET_HOME_TYPES
  payload: ReduxObrigadosGetHomeActionParametersTypes
}

export interface ObrigadoState {
  getHomeSuccess: {
    obrigados: ReduxObrigadosGetHomeObrigadoTypes[]
  } | null
  getHomeFailure: ResponseErrorOrNullTypes
}

export type ObrigadoActionTypes = ReduxObrigadosGetHomeActionTypes

export type ReduxObrigadosGetHomeFunctionDispatchTypes = ReturnType<
  ObrigadoActionTypes & AlertActionTypes
>
