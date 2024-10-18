import { useState } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { Box, IconButton, Fab, Tooltip } from '@mui/material'
import Icon from 'src/@core/components/icon'
import JoinInnerIcon from '@mui/icons-material/JoinInner'
import CustomChip from 'src/@core/components/mui/chip'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import AddIcon from '@mui/icons-material/Add'
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined'
import { useRouter } from 'next/router'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { DeleteFullScreen } from './deletemodelpop'
import DialogRespoFullScreen from './jointermodel'
import { DialogViewFullScreen } from './jointerviewmodel'

export const CardTwitter = ({ key, title, content, setFormvisible, onDelete }: any) => {
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [popupVisible, setPopupVisible] = useState(false)
  const [popupViewVisible, setPopupViewVisible] = useState(false)
  const router = useRouter()

  const [Delete, setDelete] = useState(false)

  const handleButtonClick = () => {
    console.log('Button clicked')
    setFormvisible(true)
  }

  const circleButtonStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

  const buttonTransition = {
    transition: 'background-color 0.3s, color 0.3s'
  }

  const visibilityStyle: React.CSSProperties = buttonsVisible ? { visibility: 'visible' } : { visibility: 'hidden' }

  return (
    <>
      <Card
        sx={{
          border: 0,
          boxShadow: 4,
          color: 'common.blue',
          width: { xs: '100%', sm: '75%', md: '50%', lg: '30%' },
          transition: 'box-shadow 0.3s ease-in-out',
          '&:hover': {
            boxShadow: 10,
            backgroundColor: 'common.blue'
          },
          m: 2
        }}
        onMouseEnter={() => setButtonsVisible(true)}
        onMouseLeave={() => setButtonsVisible(false)}
      >
        <CardContent sx={{ p: theme => `${theme.spacing(3.25, 5, 4.5)} !important`, position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '0.5rem'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              {/* <Icon fontSize={20} icon='mdi:ticket' /> */}
              <Typography
                variant='body2'
                sx={{ color: 'common.blue', marginLeft: '5px', padding: '4px', fontSize: '24px' }}
              >
                T- 12345678
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between ',
              mt: '0.5rem'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              {/* <Avatar alt='Mary Vaughn' src='/images/avatars/a.jpg' sx={{ width: 34, height: 34 }} /> */}
              <Icon fontSize={20} icon='mdi-account' />
              <Typography variant='body2' sx={{ color: 'common.blue', marginLeft: '5px', padding: '4px' }}>
                Mary Vaughn
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '0.5rem'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              <Icon fontSize={20} icon='mdi-phone-classic' />
              <Typography variant='body2' sx={{ color: 'common.blue', marginLeft: '5px', padding: '4px' }}>
                +91-9739016898
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              mt: '0.5rem'
            }}
          >
            <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
              <Icon fontSize={20} icon='mdi-map-marker-radius' />
              <Typography variant='body2' sx={{ color: 'common.blue', marginLeft: '5px', padding: '4px' }}>
                Bangalore
              </Typography>
            </Box>
          </Box>

          <Box>
            <Tooltip title='Jointer Type' placement='right'>
              <IconButton
                size='small'
                style={{ ...visibilityStyle, ...circleButtonStyle, ...buttonTransition, backgroundColor: '#86198f' }}
                onClick={() => setPopupVisible(true)}
                sx={{
                  position: 'absolute',
                  top: 10,
                  right: 15,
                  color: '#76ABAE'
                }}
              >
                <JoinInnerIcon fontSize='small' style={{ color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='View' placement='right'>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 45,
                  right: 15,
                  color: '#76ABAE'
                }}
                size='small'
                style={{ ...visibilityStyle, ...circleButtonStyle, ...buttonTransition, backgroundColor: '#3b82f6' }}
                onClick={() => setPopupViewVisible(true)}
              >
                <VisibilityIcon fontSize='small' style={{ color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='Delete' placement='right'>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 80,
                  right: 15,
                  color: '#76ABAE'
                }}
                size='small'
                style={{ ...visibilityStyle, ...circleButtonStyle, ...buttonTransition, backgroundColor: 'red' }}
                onClick={() => {
                  setDelete(true)
                }}
              >
                <DeleteForeverIcon fontSize='small' style={{ color: 'white' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title='Assign jointer' placement='right'>
              <IconButton
                sx={{
                  position: 'absolute',
                  top: 115,
                  right: 15,
                  color: '#76ABAE'
                }}
                size='small'
                style={{ ...visibilityStyle, ...circleButtonStyle, ...buttonTransition, backgroundColor: '#15803d' }}
                onClick={() => handleButtonClick()}
              >
                <AddIcon fontSize='small' style={{ color: 'white' }} />
              </IconButton>
            </Tooltip>

            <CustomChip
              skin='light'
              size='small'
              label={'SuperVission'}
              color={'success'}
              sx={{
                height: 20,
                fontWeight: 500,
                fontSize: '0.75rem',
                borderRadius: '5px',
                textTransform: 'capitalize',
                position: 'absolute',
                top: 160,
                right: 15
              }}
            />
          </Box>

          <DialogRespoFullScreen openProp={popupVisible} setPopupVisible={setPopupVisible} />
          <DialogViewFullScreen openProp={popupViewVisible} setPopupVisible={setPopupViewVisible} />
          <DeleteFullScreen key={key} openProp={Delete} setPopupVisible={setDelete} onDelete={onDelete} />
        </CardContent>

        <Box sx={{ position: 'fixed', bottom: '10px', right: '20px' }}>
          <Fab color='primary' aria-label='add' onClick={() => router.replace('/')}>
            <PersonAddAlt1OutlinedIcon />
          </Fab>
        </Box>
      </Card>
    </>
  )
}
