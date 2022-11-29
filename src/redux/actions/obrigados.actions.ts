import axios from 'axios'
import { ActionCreator, Dispatch } from 'redux'

import {
  ObrigadoActionTypes,
  ReduxObrigadosGetHomeActionParametersTypes,
  ReduxObrigadosGetHomeFunctionParametersTypes,
  ReduxObrigadosGetHomeFunctionDispatchTypes,
  REDUX_OBRIGADOS_GET_HOME_TYPES,
  ReduxObrigadosGetProfileActionParametersTypes,
  ReduxObrigadosGetProfileFunctionParametersTypes,
  ReduxObrigadosGetProfileFunctionDispatchTypes,
  REDUX_OBRIGADOS_GET_PROFILE_TYPES,
  ReduxObrigadosShowActionParametersTypes,
  ReduxObrigadosShowFunctionParametersTypes,
  ReduxObrigadosShowFunctionDispatchTypes,
  REDUX_OBRIGADOS_SHOW_TYPES
} from '../types'
import { obrigadosService } from '../../services'
import { reduxAlertsSetAlertFunction } from './alerts.actions'

const reduxObrigadosGetHomeAction: ActionCreator<ObrigadoActionTypes> = (
  payload: ReduxObrigadosGetHomeActionParametersTypes
) => {
  return { type: REDUX_OBRIGADOS_GET_HOME_TYPES, payload }
}
const reduxObrigadosGetProfileAction: ActionCreator<ObrigadoActionTypes> = (
  payload: ReduxObrigadosGetProfileActionParametersTypes
) => {
  return { type: REDUX_OBRIGADOS_GET_PROFILE_TYPES, payload }
}
const reduxObrigadosShowAction: ActionCreator<ObrigadoActionTypes> = (
  payload: ReduxObrigadosShowActionParametersTypes
) => {
  return { type: REDUX_OBRIGADOS_SHOW_TYPES, payload }
}

export function reduxObrigadosGetHomeFunction({
  page,
  perPage
}: ReduxObrigadosGetHomeFunctionParametersTypes) {
  return async (
    dispatch: Dispatch<ReduxObrigadosGetHomeFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await obrigadosService.getHome({ page, perPage })
      console.log(data)
      const { obrigados, lastPage, total } = data.success

      dispatch(
        reduxObrigadosGetHomeAction({
          success: { obrigados, lastPage, total },
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
        reduxObrigadosGetHomeAction({
          success: null,
          failure: { status, message }
        })
      )
    }
  }
}

export function reduxObrigadosGetProfileFunction(
  parameters: ReduxObrigadosGetProfileFunctionParametersTypes
) {
  return async (
    dispatch: Dispatch<ReduxObrigadosGetProfileFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await obrigadosService.getProfile(parameters)
      console.log(data)
      const { obrigados: theObrigados, total } = data.success

      const obrigados = theObrigados.map((item: any) => {
        return {
          obrigado: {
            id: item?.obrigadoId,
            value: item?.obrigadoValue,
            message: item?.obrigadoMessage,
            date: item?.obrigadoDate
          },
          sender: {
            id: item?.senderId,
            username: item?.senderUsername,
            name: item?.senderName,
            avatar: item?.senderAvatar
          },
          receiver: {
            id: item?.receiverId,
            username: item?.receiverUsername,
            name: item?.receiverName,
            avatar: item?.receiverAvatar
          }
        }
      })

      dispatch(
        reduxObrigadosGetProfileAction({
          success: { obrigados, total },
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
        reduxObrigadosGetProfileAction({
          success: null,
          failure: { status, message }
        })
      )
    }
  }
}

export function reduxObrigadosShowFunction({
  obrigadoId
}: ReduxObrigadosShowFunctionParametersTypes) {
  return async (
    dispatch: Dispatch<ReduxObrigadosShowFunctionDispatchTypes>
  ) => {
    try {
      const { data } = await obrigadosService.show({ obrigadoId })
      console.log(data)
      const { obrigado, sender } = data.success

      dispatch(
        reduxObrigadosShowAction({
          success: { obrigado, sender },
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
        reduxObrigadosShowAction({
          success: null,
          failure: { status, message }
        })
      )
    }
  }
}
