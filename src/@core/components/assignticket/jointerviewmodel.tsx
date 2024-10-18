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
import Icon from 'src/@core/components/icon'
import JoinInnerIcon from '@mui/icons-material/JoinInner'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import AddIcon from '@mui/icons-material/Add'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import { useRouter } from 'next/router'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const DialogViewFullScreen = ({
  openProp,
  setPopupVisible
}: {
  openProp: boolean
  setPopupVisible: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  // ** Hooks
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleClose = () => {
    setPopupVisible(false)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openProp}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
      sx={{ textAlign: 'center', padding: '2rem' }} // Increase padding to make dialog bigger
    >
      <DialogContent sx={{ fontSize: '1.2rem', overflow: 'hidden' }}></DialogContent>
      <DialogActions className='dialog-actions-dense' sx={{ justifyContent: 'center' }}>
        <UserViewLeft setPopupVisible={setPopupVisible} />
      </DialogActions>
    </Dialog>
  )
}

import Divider from '@mui/material/Divider'

import CardActions from '@mui/material/CardActions'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types

// ** Utils Import

export const UserViewLeft = ({ setPopupVisible }: any) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card raised sx={{ maxWidth: 600, mx: 'auto', boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
              <CustomAvatar skin='light'>
                <Icon icon='mdi:ticket-account' />
              </CustomAvatar>
              <Typography variant='h6' sx={{ ml: 2 }}>
                T-1234567
              </Typography>
            </Box>
          </CardContent>

          <CardContent>
            <Typography variant='h6' gutterBottom>
              Details
            </Typography>
            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }}>
              <Typography variant='subtitle1'>Username: Mary Vaughn</Typography>
              <Box sx={{ mb: 2, display: 'flex' }}>
                <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem' }}>
                  Expertise-level: 1
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem' }}>
                  Expertise-type: High-level
                </Typography>
                <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem' }}>
                  Job-Type: Supervision
                </Typography>
              </Box>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant='subtitle1'>
                Ticket Details
                {/* <CustomChip label={data.status} /> */}
              </Typography>
              {/* <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                  Jointer ID
                </Typography> */}
            </Box>

            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap' }}>
              <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem', fontWeight: 'bold' }}>
                Jointer-ID:
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: '0.5rem' }}>
                45435678
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem', fontWeight: 'bold' }}>
                Raychem-ID:
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: '0.5rem' }}>
                45435678
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem', fontWeight: 'bold' }}>
                Jointer-Type:
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: '0.5rem' }}>
                option-A
              </Typography>
            </Box>
            <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap' }}>
              <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem', fontWeight: 'bold' }}>
                Site-code:
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: '0.5rem' }}>
                12345678
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', margin: '0.5rem', fontWeight: 'bold' }}>
                Date:
              </Typography>
              <Typography variant='body2' sx={{ color: 'text.secondary', mt: '0.5rem' }}>
                3/15/2024
              </Typography>
            </Box>
          </CardContent>

          <CardActions sx={{ justifyContent: 'center', p: 2 }}>
            <Button
              color='error'
              variant='contained'
              onClick={() => {
                setPopupVisible(false)
              }}
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}
