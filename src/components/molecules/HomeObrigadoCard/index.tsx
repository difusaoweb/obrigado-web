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

import { ReduxObrigadosGetHomeObrigadoTypes } from '../../../redux'

interface HomeObrigadoCardTypes {
  item: ReduxObrigadosGetHomeObrigadoTypes
}
export const HomeObrigadoCard = ({ item }: HomeObrigadoCardTypes) => {
  return (
    <CardActionArea component="a" href={`/${item.username}/${item.obrigadoId}`}>
      <Card sx={{ display: 'flex' }}>
        {item.avatar !== null && (
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={item.avatar}
            alt={item.name}
          />
        )}
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {item.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {item.date}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {item.value}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
