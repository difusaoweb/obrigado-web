import * as React from 'react'
import { Button } from '@mui/material'

import { AppBarProfile } from '../../atoms/AppBarProfile'
import { ProfileHeroProps } from './index.types'

export const ProfileHero = ({ profile }: ProfileHeroProps) => {
  return (
    <>
      <AppBarProfile name={profile.name} />
      <p>{profile.name}</p>
      <p>{profile.username}</p>
      {profile.description !== null && <p>{profile.description}</p>}
      {<Button variant="contained">Text</Button>}
    </>
  )
}
