import {
  AccessState,
  AccessActionTypes,
  REDUX_ACCESS_GET_STORAGE_DATA_TYPES,
  REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES,
  REDUX_ACCESS_GET_LOGIN_TYPES
  // GET_LOG_OUT,
  // ACCESS_RESET_PASSWORD,
  // ACCESS_RESET_PASSWORD_VERIFY_CODE,
  // ACCESS_RESET_PASSWORD_CHANGE_PASSWORD,
  // ACCESS_RESET_PASSWORD_FINISHED,
} from '../types'

const initialState: AccessState = {
  getStorageDataSuccess: null,
  getCheckAuthenticationSuccess: null

  // getLogOutError: null,
  // resetPasswordVerifyCodeActived: null,
  // resetPasswordToken: null,
  // resetPasswordChangePasswordActived: null,
  // resetPasswordFinishedActived: null,
  // checkAuthenticationError: null,
}

export function accessReducer(
  state: AccessState = initialState,
  action: AccessActionTypes
): AccessState {
  switch (action.type) {
    case REDUX_ACCESS_GET_STORAGE_DATA_TYPES: {
      return {
        ...state,
        getStorageDataSuccess: action.payload.success
      }
    }
    case REDUX_ACCESS_CHECK_AUTHENTICATION_TYPES: {
      return {
        ...state,
        getCheckAuthenticationSuccess: action.payload.success
      }
    }
    case REDUX_ACCESS_GET_LOGIN_TYPES: {
      return {
        ...state,
        getStorageDataSuccess: action.payload.success,
        getCheckAuthenticationSuccess: { authenticated: true }
      }
    }
    // case GET_LOG_OUT: {
    //   return {
    //     ...state,
    //     getStorageDataToken: null,
    //     getStorageDataUser: null
    //   }
    // }
    // case ACCESS_RESET_PASSWORD: {
    //   return {
    //     ...state,
    //     resetPasswordVerifyCodeActived: true
    //   }
    // }
    // case ACCESS_RESET_PASSWORD_VERIFY_CODE: {
    //   return {
    //     ...state,
    //     resetPasswordChangePasswordActived: true,
    //     resetPasswordToken: action.payload
    //   }
    // }
    // case ACCESS_RESET_PASSWORD_CHANGE_PASSWORD: {
    //   return {
    //     ...state,
    //     resetPasswordFinishedActived: true
    //   }
    // }
    // case ACCESS_RESET_PASSWORD_FINISHED: {
    //   return {
    //     ...state,
    //     resetPasswordVerifyCodeActived: null,
    //     resetPasswordToken: null,
    //     resetPasswordChangePasswordActived: null,
    //     resetPasswordFinishedActived: null
    //   }
    // }
    default:
      return state
  }
}
