import * as React from 'react'
import { Paper, Box, Typography } from '@mui/material'

import { ServicesAddFormEdit2PropsType } from './index.types'
import { UploadImagePreview } from '../../atoms/UploadImagePreview'
import { LibraryModal } from '../../ecosystems/LibraryModal'
import ImagePlaceholderUploadFile from '../../../assets/images/ImageUploadPlaceholder.png'

export const ServicesAddFormEdit2 = ({
  attchmentSource,
  attachmentId,
  setAttachmentId
}: ServicesAddFormEdit2PropsType) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [attachment, setAttachment] = React.useState<{
    id: number
    source: string
  } | null>(null)

  const theAttachmentSource =
    attachment?.source ?? attchmentSource ?? ImagePlaceholderUploadFile

  React.useEffect(() => {
    if (!attachment) return
    setAttachmentId(attachment.id)
  }, [attachment])

  return (
    <Paper sx={{ width: '100%', mb: 3, padding: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography sx={{ mb: 1 }}>Imagem</Typography>
          <Box>
            <UploadImagePreview
              alt="Placeholder"
              url={theAttachmentSource}
              open={modalOpen}
              setOpen={setModalOpen}
            />
            <LibraryModal
              open={modalOpen}
              setOpen={() => setModalOpen(false)}
              multiple={false}
              attachment={attachment}
              setAttachment={setAttachment}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  )
}
