import axios, { AxiosError } from 'axios'
import { ActionCreator, Dispatch } from 'redux'

import {
  ServiceActionTypes,
  ReduxServicesGetServiceListReducerPayload,
  REDUX_SERVICES_GET_SERVICE_LIST,
  ReduxServicesGetServiceListServiceParameters,
  ReduxServicesGetServiceListFunctionDispatch,
  ReduxServicesDeleteServiceListReducerPayload,
  REDUX_SERVICES_DELETE_SERVICE_LIST,
  ReduxServicesDeleteServiceListServiceParameters,
  ReduxServicesDeleteServiceListFunctionDispatch,
  ReduxServicesCreateServiceActionParametersType,
  REDUX_SERVICES_CREATE_SERVICE_TYPE,
  ReduxServicesCreateServiceFunctionParametersType,
  ReduxServicesCreateServiceFunctionDispatchType
} from '../types'
import { servicesService } from '../../services'
import { reduxAlertsSetAlertFunction } from './alerts.actions'

const reduxServicesGetServiceListAction: ActionCreator<ServiceActionTypes> = (
  payload: ReduxServicesGetServiceListReducerPayload
) => {
  return { type: REDUX_SERVICES_GET_SERVICE_LIST, payload }
}
export function reduxServicesGetServiceListFunction({
  page,
  perPage
}: ReduxServicesGetServiceListServiceParameters) {
  return async (
    dispatch: Dispatch<ReduxServicesGetServiceListFunctionDispatch>
  ) => {
    try {
      const { data } = await servicesService.getServiceList({ page, perPage })
      const services = data?.success?.services
      const lastPage = data?.success?.last_page
      const total = data?.success?.total

      dispatch(
        reduxServicesGetServiceListAction({
          success: { services, lastPage, currentPage: page, total },
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
        reduxServicesGetServiceListAction({
          success: null,
          failure: { status }
        })
      )
    }
  }
}

const reduxServicesDeleteServiceListAction: ActionCreator<
  ServiceActionTypes
> = (payload: ReduxServicesDeleteServiceListReducerPayload) => {
  return { type: REDUX_SERVICES_DELETE_SERVICE_LIST, payload }
}
export function reduxServicesDeleteServiceListFunction({
  servicesId
}: ReduxServicesDeleteServiceListServiceParameters) {
  return async (
    dispatch: Dispatch<ReduxServicesDeleteServiceListFunctionDispatch>
  ) => {
    try {
      const { data } = await servicesService.deleteServiceList({ servicesId })
      const deleted = data?.success?.deleted

      dispatch(
        reduxServicesDeleteServiceListAction({
          success: { deleted, servicesId },
          failure: null
        })
      )
    } catch (err) {
      console.log(err)
      let status: number | null = null

      if (axios.isAxiosError(err)) {
        err
        status = err.response?.status ?? null
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
        reduxServicesDeleteServiceListAction({
          success: null,
          failure: { status }
        })
      )
    }
  }
}

const reduxServicesCreateServiceAction: ActionCreator<ServiceActionTypes> = (
  payload: ReduxServicesCreateServiceActionParametersType
) => {
  return { type: REDUX_SERVICES_CREATE_SERVICE_TYPE, payload }
}
export function reduxServicesCreateServiceFunction({
  title,
  description,
  imagesId,
  setIdCreatedService
}: ReduxServicesCreateServiceFunctionParametersType) {
  return async (
    dispatch: Dispatch<ReduxServicesCreateServiceFunctionDispatchType>
  ) => {
    try {
      const { data } = await servicesService.createService({
        title,
        description,
        imagesId
      })
      const { serviceId } = data.success

      setIdCreatedService(serviceId)

      dispatch(
        reduxServicesCreateServiceAction({
          success: { serviceId },
          failure: null
        })
      )
    } catch (err) {
      console.log(err)
      let status: number | null = null

      if (axios.isAxiosError(err)) {
        err
        status = err.response?.status ?? null
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
        reduxServicesCreateServiceAction({
          success: null,
          failure: { status }
        })
      )
    }
  }
}
