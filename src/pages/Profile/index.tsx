import * as React from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

import {
  useAppSelector,
  reduxUsersGetUserProfileFunction,
  useAppDispatch
} from '../../redux'
import { ProfileHero } from '../../components/molecules/ProfileHero'
import { ProfileObrigados } from '../../components/ecosystems/ProfileObrigados/'

export const Profile = () => {
  const { username } = useParams()
  const { getUserProfileSuccess, getUserProfileFailure } = useAppSelector(
    state => state.users
  )
  const dispatch = useAppDispatch()

  const [isLoadingGetUserProfile, setIsLoadingGetUserProfile] =
    React.useState(false)

  async function fetchGetUserProfile() {
    if (isLoadingGetUserProfile || username === undefined) return

    setIsLoadingGetUserProfile(true)
    await dispatch(
      reduxUsersGetUserProfileFunction({
        username
      })
    )
    setIsLoadingGetUserProfile(false)
  }

  React.useEffect(() => {
    fetchGetUserProfile()
  }, [])

  console.log(getUserProfileSuccess)

  if (getUserProfileSuccess === null) {
    return <p>User not found!</p>
  }

  if (username === undefined) {
    return <p>User not found!</p>
  }

  return (
    <>
      <ProfileHero profile={getUserProfileSuccess.profile} />
      <ProfileObrigados profile={getUserProfileSuccess.profile} />
    </>
  )
}
