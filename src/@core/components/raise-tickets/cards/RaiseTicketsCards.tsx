import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import VisibilityIcon from '@mui/icons-material/Visibility'
import CustomAvatar from 'src/@core/components/mui/avatar'
import Icon from 'src/@core/components/icon'
import Tooltip from '@mui/material/Tooltip'
import CustomChip from 'src/@core/components/mui/chip'
import ViewModal from '../modals/viewModal'

const CardAward = ({ cardData, onEditClick }: any) => {
  const [isViewing, setisViewing] = useState(false)

  const handleViewClick = () => {
    setisViewing(!isViewing)
  }

  const statusColors: any = {
    ongoing: 'success',
    pending: 'warning',
    inactive: 'secondary'
  }
  const handleViewCloseModal = () => {
    setisViewing(false)
  }
  return (
    <>
      <Card
        sx={{
          flexWrap: 'wrap',
          position: 'relative',
          border: 0,
          boxShadow: 4,
          color: 'common.blue',
          width: { xs: '100%', sm: '75%', md: '40%', lg: '31%' },
          transition: 'box-shadow 0.3s ease-in-out',

          '&:hover': {
            boxShadow: 10,
            backgroundColor: 'common.blue'
          },
          // ml: 2,
          // mt: 2,
          // mb: 2,
          // mr: 2
          m: 2
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <CustomAvatar skin='light-static' sx={{ mr: 3, fontSize: 1 }}>
              {' '}
              <Icon icon='mdi:ticket-account' height={20} width={20} />
            </CustomAvatar>
            <Typography variant='body1' sx={{ mb: 4, mt: 2 }}>
              <Box
                component='span'
                sx={{
                  // fontWeight: '500',
                  // color: 'black',
                  ml: 1,

                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1.2rem', lg: '2.5' }
                }}
              >
                {cardData.ticketId}
                <CustomChip
                  skin='light'
                  size='small'
                  label={cardData.status}
                  color={statusColors[cardData.status]}
                  sx={{
                    height: 20,
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    borderRadius: '5px',
                    textTransform: 'capitalize',
                    ml: 8
                    // ml: 10
                    // mr: 36
                  }}
                />
              </Box>
            </Typography>
          </Box>
          <Typography variant='body2' sx={{ mb: 3, fontWeight: '700' }}>
            {cardData.contactName}
          </Typography>
          {/* <Typography variant='body2' sx={{ mb: 1, fontWeight: '400' }}>
              Joining date {'  '}
            </Typography>
            <Typography variant='button' sx={{ fontWeight: 700, mb: 3 }}>
              {cardData.joiningDate}
            </Typography> */}
          <Typography variant='body2' sx={{ mb: 1, fontWeight: '400' }}>
            Intimation date {'  '}
          </Typography>
          <Typography variant='body2' sx={{ mb: 4, fontWeight: 700 }}>
            {cardData.intimationDate}
          </Typography>
          <Typography variant='body2' sx={{ mb: 1, fontWeight: '400' }}>
            Job type {'  '}
          </Typography>
          <Typography variant='body2' sx={{ fontWeight: 700, mb: 4 }}>
            {cardData.JobType}
          </Typography>
          <Box sx={{ display: 'flex', mt: 1 }}>
            <Icon icon='mdi:map-marker' height={20} width={20} color='#fb923c' />
            <Typography variant='body2' sx={{ fontWeight: '400', ml: 2 }}>
              {cardData.location}{' '}
            </Typography>
          </Box>
          <Tooltip title='Edit details' placement='left'>
            <IconButton
              sx={{ position: 'absolute', top: 170, right: 15 }}
              color='primary'
              aria-label='edit'
              onClick={onEditClick}
            >
              <EditIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>

          <Tooltip title='View details' placement='left'>
            <IconButton
              sx={{
                position: 'absolute',
                top: 200,
                right: 15,
                color: '#76ABAE'
              }}
              aria-label='edit'
              onClick={handleViewClick}
              style={{ fontSize: '50px' }}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        </CardContent>
      </Card>
      <ViewModal open={isViewing} onClose={handleViewCloseModal} cardData={cardData} />
    </>
  )
}

export default CardAward
