import {
  // NumberOrNullType,
  // BooleanOrNullType,
  ResponseErrorOrNullTypes
} from './common.types'
import { AlertActionTypes } from './alerts.types'

export interface ReduxUsersGetUserProfileFunctionParametersTypes {
  username: string
}
export interface ReduxUsersGetUserProfileServiceParametersTypes
  extends ReduxUsersGetUserProfileFunctionParametersTypes {}

export interface ReduxUsersGetUserProfileProfileTypes {
  id: number
  name: string
  avatar: string
  username: string
  description: string
  link: string
  obrigados: number
}

export interface ReduxUsersGetUserProfileActionParametersTypes {
  success: {
    profile: ReduxUsersGetUserProfileProfileTypes
  } | null
  failure: ResponseErrorOrNullTypes
}

// export interface GetUserListUserType {
//   id: number
//   name: string
//   email: string
//   createdAt: string
// }

// export interface ReduxUsersGetUserListServiceParameters {
//   page: number
//   perPage: number
// }
// export type ReduxUsersGetUserListFunctionDispatch = ReturnType<
//   typeof UserActionTypes | typeof AlertActionTypes
// >
// export interface ReduxUsersGetUserListReducerPayload {
//   success: {
//     users: GetUserListUserType[]
//     currentPage: number
//     lastPage: number
//     total: number
//   } | null
//   failure: ResponseErrorOrNullType
// }

// export interface ReduxUsersGetUserFunctionParametersType {
//   userId: number
// }
// export interface ReduxUsersGetUserUserType {
//   id: number
//   email: string
//   name: string
// }
// export interface ReduxUsersGetUserActionParametersType {
//   success: {
//     user: ReduxUsersGetUserUserType
//   } | null
//   failure: ResponseErrorOrNullType
// }

// export interface ReduxUsersCreateUserFunctionParametersType {
//   email: string
//   password: string
//   name: string
//   setId: (value: React.SetStateAction<number | null>) => void
// }
// export interface ReduxUsersCreateUserServiceParametersType {
//   email: string
//   password: string
//   name: string
// }
// export interface ReduxUsersCreateUserActionParametersType {
//   success: {
//     userId: number
//   } | null
//   failure: ResponseErrorOrNullType
// }

// export interface ReduxUsersUpdateUserFunctionParametersType {
//   id: number
//   email: string
//   password: string | null
//   name: string
// }
// export interface ReduxUsersUpdateUserActionParametersType {
//   success: {
//     updated: boolean
//   } | null
//   failure: ResponseErrorOrNullType
// }

// export interface ReduxUsersDeleteUserListFunctionParameters {
//   usersId: number[]
//   setUsersHaveBeenDeleted: (value: React.SetStateAction<boolean>) => void
// }
// export interface ReduxUsersDeleteUserListServiceParameters {
//   usersId: number[]
// }
// export type ReduxUsersDeleteUserListFunctionDispatch = ReturnType<
//   typeof UserActionTypes | typeof AlertActionTypes
// >
// export interface ReduxUsersDeleteUserListReducerPayload {
//   success: {
//     usersId: number[]
//   } | null
//   failure: ResponseErrorOrNullType
// }

// export interface ReduxUsersClearStateServiceParameters {
//   state: string[]
// }

export const REDUX_USERS_GET_USER_PROFILE_TYPES =
  'REDUX_USERS_GET_USER_PROFILE_TYPES'
interface ReduxUsersGetUserProfileActionTypes {
  type: typeof REDUX_USERS_GET_USER_PROFILE_TYPES
  payload: ReduxUsersGetUserProfileActionParametersTypes
}

// export const REDUX_USERS_GET_USER_LIST = 'REDUX_USERS_GET_USER_LIST'
// interface ReduxUsersGetUserListReducer {
//   type: typeof REDUX_USERS_GET_USER_LIST
//   payload: ReduxUsersGetUserListReducerPayload
// }

// export const REDUX_USERS_GET_USER_TYPE = 'REDUX_USERS_GET_USER_TYPE'
// interface ReduxUsersGetUserActionType {
//   type: typeof REDUX_USERS_GET_USER_TYPE
//   payload: ReduxUsersGetUserActionParametersType
// }

// export const REDUX_USERS_CREATE_USER_TYPE = 'REDUX_USERS_CREATE_USER_TYPE'
// interface ReduxUsersCreateUserActionType {
//   type: typeof REDUX_USERS_CREATE_USER_TYPE
//   payload: ReduxUsersCreateUserActionParametersType
// }

// export const REDUX_USERS_UPDATE_USER_TYPE = 'REDUX_USERS_UPDATE_USER_TYPE'
// interface ReduxUsersUpdateUserActionType {
//   type: typeof REDUX_USERS_UPDATE_USER_TYPE
//   payload: ReduxUsersUpdateUserActionParametersType
// }

// export const REDUX_USERS_DELETE_USER_LIST = 'REDUX_USERS_DELETE_USER_LIST'
// interface ReduxUsersDeleteUserListReducer {
//   type: typeof REDUX_USERS_DELETE_USER_LIST
//   payload: ReduxUsersDeleteUserListReducerPayload
// }

export interface UserState {
  getUserProfileSuccess: {
    profile: ReduxUsersGetUserProfileProfileTypes
  } | null
  getUserProfileFailure: ResponseErrorOrNullTypes

  // getUserListUsers: GetUserListUserType[] | null
  // getUserListTotal: NumberOrNullType
  // getUserListError: ResponseErrorOrNullType

  // getUserSuccess: {
  //   user: ReduxUsersGetUserUserType
  // } | null
  // getUserFailure: ResponseErrorOrNullType

  // createUserSuccess: {
  //   userId: number
  // } | null
  // createUserFailure: ResponseErrorOrNullType

  // updateUserSuccess: {
  //   updated: boolean
  // } | null
  // updateUserFailure: ResponseErrorOrNullType

  // deleteUserListError: ResponseErrorOrNullType
}

export type UserActionTypes = ReduxUsersGetUserProfileActionTypes
// | ReduxUsersGetUserListReducer
// | ReduxUsersGetUserActionType
// | ReduxUsersCreateUserActionType
// | ReduxUsersUpdateUserActionType
// | ReduxUsersDeleteUserListReducer

export type ReduxUsersGetUserProfileFunctionDispatchTypes = ReturnType<
  UserActionTypes & AlertActionTypes
>

// export type ReduxUsersGetUserFunctionDispatchType = ReturnType<
//   UserActionTypes & AlertActionTypes
// >

// export type ReduxUsersCreateUserFunctionDispatchType = ReturnType<
//   UserActionTypes & AlertActionTypes
// >

// export type ReduxUsersUpdateUserFunctionDispatchType = ReturnType<
//   UserActionTypes & AlertActionTypes
// >
