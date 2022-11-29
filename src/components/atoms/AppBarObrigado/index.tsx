import * as React from 'react'
import MuiAppBar from '@mui/material/AppBar'
import { Toolbar, Typography, IconButton } from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export const AppBarObrigado = () => {
  const navigate = useNavigate()

  return (
    <MuiAppBar component="div" position="relative">
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Obrigado
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}
