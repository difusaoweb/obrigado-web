import * as React from 'react'
import { useParams } from 'react-router-dom'

import {
  useAppSelector,
  reduxUsersGetUserProfileFunction,
  useAppDispatch
} from '../../redux'

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

  return <></>
}
