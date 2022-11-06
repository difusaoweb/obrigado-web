import * as React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import styles from './index.module.scss'
import { PageContainer } from '../../components/atoms/PageContainer'
import { ServicesAddFormEdit } from '../../components/ecosystems/ServicesAddFormEdit'
import { ServicesAddFormEdit2 } from '../../components/molecules/ServicesAddFormEdit2'
import {
  reduxServicesCreateServiceFunction,
  useAppDispatch
  // useAppSelector
} from '../../redux'

export const ServiceAddPage: React.FC = () => {
  // const { createServiceReturn } = useAppSelector(state => state.services)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = React.useState<string | null>(null)
  const [description, setDescription] = React.useState<string | null>(null)
  const [attachmentId, setAttachmentId] = React.useState<number | null>(null)
  const [isLoadingCreateService, setIsLoadingCreateService] =
    React.useState(false)
  const [idCreatedService, setIdCreatedService] = React.useState<number | null>(
    null
  )

  async function createService() {
    if (isLoadingCreateService || !title || !description) return

    setIsLoadingCreateService(true)
    await dispatch(
      reduxServicesCreateServiceFunction({
        title,
        description,
        setIdCreatedService
      })
    )
    setIsLoadingCreateService(false)
  }

  React.useEffect(() => {
    if (!idCreatedService) return
    navigate(`../${idCreatedService}`, { replace: true })
  }, [idCreatedService])

  return (
    <PageContainer title="Adicionar">
      <>
        <Box className={styles.pageTopBar}>
          <Box className={styles.box}>
            <Typography component="h1" className={styles.titlePage}>
              Criar um novo serviço
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <ServicesAddFormEdit
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
            />
          </Grid>
          <Grid item xs={4}>
            <ServicesAddFormEdit2
              attachmentId={attachmentId}
              setAttachmentId={setAttachmentId}
            />
            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={createService}
              disabled={!title || !description}
            >
              Criar serviço
            </Button>
          </Grid>
        </Grid>
      </>
    </PageContainer>
  )
}
