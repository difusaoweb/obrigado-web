import { combineReducers } from 'redux'

import { alertsReducer } from './alerts.reducer'
import { accessReducer } from './access.reducer'
import { usersReducer } from './users.reducer'
import { obrigadosReducer } from './obrigados.reducer'
import { servicesReducer } from './services.reducer'
import { casesReducer } from './cases.reducer'

export const rootReducer = combineReducers({
  alerts: alertsReducer,
  access: accessReducer,
  users: usersReducer,
  obrigados: obrigadosReducer,
  services: servicesReducer,
  cases: casesReducer
})
