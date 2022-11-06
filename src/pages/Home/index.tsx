import * as React from 'react'
import {
  Box,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  Snackbar,
  Alert
} from '@mui/material'

import {
  useAppSelector,
  reduxObrigadosGetHomeFunction,
  useAppDispatch
} from '../../redux'

export const Home: React.FC = () => {
  const { getHomeSuccess, getHomeFailure } = useAppSelector(
    state => state.obrigados
  )
  const dispatch = useAppDispatch()

  const [isLoadingGetHome, setIsLoadingGetHome] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(24)

  async function fetchGetHome() {
    if (isLoadingGetHome) return

    setIsLoadingGetHome(true)
    await dispatch(reduxObrigadosGetHomeFunction({ page, perPage }))
    setIsLoadingGetHome(false)
  }

  React.useEffect(() => {
    fetchGetHome()
  }, [])

  console.log('getHomeSuccess', getHomeSuccess)

  if (getHomeSuccess === null) {
    return <p>{getHomeFailure?.message}</p>
  }

  return (
    <Container component="main" maxWidth="xs">
      {getHomeSuccess.obrigados.map(item => (
        <p key={item.id}>{item.value}</p>
      ))}
    </Container>
  )
}
