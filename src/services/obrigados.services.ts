import { AxiosResponse } from 'axios'

import { api } from './api'
import {
  ReduxObrigadosGetHomeServiceParametersTypes,
  ReduxObrigadosGetProfileServiceParametersTypes,
  ReduxObrigadosShowServiceParametersTypes
} from '../redux'

async function getHome({
  page,
  perPage
}: ReduxObrigadosGetHomeServiceParametersTypes): Promise<AxiosResponse> {
  return await api.get('/obrigados/home', {
    params: { page, perPage }
  })
}

async function getProfile(
  parameters: ReduxObrigadosGetProfileServiceParametersTypes
): Promise<AxiosResponse> {
  return await api.get('/obrigados/profile', {
    params: parameters
  })
}

async function show({
  obrigadoId
}: ReduxObrigadosShowServiceParametersTypes): Promise<AxiosResponse> {
  return await api.get('/obrigados/show', {
    params: { obrigadoId }
  })
}

export const obrigadosService = {
  getHome,
  getProfile,
  show
}
