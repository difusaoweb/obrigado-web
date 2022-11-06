import axios from 'axios'
import { ActionCreator, Dispatch } from 'redux'

import {
  UserActionTypes,
  ReduxUsersGetUserProfileFunctionParametersTypes,
  ReduxUsersGetUserProfileActionParametersTypes,
  REDUX_USERS_GET_USER_PROFILE_TYPES,
  ReduxUsersGetUserProfileFunctionDispatchTypes
  // ReduxUsersGetUserListReducerPayload,
  // REDUX_USERS_GET_USER_LIST,
  // ReduxUsersGetUserListServiceParameters,
  // ReduxUsersGetUserListFunctionDispatch,
  // ReduxUsersGetUserFunctionParametersType,
  // ReduxUsersGetUserFunctionDispatchType,
  // ReduxUsersGetUserActionParametersType,
  // REDUX_USERS_GET_USER_TYPE,
  // ReduxUsersCreateUserFunctionParametersType,
  // ReduxUsersCreateUserFunctionDispatchType,
  // ReduxUsersCreateUserActionParametersType,
  // REDUX_USERS_CREATE_USER_TYPE,
  // ReduxUsersUpdateUserFunctionParametersType,
  // ReduxUsersUpdateUserFunctionDispatchType,
  // ReduxUsersUpdateUserActionParametersType,
  // REDUX_USERS_UPDATE_USER_TYPE,
  // ReduxUsersDeleteUserListReducerPayload,
  // REDUX_USERS_DELETE_USER_LIST,
  // ReduxUsersDeleteUserListFunctionParameters,
  // ReduxUsersDeleteUserListFunctionDispatch
} from '../types'
import { usersService } from '../../services'
import { reduxAlertsSetAlertFunction } from './alerts.actions'

const reduxUsersGetUserProfileAction: ActionCreator<UserActionTypes> = (
  payload: ReduxUsersGetUserProfileActionParametersTypes
) => {
  return { type: REDUX_USERS_GET_USER_PROFILE_TYPES, payload }
}
export function reduxUsersGetUserProfileFunction(
  parameters: ReduxUsersGetUserProfileFunctionParametersTypes
) {
  return async (
    dispatch: Dispatch<ReduxUsersGetUserProfileFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await usersService.getUserProfile(parameters)
      const { profile } = data.success

      dispatch(
        reduxUsersGetUserProfileAction({
          success: { profile },
          failure: null
        })
      )
    } catch (err) {
      console.log(err)
      let status: number | null = null

      if (axios.isAxiosError(err)) {
        status = err.response?.status ?? null
      }

      switch (status) {
        case 404:
          break
        default:
          dispatch(
            reduxAlertsSetAlertFunction({
              type: 'error',
              message: 'Erro desconhecido!'
            })
          )
          break
      }

      dispatch(
        reduxUsersGetUserProfileAction({
          success: null,
          failure: { status }
        })
      )
    }
  }
}

// const reduxUsersGetUserListAction: ActionCreator<UserActionTypes> = (
//   payload: ReduxUsersGetUserListReducerPayload
// ) => {
//   return { type: REDUX_USERS_GET_USER_LIST, payload }
// }
// export function reduxUsersGetUserListFunction({
//   page,
//   perPage
// }: ReduxUsersGetUserListServiceParameters) {
//   return async (dispatch: Dispatch<ReduxUsersGetUserListFunctionDispatch>) => {
//     try {
//       const { data } = await usersService.getUserList({
//         page,
//         perPage
//       })
//       const { users, total } = data.success

//       dispatch(
//         reduxUsersGetUserListAction({
//           success: { users, currentPage: page, total },
//           failure: null
//         })
//       )
//     } catch (err) {
//       console.log(err)
//       let status: number | null = null

//       if (axios.isAxiosError(err)) {
//         status = err.response?.status ?? null
//       }

//       switch (status) {
//         case 404:
//           break
//         default:
//           dispatch(
//             reduxAlertsSetAlertFunction({
//               type: 'error',
//               message: 'Erro desconhecido!'
//             })
//           )
//           break
//       }

//       dispatch(
//         reduxUsersGetUserListAction({
//           success: null,
//           failure: { status }
//         })
//       )
//     }
//   }
// }

// const reduxUsersGetUserAction: ActionCreator<UserActionTypes> = (
//   payload: ReduxUsersGetUserActionParametersType
// ) => {
//   return { type: REDUX_USERS_GET_USER_TYPE, payload }
// }
// export function reduxUsersGetUserFunction(
//   parameters: ReduxUsersGetUserFunctionParametersType
// ) {
//   return async (dispatch: Dispatch<ReduxUsersGetUserFunctionDispatchType>) => {
//     try {
//       const { data } = await usersService.getUser(parameters)
//       const { user } = data?.success

//       dispatch(
//         reduxUsersGetUserAction({
//           success: { user },
//           failure: null
//         })
//       )
//     } catch (err) {
//       console.log(err)
//       let status: number | null = null
//       let message: string | null = null

//       if (axios.isAxiosError(err)) {
//         status = err.response?.status ?? null
//         message = err.response?.data?.failure?.message ?? null
//       }

//       switch (status) {
//         case 404:
//           break
//         default:
//           dispatch(
//             reduxAlertsSetAlertFunction({
//               type: 'error',
//               message: 'Erro desconhecido!'
//             })
//           )
//           break
//       }

//       dispatch(
//         reduxUsersGetUserAction({
//           success: null,
//           failure: { status, message }
//         })
//       )
//     }
//   }
// }

// const reduxUsersCreateUserAction: ActionCreator<UserActionTypes> = (
//   payload: ReduxUsersCreateUserActionParametersType
// ) => {
//   return { type: REDUX_USERS_CREATE_USER_TYPE, payload }
// }
// export function reduxUsersCreateUserFunction({
//   email,
//   password,
//   name,
//   setId
// }: ReduxUsersCreateUserFunctionParametersType) {
//   return async (
//     dispatch: Dispatch<ReduxUsersCreateUserFunctionDispatchType>
//   ) => {
//     try {
//       const { data } = await usersService.createUser({ email, password, name })
//       const { userId } = data.success

//       setId(userId)

//       dispatch(
//         reduxUsersCreateUserAction({
//           success: { userId },
//           failure: null
//         })
//       )
//       dispatch(
//         reduxAlertsSetAlertFunction({
//           type: 'success',
//           message: 'Usuário criado com sucesso!'
//         })
//       )
//     } catch (err) {
//       console.log(err)
//       let status: number | null = null
//       let message: string | null = null

//       if (axios.isAxiosError(err)) {
//         status = err.response?.status ?? null
//         message = err.response?.data?.failure?.message ?? null
//       }

//       switch (status) {
//         default:
//           dispatch(
//             reduxAlertsSetAlertFunction({
//               type: 'error',
//               message: 'Erro desconhecido!'
//             })
//           )
//           break
//       }

//       dispatch(
//         reduxUsersCreateUserAction({
//           success: null,
//           failure: { status, message }
//         })
//       )
//     }
//   }
// }

// const reduxUsersUpdateUserAction: ActionCreator<UserActionTypes> = (
//   payload: ReduxUsersUpdateUserActionParametersType
// ) => {
//   return { type: REDUX_USERS_UPDATE_USER_TYPE, payload }
// }
// export function reduxUsersUpdateUserFunction({
//   id,
//   email,
//   password,
//   name
// }: ReduxUsersUpdateUserFunctionParametersType) {
//   return async (
//     dispatch: Dispatch<ReduxUsersUpdateUserFunctionDispatchType>
//   ) => {
//     try {
//       const { data } = await usersService.updateUser({
//         id,
//         email,
//         password,
//         name
//       })

//       const { updated } = data.success

//       dispatch(
//         reduxUsersUpdateUserAction({
//           success: { updated },
//           failure: null
//         })
//       )
//       dispatch(
//         reduxAlertsSetAlertFunction({ type: 'success', message: 'Atualizado!' })
//       )
//     } catch (err) {
//       console.log(err)
//       let status: number | null = null
//       let message: string | null = null

//       if (axios.isAxiosError(err)) {
//         status = err.response?.status ?? null
//         message = err.response?.data?.failure?.message ?? null
//       }

//       switch (status) {
//         default:
//           dispatch(
//             reduxAlertsSetAlertFunction({
//               type: 'error',
//               message: 'Erro desconhecido!'
//             })
//           )
//           break
//       }

//       dispatch(
//         reduxUsersUpdateUserAction({
//           success: null,
//           failure: { status, message }
//         })
//       )
//     }
//   }
// }

// const reduxUsersDeleteUserListAction: ActionCreator<UserActionTypes> = (
//   payload: ReduxUsersDeleteUserListReducerPayload
// ) => {
//   return { type: REDUX_USERS_DELETE_USER_LIST, payload }
// }
// export function reduxUsersDeleteUserListFunction({
//   usersId,
//   setUsersHaveBeenDeleted
// }: ReduxUsersDeleteUserListFunctionParameters) {
//   return async (
//     dispatch: Dispatch<ReduxUsersDeleteUserListFunctionDispatch>
//   ) => {
//     try {
//       await usersService.deleteUserList({
//         usersId
//       })

//       setUsersHaveBeenDeleted(true)

//       dispatch(
//         reduxUsersDeleteUserListAction({
//           success: { usersId },
//           failure: null
//         })
//       )
//       const alertMessage =
//         usersId.length > 1 ? 'Usuários apagados!' : 'Usuário apagado!'
//       dispatch(
//         reduxAlertsSetAlertFunction({ type: 'success', message: alertMessage })
//       )
//     } catch (err) {
//       console.log(err)
//       let status: number | null = null

//       if (axios.isAxiosError(err)) {
//         err
//         status = err.response?.status ?? null
//       }

//       setUsersHaveBeenDeleted(false)

//       switch (status) {
//         default:
//           dispatch(
//             reduxAlertsSetAlertFunction({
//               type: 'error',
//               message: 'Erro desconhecido!'
//             })
//           )
//           break
//       }

//       dispatch(
//         reduxUsersDeleteUserListAction({
//           success: null,
//           failure: { status }
//         })
//       )
//     }
//   }
// }
