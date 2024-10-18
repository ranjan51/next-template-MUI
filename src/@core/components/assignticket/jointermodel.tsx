import { DialogTitle, DialogContent, DialogActions, Button, Dialog, Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Stack } from '@mui/system'
import { useState } from 'react'

const DialogRespoFullScreen = ({
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
    setExpertiseOption('')
  }

  const [expertiseSubOption, setExpertiseSubOption] = useState<string | number>()
  const [expertiseOption, setExpertiseOption] = useState<string | number>()

  const handleExpertiseOptionChange = (option: string) => {
    setExpertiseOption(option)
  }

  const handleOptionABChange = (option: any) => {
    setExpertiseSubOption(option)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openProp}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
      sx={{ textAlign: 'center', padding: '2rem' }} // Increase padding to make dialog bigger
    >
      <DialogTitle id='responsive-dialog-title'>Jointer Types:</DialogTitle>
      <DialogContent sx={{ fontSize: '1.2rem', overflow: 'hidden' }}>
        {' '}
        {/* Increase font size */}
        <Grid container spacing={2} justifyContent='center'>
          {' '}
          {/* Center the grid items */}
          {['Option A', 'Option B'].map(option => (
            <Grid item key={option} xs={12} md={6}>
              <Stack
                direction={'row'}
                justifyContent={'center'}
                onClick={() => handleExpertiseOptionChange(option.toLowerCase())}
              >
                <Typography
                  sx={{
                    color: expertiseOption === option.toLowerCase() ? 'white' : '',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: 200,
                    py: 2,
                    cursor: 'pointer',
                    backgroundColor: expertiseOption === option.toLowerCase() ? '#787EFF' : 'transparent'
                  }}
                >
                  {option}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={2} justifyContent='center'>
          {' '}
          {/* Center the grid items */}
          {expertiseOption === 'option a' &&
            [1, 2, 3].map(option => (
              <Stack direction={'row'} mt={5} spacing={2} onClick={() => handleOptionABChange(option)}>
                <Typography
                  sx={{
                    color: expertiseSubOption === option ? 'white' : '',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: 130,
                    py: 2,
                    mx: 1,
                    cursor: 'pointer',
                    backgroundColor: expertiseSubOption === option ? '#787EFF' : 'transparent'
                  }}
                >
                  Option {option}
                </Typography>
              </Stack>
              // </Grid>
            ))}
          {expertiseOption === 'option b' &&
            [4, 5, 6].map(option => (
              <Stack direction={'row'} mt={5} onClick={() => handleOptionABChange(option)}>
                <Typography
                  sx={{
                    color: expertiseSubOption === option ? 'white' : '',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    minWidth: 100,
                    py: 2,
                    mx: 1,
                    cursor: 'pointer',
                    backgroundColor: expertiseSubOption === option ? '#787EFF' : 'transparent'
                  }}
                >
                  Option {option}
                </Typography>
              </Stack>
              // </Grid>
            ))}
        </Grid>
      </DialogContent>
      <DialogActions className='dialog-actions-dense' sx={{ justifyContent: 'center' }}>
        {' '}
        {/* Center the dialog actions */}
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogRespoFullScreen