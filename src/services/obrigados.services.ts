import { AxiosResponse } from 'axios'

import { api } from './api'
import { ReduxObrigadosGetHomeServiceParametersType } from '../redux'

async function getHome({
  page,
  perPage
}: ReduxObrigadosGetHomeServiceParametersType): Promise<AxiosResponse> {
  return await api.get('/obrigados/home', {
    params: { page, perPage }
  })
}

export const obrigadosService = {
  getHome
}
