import * as React from 'react'
import { Box, Toolbar, Typography, Container, Grid } from '@mui/material'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'

import { Copyright } from '../../components/atoms/Copyright'
import { AppBar } from '../../components/atoms/AppBar'
import { SideBar } from '../../components/molecules/SideBar'
import { UsersAddOrEditFormEdit } from '../../components/ecosystems/UsersAddOrEditFormEdit'
import {
  useAppSelector,
  useAppDispatch,
  reduxUsersGetUserFunction,
  reduxUsersCreateUserFunction,
  reduxUsersUpdateUserFunction
} from '../../redux'

export const UsersAddOrEdit: React.FC = () => {
  const { userId } = useParams()

  const { getUserSuccess, createUserSuccess, updateUserSuccess } =
    useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  const [loadingGetUser, setLoadingGetUser] = React.useState(false)
  const [loadingCreateUser, setLoadingCreateUser] = React.useState(false)
  const [loadingUpdateUser, setLoadingUpdateUser] = React.useState(false)

  const [id, setId] = React.useState<number | null>(
    userId === undefined ? null : parseInt(userId)
  )
  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  const [needPassword, setNeedPassword] = React.useState(userId === undefined)
  const [name, setName] = React.useState<string | null>(null)

  const [open, setOpen] = React.useState(true)
  function toggleDrawer() {
    setOpen(!open)
  }

  async function getUser() {
    if (loadingGetUser || userId === undefined) {
      return
    }

    setLoadingGetUser(true)
    await dispatch(
      reduxUsersGetUserFunction({
        userId: parseInt(userId)
      })
    )
    setLoadingGetUser(false)
  }

  async function handleCreateUser() {
    if (
      loadingCreateUser ||
      email === null ||
      password === null ||
      name === null
    ) {
      return
    }

    setLoadingCreateUser(true)
    await dispatch(
      reduxUsersCreateUserFunction({
        email,
        password,
        name,
        setId
      })
    )
    setLoadingCreateUser(false)
  }

  async function handleUpdateUser() {
    if (
      loadingUpdateUser ||
      id === null ||
      email === null ||
      name === null ||
      (needPassword ? password === null : false)
    ) {
      return
    }

    setLoadingUpdateUser(true)
    await dispatch(
      reduxUsersUpdateUserFunction({
        id,
        email,
        password,
        name
      })
    )
    setLoadingUpdateUser(false)
  }

  React.useEffect(() => {
    if (userId !== undefined) {
      getUser()
    }
  }, [])
  React.useEffect(() => {
    if (getUserSuccess !== null) {
      setEmail(getUserSuccess.user.email)
      setName(getUserSuccess.user.name)
      setPassword(null)
    }
  }, [getUserSuccess])

  if (createUserSuccess !== null || updateUserSuccess !== null) {
    const location = useLocation()
    return <Navigate to="/usuarios" state={{ from: location }} replace />
  }

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar open={open} toggleDrawer={toggleDrawer} title="Adicionar" />
        <SideBar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto'
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, pb: 4 }}>
            <Box
              sx={{ display: 'flex', alignItens: 'center', marginBottom: 5 }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ fontWeight: 'bold' }}
                >
                  {id === null
                    ? 'Criar um novo usuário'
                    : 'Atualizar o usuário'}
                </Typography>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <UsersAddOrEditFormEdit
                  id={id}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  name={name}
                  setName={setName}
                  needPassword={needPassword}
                  setNeedPassword={setNeedPassword}
                />
                <LoadingButton
                  variant="contained"
                  size="large"
                  fullWidth
                  onClick={id === null ? handleCreateUser : handleUpdateUser}
                  loading={loadingCreateUser || loadingUpdateUser}
                  disabled={
                    loadingGetUser ||
                    loadingCreateUser ||
                    loadingUpdateUser ||
                    email === null ||
                    (needPassword ? password === null : false) ||
                    name === null
                  }
                >
                  {id === null ? 'Criar usuário' : 'Atualizar usuário'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Container>
          <Copyright />
        </Box>
      </Box>
    </>
  )
}
