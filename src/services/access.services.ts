import { AxiosResponse } from 'axios'

import { api } from './api'
import {
  ReduxAccessGetLoginServiceParametersTypes
  // AccessResetPasswordParameters,
  // AccessResetPasswordVerifyCodeParameters,
  // AccessServiceResetPasswordChangePasswordParameters
} from '../redux'

async function checkAuthentication(): Promise<AxiosResponse> {
  return await api.get('/access/check-authentication')
}

async function getLogin(
  parameters: ReduxAccessGetLoginServiceParametersTypes
): Promise<AxiosResponse> {
  return await api.get('/access/login', { params: parameters })
}

// async function getLogOut(): Promise<AxiosResponse> {
//   return await api.get('access/logout')
// }

// async function accessResetPassword({
//   userLogin
// }: AccessResetPasswordParameters): Promise<AxiosResponse> {
//   return await api.get('access/reset-password', {
//     params: {
//       user_login: userLogin
//     }
//   })
// }

// async function accessResetPasswordVerifyCode({
//   token
// }: AccessResetPasswordVerifyCodeParameters): Promise<AxiosResponse> {
//   return await api.get('access/reset-password/verify-code', {
//     params: { token }
//   })
// }

// async function accessResetPasswordChangePassword({
//   token,
//   password
// }: AccessServiceResetPasswordChangePasswordParameters): Promise<AxiosResponse> {
//   return await api.get('access/reset-password/change-password', {
//     params: { token, user_pass: password }
//   })
// }

export const accessService = {
  checkAuthentication,
  getLogin
  // getLogOut
  // accessResetPassword,
  // accessResetPasswordVerifyCode,
  // accessResetPasswordChangePassword
}
