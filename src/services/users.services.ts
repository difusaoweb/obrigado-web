import { AxiosResponse } from 'axios'

import { api } from './api'
import {
  ReduxUsersGetUserProfileServiceParametersTypes
  // ReduxUsersGetUserListServiceParameters,
  // ReduxUsersGetUserFunctionParametersType,
  // ReduxUsersCreateUserServiceParametersType,
  // ReduxUsersUpdateUserServiceParametersType,
  // ReduxUsersDeleteUserListServiceParameters
} from '../redux'

async function getUserProfile(
  parameters: ReduxUsersGetUserProfileServiceParametersTypes
): Promise<AxiosResponse> {
  return await api.get('/users/profile', {
    params: parameters
  })
}

// async function getUserList(
//   parameters: ReduxUsersGetUserListServiceParameters
// ): Promise<AxiosResponse> {
//   return await api.get('/users/list', {
//     params: parameters
//   })
// }

// async function getUser(
//   parameters: ReduxUsersGetUserFunctionParametersType
// ): Promise<AxiosResponse> {
//   return await api.get('/users/show', {
//     params: parameters
//   })
// }

// async function createUser(
//   parameters: ReduxUsersCreateUserServiceParametersType
// ): Promise<AxiosResponse> {
//   return await api.get('/users/create', { params: parameters })
// }

// async function updateUser(
//   parameters: ReduxUsersUpdateUserServiceParametersType
// ): Promise<AxiosResponse> {
//   return await api.get('/users/update', {
//     params: parameters
//   })
// }

// async function deleteUserList(
//   parameters: ReduxUsersDeleteUserListServiceParameters
// ): Promise<AxiosResponse> {
//   return await api.get('/users/delete', {
//     params: parameters
//   })
// }

export const usersService = {
  getUserProfile
  // getUserList,
  // getUser,
  // createUser,
  // updateUser,
  // deleteUserList
}
