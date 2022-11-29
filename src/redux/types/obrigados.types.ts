import { ResponseErrorOrNullTypes } from './common.types'
import { AlertActionTypes } from './alerts.types'

export interface ReduxObrigadosGetHomeFunctionParametersTypes {
  page: number
  perPage: number
}
export interface ReduxObrigadosGetHomeServiceParametersTypes
  extends ReduxObrigadosGetHomeFunctionParametersTypes {}

export interface ReduxObrigadosGetHomeObrigadoTypes {
  obrigadoId: number
  avatar: string | null
  senderId: number
  name: string
  username: string
  date: string
  value: number
  message: string | null
  receiverId: number
}

export interface ReduxObrigadosGetHomeActionParametersTypes {
  success: {
    obrigados: ReduxObrigadosGetHomeObrigadoTypes[]
  } | null
  failure: ResponseErrorOrNullTypes
}

export interface ReduxObrigadosGetProfileFunctionParametersTypes {
  id: number
  page: number
  perPage: number
}
export interface ReduxObrigadosGetProfileServiceParametersTypes
  extends ReduxObrigadosGetProfileFunctionParametersTypes {}
export interface ReduxObrigadosGetProfileObrigadoTypes {
  obrigado: {
    id: number
    value: number
    message: string | null
    date: string
  }
  sender: {
    id: number
    username: string
    name: string
    avatar: string | null
  }
  receiver: {
    id: number
    username: string
    name: string
    avatar: string | null
  }
}
export interface ReduxObrigadosGetProfileActionParametersTypes {
  success: {
    obrigados: ReduxObrigadosGetProfileObrigadoTypes[]
    total: number
  } | null
  failure: ResponseErrorOrNullTypes
}

export interface ReduxObrigadosShowFunctionParametersTypes {
  obrigadoId: number
}
export interface ReduxObrigadosShowServiceParametersTypes
  extends ReduxObrigadosShowFunctionParametersTypes {}
export interface ReduxObrigadosShowObrigadoTypes {
  id: number
  value: number
  message: string
  createdAt: string
  updatedAt: string
}
export interface ReduxObrigadosShowSenderTypes {
  username: string
  name: string
  avatar: string
}
export interface ReduxObrigadosShowActionParametersTypes {
  success: {
    obrigado: ReduxObrigadosShowObrigadoTypes
    sender: ReduxObrigadosShowSenderTypes
  } | null
  failure: ResponseErrorOrNullTypes
}

export const REDUX_OBRIGADOS_GET_HOME_TYPES = 'REDUX_OBRIGADOS_GET_HOME_TYPES'
export const REDUX_OBRIGADOS_GET_PROFILE_TYPES =
  'REDUX_OBRIGADOS_GET_PROFILE_TYPES'
export const REDUX_OBRIGADOS_SHOW_TYPES = 'REDUX_OBRIGADOS_SHOW_TYPES'

interface ReduxObrigadosGetHomeActionTypes {
  type: typeof REDUX_OBRIGADOS_GET_HOME_TYPES
  payload: ReduxObrigadosGetHomeActionParametersTypes
}
interface ReduxObrigadosGetProfileActionTypes {
  type: typeof REDUX_OBRIGADOS_GET_PROFILE_TYPES
  payload: ReduxObrigadosGetProfileActionParametersTypes
}
interface ReduxObrigadosShowActionTypes {
  type: typeof REDUX_OBRIGADOS_SHOW_TYPES
  payload: ReduxObrigadosShowActionParametersTypes
}

export interface ObrigadoState {
  getHomeSuccess: {
    obrigados: ReduxObrigadosGetHomeObrigadoTypes[]
  } | null
  getHomeFailure: ResponseErrorOrNullTypes

  getProfileSuccess: {
    obrigados: ReduxObrigadosGetProfileObrigadoTypes[]
    total: number
  } | null
  getProfileFailure: ResponseErrorOrNullTypes

  showSuccess: {
    obrigado: ReduxObrigadosShowObrigadoTypes
    sender: ReduxObrigadosShowSenderTypes
  } | null
  showFailure: ResponseErrorOrNullTypes
}

export type ObrigadoActionTypes =
  | ReduxObrigadosGetHomeActionTypes
  | ReduxObrigadosGetProfileActionTypes
  | ReduxObrigadosShowActionTypes

export type ReduxObrigadosGetHomeFunctionDispatchTypes = ReturnType<
  ObrigadoActionTypes & AlertActionTypes
>
export type ReduxObrigadosGetProfileFunctionDispatchTypes = ReturnType<
  ObrigadoActionTypes & AlertActionTypes
>
export type ReduxObrigadosShowFunctionDispatchTypes = ReturnType<
  ObrigadoActionTypes & AlertActionTypes
>
