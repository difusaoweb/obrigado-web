import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

import {
  useAppSelector,
  reduxObrigadosShowFunction,
  useAppDispatch
} from '../../redux'
import { ObrigadoHero } from '../../components/molecules/ObrigadoHero'
import { ProfileObrigados } from '../../components/ecosystems/ProfileObrigados/'
import { AppBarObrigado } from '../../components/atoms/AppBarObrigado'

export const Obrigado = () => {
  const { obrigadoId: theObrigadoId } = useParams()
  const { showSuccess, showFailure } = useAppSelector(state => state.obrigados)
  const dispatch = useAppDispatch()

  const [isLoadingGetObrigado, setIsLoadingGetObrigado] = React.useState(false)

  const obrigadoId: number | null =
    theObrigadoId === undefined ? null : parseInt(theObrigadoId)

  async function fetchGetObrigado() {
    if (isLoadingGetObrigado || obrigadoId === null) return

    setIsLoadingGetObrigado(true)
    await dispatch(
      reduxObrigadosShowFunction({
        obrigadoId
      })
    )
    setIsLoadingGetObrigado(false)
  }

  React.useEffect(() => {
    fetchGetObrigado()
  }, [])

  if (obrigadoId === null) {
    return <p>Obrigado not found!</p>
  }

  console.log(showSuccess)
  if (showSuccess === null) {
    return <p>User not found!</p>
  }

  return (
    <>
      <AppBarObrigado />
      <ObrigadoHero sender={showSuccess.sender} />
      <p>Obrigado</p>
    </>
  )
}
