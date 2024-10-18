import { Fragment, useState } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import {
  Box,
  IconButton,
  Modal,
  Button,
  Fab,
  Tooltip,
  Dialog,
  Grid,
  Pagination,
  useTheme,
  useMediaQuery,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Icon from 'src/@core/components/icon'
import JoinInnerIcon from '@mui/icons-material/JoinInner'

import AddIcon from '@mui/icons-material/Add'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import { useRouter } from 'next/router'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const DeleteFullScreen = ({
  openProp,
  setPopupVisible,
  onDelete,
  key
}: {
  openProp: boolean
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
  onDelete: any
  key:any
}) => {
  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClose = () => {
    setPopupVisible(false)
  }

  const handleCloseforcon = () => {
    setPopupVisible(false)
    onDelete(key)
  }

  return (
    <Dialog fullScreen={fullScreen} open={openProp} onClose={handleClose} aria-labelledby='responsive-dialog-title'>
      <DialogTitle id='alert-dialog-title'>
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'red' }}>
          <DeleteForeverIcon sx={{ color: 'red', marginRight: '8px' }} />
          Confirm Delete
        </Box>
      </DialogTitle>
      <DialogContent>
        {/* Add your dialog content here */}
        <Typography variant='body1'>Are you sure you want to delete this jointer?</Typography>
      </DialogContent>
      <DialogActions className='dialog-actions-dense' sx={{ justifyContent: 'center' }}>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleCloseforcon} color='error' autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}
