import * as React from 'react'
import {
  Paper,
  TextField,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './index.module.scss'

interface UsersAddOrEditFormEditProps {
  id: number | null
  email: string | null
  setEmail: (value: string | null) => void
  password: string | null
  setPassword: (value: string | null) => void
  name: string | null
  setName: (value: string | null) => void
  needPassword: boolean
  setNeedPassword: (value: React.SetStateAction<boolean>) => void
}
export const UsersAddOrEditFormEdit = ({
  id,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
  needPassword,
  setNeedPassword
}: UsersAddOrEditFormEditProps) => {
  return (
    <Paper sx={{ width: '100%', mb: 2, padding: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField
          label="Email"
          variant="outlined"
          value={email ?? ''}
          onChange={e =>
            setEmail(e.target.value === '' ? null : e.target.value)
          }
          sx={{ mb: 3 }}
          type="email"
          // helperText={email ? '' : 'O nome é obrigatório.'}
          // error={!email}
        />
        {id === null ? (
          <TextField
            label="Senha"
            variant="outlined"
            value={password ?? ''}
            onChange={e =>
              setPassword(e.target.value === '' ? null : e.target.value)
            }
            sx={{ mb: 3 }}
            type="password"
            autoComplete="off"
            // helperText={name ? '' : 'O nome é obrigatório.'}
            // error={!name}
          />
        ) : (
          <Accordion
            expanded={needPassword}
            onChange={() => {
              setNeedPassword(value => {
                return !value
              })
            }}
            className={styles.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Nova senha</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TextField
                label="Senha"
                variant="outlined"
                value={password ?? ''}
                onChange={e =>
                  setPassword(e.target.value === '' ? null : e.target.value)
                }
                sx={{ mb: 3 }}
                type="password"
                autoComplete="off"
                // helperText={password ? '' : 'O nome é obrigatório.'}
                // error={!password}
              />
            </AccordionDetails>
          </Accordion>
        )}
        <TextField
          label="Nome"
          variant="outlined"
          value={name ?? ''}
          onChange={e => setName(e.target.value === '' ? null : e.target.value)}
          sx={{ mb: 3 }}
          // helperText={name ? '' : 'O nome é obrigatório.'}
          // error={!name}
        />
      </Box>
    </Paper>
  )
}
