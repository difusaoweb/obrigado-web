import * as React from 'react'
import {
  CardActionArea,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  Snackbar,
  Alert
} from '@mui/material'

import { ProfileObrigadoCardTypes } from './index.types'
import styles from './index.styles.module.scss'

export const ProfileObrigadoCard = ({
  item,
  profile
}: ProfileObrigadoCardTypes) => {
  const sender = profile.id === item.sender.id

  return (
    <CardActionArea
      component="a"
      href={
        sender
          ? `/${item.receiver.username}/${item.obrigado.id}`
          : `/${item.sender.username}/${item.obrigado.id}`
      }
    >
      <Card sx={{ display: 'flex' }}>
        {sender && item.receiver.avatar !== null && (
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={item.receiver.avatar}
            alt={item.receiver.name}
          />
        )}
        {!sender && item.sender.avatar !== null && (
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={item.sender.avatar}
            alt={item.sender.name}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            Obrigado {sender ? 'enviado' : 'recebido'}
          </Typography>
          <Typography
            variant="subtitle1"
            className={`${styles['transfer-amount']} ${
              sender ? styles.sent : styles.received
            }`}
          >
            {sender ? '-' : '+'}O$ {item.obrigado.value}
          </Typography>
          <Typography variant="subtitle1">
            {sender ? item.receiver.name : item.sender.name}
          </Typography>
          {item.obrigado.message !== null && (
            <Typography>{item.obrigado.message}</Typography>
          )}
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
