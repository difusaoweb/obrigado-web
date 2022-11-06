import axios from 'axios'
import { ActionCreator, Dispatch } from 'redux'

import {
  ObrigadoActionTypes,
  ReduxObrigadosGetHomeActionParametersTypes,
  ReduxObrigadosGetHomeFunctionParametersTypes,
  ReduxObrigadosGetHomeFunctionDispatchTypes,
  REDUX_OBRIGADOS_GET_HOME_TYPES
} from '../types'
import { obrigadosService } from '../../services'
import { reduxAlertsSetAlertFunction } from './alerts.actions'

const reduxObrigadosGetHomeAction: ActionCreator<ObrigadoActionTypes> = (
  payload: ReduxObrigadosGetHomeActionParametersTypes
) => {
  return { type: REDUX_OBRIGADOS_GET_HOME_TYPES, payload }
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
