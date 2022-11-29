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

import { ProfileObrigadoCard } from '../../molecules/ProfileObrigadoCard'
import {
  useAppSelector,
  reduxObrigadosGetProfileFunction,
  useAppDispatch
} from '../../../redux'
import { ProfileObrigadosProps } from './index.types'

export const ProfileObrigados = ({ profile }: ProfileObrigadosProps) => {
  const { getProfileSuccess, getProfileFailure } = useAppSelector(
    state => state.obrigados
  )
  const dispatch = useAppDispatch()

  const [isLoadingGetProfile, setIsLoadingGetProfile] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [perPage, setPerPage] = React.useState(24)

  async function fetchGetProfile() {
    if (isLoadingGetProfile) return

    setIsLoadingGetProfile(true)
    await dispatch(
      reduxObrigadosGetProfileFunction({
        id: profile.id,
        page,
        perPage
      })
    )
    setIsLoadingGetProfile(false)
  }

  React.useEffect(() => {
    fetchGetProfile()
  }, [])

  if (getProfileSuccess === null) {
    return (
      <>
        <p>Error</p>
        <br />
        <p>{getProfileFailure?.message}</p>
      </>
    )
  }

  console.log('getProfileSuccess obrigados', getProfileSuccess.obrigados)

  return (
    <>
      {getProfileSuccess.obrigados.map(item => (
        <ProfileObrigadoCard
          item={item}
          profile={profile}
          key={item.obrigado.id}
        />
      ))}
    </>
  )
}
