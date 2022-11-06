import { NumberOrNull, BooleanOrNull, ErrorStatusOrNull } from './common.types'
import { AlertActionTypes } from './alerts.types'

export interface ServiceData {
  id: number
  image: string
  title: string
  description: string
  created_at: string
}
export interface ReduxServicesGetServiceListServiceParameters {
  page: number
  perPage: number
}
export interface ReduxServicesGetServiceListReducerPayload {
  success: {
    services: ServiceData[]
    currentPage: number
    lastPage: number
    total: number
  } | null
  failure: ErrorStatusOrNull
}
export type ReduxServicesGetServiceListFunctionDispatch = ReturnType<
  typeof ServiceActionTypes | typeof AlertActionTypes
>

export interface ReduxServicesDeleteServiceListServiceParameters {
  servicesId: number[]
}
export interface ReduxServicesDeleteServiceListReducerPayload {
  success: {
    deleted: boolean
    servicesId: number[]
  } | null
  failure: ErrorStatusOrNull
}
export type ReduxServicesDeleteServiceListFunctionDispatch = ReturnType<
  typeof ServiceActionTypes | typeof AlertActionTypes
>

export interface ReduxServicesCreateServiceFunctionParametersType {
  title: string
  description: string
  imagesId: number[]
  setIdCreatedService: (value: React.SetStateAction<number | null>) => void
}
export interface ReduxServicesCreateServiceServiceParametersType {
  title: string
  description: string
}
export interface ReduxServicesCreateServiceActionParametersType {
  success: {
    serviceId: number
  } | null
  failure: ErrorStatusOrNull
}

export const REDUX_SERVICES_GET_SERVICE_LIST = 'REDUX_SERVICES_GET_SERVICE_LIST'
interface ReduxServicesGetServiceListReducer {
  type: typeof REDUX_SERVICES_GET_SERVICE_LIST
  payload: ReduxServicesGetServiceListReducerPayload
}

export const REDUX_SERVICES_DELETE_SERVICE_LIST =
  'REDUX_SERVICES_DELETE_SERVICE_LIST'
interface ReduxServicesDeleteServiceListReducer {
  type: typeof REDUX_SERVICES_DELETE_SERVICE_LIST
  payload: ReduxServicesDeleteServiceListReducerPayload
}

export const REDUX_SERVICES_CREATE_SERVICE_TYPE =
  'REDUX_SERVICES_CREATE_SERVICE_TYPE'
interface ReduxServicesCreateServiceReducer {
  type: typeof REDUX_SERVICES_CREATE_SERVICE_TYPE
  payload: ReduxServicesCreateServiceActionParametersType
}

export interface ServiceState {
  getServiceListServices: ServiceData[] | null
  getServiceListLastPage: NumberOrNull
  getServiceListTotal: NumberOrNull
  getServiceListError: ErrorStatusOrNull

  deleteServiceListDeleted: BooleanOrNull
  deleteServiceListError: ErrorStatusOrNull

  createServiceServiceId: NumberOrNull
  createServiceError: ErrorStatusOrNull
}

export type ServiceActionTypes =
  | ReduxServicesGetServiceListReducer
  | ReduxServicesDeleteServiceListReducer
  | ReduxServicesCreateServiceReducer

export type ReduxServicesCreateServiceFunctionDispatchType = ReturnType<
  typeof ServiceActionTypes | typeof AlertActionTypes
>
