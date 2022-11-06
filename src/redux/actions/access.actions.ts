import axios from 'axios'
import { ActionCreator, Dispatch } from 'redux'

import {
  AccessActionTypes,
  ReduxAccessGetStorageDataActionParametersTypes,
  REDUX_ACCESS_GET_STORAGE_DATA_TYPES,
  ReduxAccessGetStorageDataFunctionDispatchTypes,
  ReduxAccessGetLoginFunctionParametersTypes,
  ReduxAccessCheckAuthenticationFunctionDispatchTypes,
  ReduxAccessCheckAuthenticationActionParametersTypes,
  REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES,
  ReduxAccessGetLoginFunctionDispatchTypes
  // GET_LOG_OUT,
  // AccessResetPasswordParameters,
  // ACCESS_RESET_PASSWORD,
  // AccessResetPasswordVerifyCodeParameters,
  // ACCESS_RESET_PASSWORD_VERIFY_CODE,
  // AccessResetPasswordChangePasswordParameters,
  // ACCESS_RESET_PASSWORD_CHANGE_PASSWORD,
  // ACCESS_RESET_PASSWORD_FINISHED,
  // ReduxAccessGetLoginReducerPayload,
  // REDUX_ACCESS_GET_LOGIN,
  // ReduxAccessGetLoginServiceParameters,
  // AlertActionTypes
} from '../types'
import { accessService } from '../../services'
import { api } from '../../services/api'
// import { RootState } from '../store'
import { reduxAlertsSetAlertFunction } from './alerts.actions'

const reduxAccessGetStorageDataAction: ActionCreator<AccessActionTypes> = (
  payload: ReduxAccessGetStorageDataActionParametersTypes
) => {
  return { type: REDUX_ACCESS_GET_STORAGE_DATA_TYPES, payload }
}
export function reduxAccessGetStorageDataFunction() {
  return async (
    dispatch: Dispatch<ReduxAccessGetStorageDataFunctionDispatchTypes>
  ) => {
    try {
      const token: string | null = await localStorage.getItem('@Obrigado:token')
      const userIdString = await localStorage.getItem('@Obrigado:userId')
      const userId: number | null =
        userIdString === null ? null : parseInt(userIdString)

      if (token != null && userId != null) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`

        dispatch(
          reduxAccessGetStorageDataAction({
            success: { token, userId },
            failure: null
          })
        )
      }
    } catch (err) {
      console.log(err)
      let status: number | null = null
      let message: string | null = null

      if (axios.isAxiosError(err)) {
        status = err.response?.status ?? null
        message = err.response?.data?.failure?.message ?? null
      }

      dispatch(
        reduxAccessGetStorageDataAction({
          success: null,
          failure: { status, message }
        })
      )
    }
  }
}

const reduxAccessCheckAuthenticationAction: ActionCreator<AccessActionTypes> = (
  payload: ReduxAccessCheckAuthenticationActionParametersTypes
) => {
  return { type: REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES, payload }
}
export function reduxAccessCheckAuthenticationFunction() {
  return async (
    dispatch: Dispatch<ReduxAccessCheckAuthenticationFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await accessService.checkAuthentication()

      const { authenticated } = data?.success

      dispatch(
        reduxAccessCheckAuthenticationAction({
          success: { authenticated },
          failure: null
        })
      )
    } catch (err) {
      console.log(err)
      let status: number | null = null
      let message: string | null = null

      if (axios.isAxiosError(err)) {
        status = err.response?.status ?? null
        message = err.response?.data?.failure?.message ?? null
      }

      delete api.defaults.headers.common.Authorization
      await localStorage.clear()

      if (status !== 401) {
        reduxAlertsSetAlertFunction({
          type: 'error',
          message: 'Erro desconhecido!'
        })
      }

      // dispatch(
      //   reduxAccessCheckAuthenticationAction({
      //     success: null,
      //     failure: { status, message }
      //   })
      // )
    }
  }
}

export function reduxAccessGetLoginFunction(
  parameters: ReduxAccessGetLoginFunctionParametersTypes
) {
  return async (
    dispatch: Dispatch<ReduxAccessGetLoginFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await accessService.getLogin(parameters)
      const { token, userId } = data.success

      api.defaults.headers.common.Authorization = `Bearer ${userId}`

      await localStorage.setItem('@Obrigado:token', token)
      await localStorage.setItem('@Obrigado:userId', userId)

      dispatch(
        reduxAccessGetStorageDataAction({
          success: { token, userId },
          failure: null
        })
      )
    } catch (err) {
      console.log(err)
      let status: number | null = null
      let message: string | null = null

      if (axios.isAxiosError(err)) {
        status = err.response?.status ?? null
        message = err.response?.data?.failure?.message ?? null
      }

      switch (status) {
        case 404:
          dispatch(
            reduxAlertsSetAlertFunction({
              type: 'error',
              message: 'Usuário não encontrado!'
            })
          )
          break
        case 403:
          dispatch(
            reduxAlertsSetAlertFunction({
              type: 'warning',
              message: 'Senha incorreta.'
            })
          )
          break
        default:
          dispatch(
            reduxAlertsSetAlertFunction({
              type: 'error',
              message: 'Erro ao desconhecido...'
            })
          )
          break
      }

      dispatch(
        reduxAccessGetStorageDataAction({
          success: null,
          failure: { status, message }
        })
      )
    }
  }
}

// const getLogOutSuccess: ActionCreator<AccessActionTypes> = () => {
//   return { type: GET_LOG_OUT, payload: { success: true, failure: null } }
// }
// const getLogOutFailure: ActionCreator<AccessActionTypes> = () => {
//   return { type: GET_LOG_OUT, payload: { success: null, failure: true } }
// }

// const accessActionResetPassword: ActionCreator<AccessActionTypes> = () => {
//   return {
//     type: ACCESS_RESET_PASSWORD,
//     payload: true
//   }
// }

// const accessActionResetPasswordVerifyCode: ActionCreator<AccessActionTypes> = (
//   token: string
// ) => {
//   return {
//     type: ACCESS_RESET_PASSWORD_VERIFY_CODE,
//     payload: token
//   }
// }

// const accessActionResetPasswordChangePassword: ActionCreator<
//   AccessActionTypes
// > = () => {
//   return {
//     type: ACCESS_RESET_PASSWORD_CHANGE_PASSWORD,
//     payload: true
//   }
// }

// const accessActionResetPasswordFinished: ActionCreator<
//   AccessActionTypes
// > = () => {
//   return { type: ACCESS_RESET_PASSWORD_FINISHED }
// }

// const accessActionGetIsAuthenticatedFailure: ActionCreator<
//   AccessActionTypes
// > = () => {
//   return { type: ACCESS_GET_IS_AUTHENTICATED, payload: null }
// }

// export function getLogOut() {
//   return async (dispatch: Dispatch) => {
//     try {
//       const { data } = await accessService.getLogOut()
//       console.log(data)
//       await localStorage.clear()
//       delete api.defaults.headers.common.Authorization

//       dispatch(getLogOutSuccess())
//     } catch (err) {
//       console.log(err)
//       getLogOutFailure()
//     }
//   }
// }
