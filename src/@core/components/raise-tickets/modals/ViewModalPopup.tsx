// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'

import Divider from '@mui/material/Divider'

import { styled } from '@mui/material/styles'

import Typography from '@mui/material/Typography'

import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import CloseIcon from '@mui/icons-material/Close'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Types
import { ThemeColor } from 'src/@core/layouts/types'
import { UsersType } from 'src/types/apps/userTypes'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { IconButton } from '@mui/material'

interface ColorsType {
  [key: string]: ThemeColor
}

const data: UsersType = {
  id: 1,
  role: 'admin',
  status: 'active',
  username: 'gslixby0',
  avatarColor: 'primary',
  country: 'El Salvador',
  company: 'Yotz PVT LTD',
  contact: '(479) 232-9151',
  currentPlan: 'enterprise',
  fullName: 'Daisy Patterson',
  email: 'gslixby0@abc.net.au',
  avatar: '/images/avatars/4.png'
}

const roleColors: ColorsType = {
  admin: 'error',
  editor: 'info',
  author: 'warning',
  maintainer: 'success',
  subscriber: 'primary'
}

const statusColors: ColorsType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

const UserViewLeft = ({ cardData, onClose }: any) => {
  if (data) {
    return (
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card>
            <CardContent sx={{ my: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ mr: 8, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar skin='light' sx={{ mr: 3, fontSize: 1 }}>
                    {' '}
                    <Icon icon='mdi:ticket-account' height={20} width={20} />
                  </CustomAvatar>

                  <div>
                    <Typography variant='button' sx={{ lineHeight: 1.3, fontWeight: 600 }}>
                      {cardData.ticketId}
                    </Typography>
                    {/* <Typography variant='body2'>TicketId</Typography> */}
                  </div>
                </Box>
                {/* <Box sx={{ display: 'flex', alignItems: 'center' }}> */}
                {/* <CustomAvatar skin='light' sx={{ mr: 3, fontSize: 20 }}> */}
                {/* <Icon icon='mdi:map-marker' height={20} width={20} /> */}
                {/* </CustomAvatar> */}
                {/* <div> */}
                {/* <Typography variant='button' sx={{ lineHeight: 1.3, fontWeight: 600 }}> */}
                {/* {cardData.location} */}
                {/* </Typography> */}
                {/* <Typography variant='body2'>Location</Typography> */}
                {/* </div> */}
                {/* </Box> */}
              </Box>
            </CardContent>

            <CardContent>
              <Typography variant='h6'>Details</Typography>
              <Divider sx={{ mt: theme => `${theme.spacing(4)} !important` }} />
              <Box sx={{ pt: 2, pb: 1 }}>
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Username:
                  </Typography>
                  <Typography variant='body2' sx={{ mr: 20 }}>
                    {cardData.contactName}
                  </Typography>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Customer Company:</Typography>
                  <Typography variant='body2' sx={{ textTransform: 'capitalize' }}>
                    {cardData.company}
                  </Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Billing Email:
                  </Typography>
                  <Typography variant='body2'>{data.email}</Typography>
                </Box> */}
                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography variant='subtitle2' sx={{ mr: 2, color: 'text.primary' }}>
                    Status:
                  </Typography>
                  <CustomChip
                    skin='light'
                    size='small'
                    label={data.status}
                    color={statusColors[data.status]}
                    sx={{
                      height: 20,
                      fontWeight: 500,
                      fontSize: '0.75rem',
                      borderRadius: '5px',
                      textTransform: 'capitalize',
                      mr: 36
                    }}
                  />
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Mobile no:</Typography>
                  <Typography variant='body2'>{cardData.contactNumber}</Typography>
                </Box>

                <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Jointning start date:</Typography>
                  <Typography variant='body2' sx={{ mr: 7 }}>
                    {cardData.joiningDate}
                  </Typography>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Location:</Typography>
                  <Typography variant='body2'>{cardData.location}</Typography>
                </Box>
                {/* <Box sx={{ display: 'flex', mb: 2.7 }}>
                  <Typography sx={{ mr: 2, fontWeight: 500, fontSize: '0.875rem' }}>Location:</Typography>
                  <Typography variant='body2'>{cardData.location}</Typography>
                </Box> */}
              </Box>
            </CardContent>

            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 25,
                  color: 'red'
                }}
                aria-label='edit'
                onClick={onClose}
                style={{ fontSize: '50px' }}
              >
                <CloseIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    )
  } else {
    return null
  }
}

export default UserViewLeft
