import {
  UserState,
  UserActionTypes,
  REDUX_USERS_GET_USER_PROFILE_TYPES
  // REDUX_USERS_GET_USER_LIST,
  // REDUX_USERS_GET_USER_TYPE,
  // REDUX_USERS_CREATE_USER_TYPE,
  // REDUX_USERS_UPDATE_USER_TYPE,
  // REDUX_USERS_DELETE_USER_LIST
} from '../types'

const initialState: UserState = {
  getUserProfileSuccess: null,
  getUserProfileFailure: null

  // getUserListUsers: null,
  // getUserListLastPage: null,
  // getUserListTotal: null,
  // getUserListError: null,

  // getUserSuccess: null,
  // getUserFailure: null,

  // createUserSuccess: null,
  // createUserFailure: null,

  // updateUserSuccess: null,
  // updateUserFailure: null,

  // updateUserError: null,
  // deleteUserListError: null
}

export function usersReducer(
  state: UserState = initialState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case REDUX_USERS_GET_USER_PROFILE_TYPES: {
      if (action.payload.success == null) {
        return {
          ...state,
          getUserProfileFailure: action.payload.failure
        }
      }
      return {
        ...state,
        getUserProfileSuccess: action.payload.success
      }
    }
    // case REDUX_USERS_GET_USER_LIST: {
    //   let getUserListUsers = state.getUserListUsers
    //   if (action.payload.success != null) {
    //     const { currentPage, users } = action.payload.success

    //     if (getUserListUsers != null) {
    //       if (currentPage === 1) {
    //         getUserListUsers = users
    //       } else {
    //         getUserListUsers = [...getUserListUsers, ...users]
    //       }
    //     } else {
    //       getUserListUsers = users
    //     }
    //   }
    //   return {
    //     ...state,
    //     getUserListUsers,
    //     getUserListLastPage: action.payload.success?.lastPage ?? null,
    //     getUserListTotal: action.payload.success?.total ?? null,
    //     getUserListError: action.payload.failure
    //   }
    // }
    // case REDUX_USERS_GET_USER_TYPE: {
    //   if (action.payload.success == null) {
    //     return {
    //       ...state,
    //       getUserFailure: action.payload.failure
    //     }
    //   }
    //   return {
    //     ...state,
    //     getUserSuccess: action.payload.success
    //   }
    // }
    // case REDUX_USERS_CREATE_USER_TYPE: {
    //   return {
    //     ...state,
    //     createUserSuccess: action.payload.success,
    //     createUserFailure: action.payload.failure
    //   }
    // }
    // case REDUX_USERS_UPDATE_USER_TYPE: {
    //   return {
    //     ...state,
    //     updateUserSuccess: action.payload.success,
    //     updateUserFailure: action.payload.failure
    //   }
    // }
    // case REDUX_USERS_DELETE_USER_LIST: {
    //   if (action.payload.success != null) {
    //     let getUserListUsers = state.getUserListUsers
    //     if (getUserListUsers == null) return state

    //     const { usersId } = action.payload.success
    //     getUserListUsers = getUserListUsers.filter(
    //       user => usersId.filter(id => id === user.id).length < 1
    //     )
    //     return {
    //       ...state,
    //       getUserListUsers,
    //       deleteUserListError: null
    //     }
    //   } else {
    //     return {
    //       ...state,
    //       deleteUserListError: action.payload.failure
    //     }
    //   }
    // }
    default:
      return state
  }
}
