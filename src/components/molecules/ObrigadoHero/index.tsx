import * as React from 'react'

import { ObrigadoHeroProps } from './index.types'

export const ObrigadoHero = ({ sender }: ObrigadoHeroProps) => {
  return (
    <>
      <p>{sender.name}</p>
      <br />@<p>{sender.username}</p>
      <br />
      <p>{sender.avatar}</p>
    </>
  )
}
