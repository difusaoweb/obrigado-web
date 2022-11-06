import { ResponseErrorOrNullTypes } from './common.types'
import { AlertActionTypes } from './alerts.types'

export interface ReduxAccessGetStorageDataActionParametersTypes {
  success: {
    token: string
    userId: number
  } | null
}

export interface ReduxAccessCheckAuthenticationActionParametersTypes {
  success: {
    authenticated: boolean
  } | null
}

export interface ReduxAccessGetLoginFunctionParametersTypes {
  login: string
  password: string
}
export type ReduxAccessGetLoginServiceParametersTypes =
  ReduxAccessGetLoginFunctionParametersTypes
export type ReduxAccessGetLoginActionParametersTypes =
  ReduxAccessGetStorageDataActionParametersTypes

// export interface GetLogOutReturnServiceInterface {
//   revoked: boolean
// }
// export interface AccessResetPasswordParameters {
//   userLogin: string
// }
// export interface AccessResetPasswordVerifyCodeParameters {
//   token: string
// }
// export interface AccessResetPasswordChangePasswordParameters {
//   password: string
// }
// export interface AccessServiceResetPasswordChangePasswordParameters {
//   token: string
//   password: string
// }

export const REDUX_ACCESS_GET_STORAGE_DATA_TYPES =
  'REDUX_ACCESS_GET_STORAGE_DATA_TYPES'
export const REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES =
  'REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES'
export const REDUX_ACCESS_GET_LOGIN_TYPES = 'REDUX_ACCESS_GET_LOGIN_TYPES'
// export const GET_LOG_OUT = 'GET_LOG_OUT'
// export const ACCESS_RESET_PASSWORD = 'ACCESS_RESET_PASSWORD'
// export const ACCESS_RESET_PASSWORD_VERIFY_CODE =
//   'ACCESS_RESET_PASSWORD_VERIFY_CODE'
// export const ACCESS_RESET_PASSWORD_CHANGE_PASSWORD =
//   'ACCESS_RESET_PASSWORD_CHANGE_PASSWORD'
// export const ACCESS_RESET_PASSWORD_FINISHED = 'ACCESS_RESET_PASSWORD_FINISHED'

interface ReduxAccessGetStorageDataActionTypes {
  type: typeof REDUX_ACCESS_GET_STORAGE_DATA_TYPES
  payload: ReduxAccessGetStorageDataActionParametersTypes
}

interface ReduxAccessCheckAuthenticationActionTypes {
  type: typeof REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES
  payload: ReduxAccessCheckAuthenticationActionParametersTypes
}

interface ReduxAccessGetLoginActionTypes {
  type: typeof REDUX_ACCESS_GET_LOGIN_TYPES
  payload: ReduxAccessGetLoginActionParametersTypes
}

// interface GetLogOutAction {
//   type: typeof GET_LOG_OUT
//   payload: {
//     success: boolean | null
//     failure: boolean | null
//   }
// }
// interface AccessResetPassword {
//   type: typeof ACCESS_RESET_PASSWORD
//   payload: boolean | null
// }

// interface AccessResetPasswordVerifyCode {
//   type: typeof ACCESS_RESET_PASSWORD_VERIFY_CODE
//   payload: string | null
// }

// interface AccessResetPasswordChangePassword {
//   type: typeof ACCESS_RESET_PASSWORD_CHANGE_PASSWORD
//   payload: boolean | null
// }

// interface AccessResetPasswordFinished {
//   type: typeof ACCESS_RESET_PASSWORD_FINISHED
// }

export interface AccessState {
  getStorageDataSuccess: {
    token: string
    userId: number
  } | null

  checkAuthenticationSuccess: {
    authenticated: boolean
  } | null

  // getLogOutError: boolean | null
  // resetPasswordVerifyCodeActived: boolean | null
  // resetPasswordChangePasswordActived: boolean | null
  // resetPasswordFinishedActived: boolean | null
  // resetPasswordToken: string | null
  // checkAuthenticationAuthenticated: boolean | null
  // checkAuthenticationError: ErrorStatus | null
}

export type AccessActionTypes =
  | ReduxAccessGetStorageDataActionTypes
  | ReduxAccessCheckAuthenticationActionTypes
  | ReduxAccessGetLoginActionTypes
// | GetLogOutAction
// | AccessResetPassword
// | AccessResetPasswordVerifyCode
// | AccessResetPasswordChangePassword
// | AccessResetPasswordFinished

export type ReduxAccessGetStorageDataFunctionDispatchTypes = ReturnType<
  typeof AccessActionTypes | typeof AlertActionTypes
>
export type ReduxAccessCheckAuthenticationFunctionDispatchTypes = ReturnType<
  typeof AccessActionTypes | typeof AlertActionTypes
>
export type ReduxAccessGetLoginFunctionDispatchTypes = ReturnType<
  typeof AccessActionTypes | typeof AlertActionTypes
>
