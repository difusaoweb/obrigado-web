import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import {
  Box,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  IconButton,
  Avatar
} from '@mui/material'
import { useDispatch } from 'react-redux'
import {
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon
} from '@mui/icons-material'

import { getLogOut } from '../../../redux'

interface AppBarProfileTypes {
  name: string
}
export const AppBarProfile = ({ name }: AppBarProfileTypes) => {
  return (
    <MuiAppBar component="div" position="relative">
      <Toolbar sx={{ pr: '24px' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          // onClick={toggleDrawer}
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
          {name}
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}
