import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import PickersBasic from '../datePicker/TicketRaiseDatePicker'
import CloseIcon from '@mui/icons-material/Close'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { Box, IconButton, Typography } from '@mui/material'
import JointerDatePicker from '../datePicker/TicketRaiseDatePicker'
const citiesInIndia = ['Ranchi', 'Patna', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad']
const internationalCompanies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook', 'Samsung', 'Sony']
const countryCodes = [
  'India +91',
  'United States +1',
  'United Kingdom +44',
  'Australia +61',
  'Canada +1',
  'Germany +49',
  'France +33',
  'Japan +81',
  'Brazil +55'
]

const RaiseTicketForms = ({ setisAdding }: any) => {
  const [selectedCity, setSelectedCity] = React.useState<string | null>(null)
  const [selectcountryCode, setselectcountryCode] = React.useState<string | null>(null)
  const [selectedCompany, setSelectedCompany] = React.useState<string | null>(null)
  const handleCloseModal = () => {
    setisAdding(false)
  }
  const handleValidityStartDateChange = (date: any) => {
    // setFormData({ ...formData, validityStartDate: date })
  }

  // Callback function to update form data with validity end date
  const handleValidityEndDateChange = (date: any) => {
    // setFormData({ ...formData, validityEndDate: date })
  }

  return (
    <Card sx={{ width: { xs: '%', sm: '65%', md: '75%', lg: '100%' }, mt: 2 }}>
      <CardContent sx={{ width: { xs: '%', sm: '65%', md: '75%', lg: '100%' } }}>
        <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
          <Typography variant='h5' sx={{ ml: 1, mb: 6, fontSize: 24 }}>
            Raise ticket
          </Typography>
          <TextField
            fullWidth
            label='Ticket ID'
            // defaultValue={cardData?.ticketId}9
            placeholder='Your ticket'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:ticket-account' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
          {/* <PickersBasic popperPlacement='bottom-start' /> */}
          {/* <Box sx={{ mt: 5, mb: 5 }}> */}
          <JointerDatePicker
            onValidityStartDateChange={handleValidityStartDateChange}
            onValidityEndDateChange={handleValidityEndDateChange}
          />
          {/* </Box> */}
        </Grid>

        <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
          <Autocomplete
            fullWidth
            // value={selectedCity} // Here is the change
            onChange={(event, newValue) => setSelectedCity(newValue)}
            options={citiesInIndia}
            renderInput={params => (
              <TextField
                {...params}
                label='Select city'
                placeholder='Your city'
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:map-marker' />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
          <Autocomplete
            fullWidth
            value={selectedCompany}
            onChange={(event, newValue) => setSelectedCompany(newValue)}
            options={internationalCompanies}
            renderInput={params => (
              <TextField
                {...params}
                label='Select company'
                // defaultValue={cardData?.company}
                placeholder='Your company'
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position='start'>
                      <Icon icon='mdi:bag-personal' />
                    </InputAdornment>
                  )
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4, ml: 5, mr: 5 }}>
          <TextField
            fullWidth
            // type='email'
            label='Contact name'
            placeholder='Your name'
            // defaultValue={cardData?.contactName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:account-circle' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          {' '}
        </Grid>
        <Grid item xs={12} sx={{ mb: 6, ml: 5, mr: 5, display: 'flex' }}>
          <Autocomplete
            // value={selectedCity} // Here is the change
            sx={{ width: '30%', mr: 3 }}
            onChange={(event, newValue) => setSelectedCity(newValue)}
            options={countryCodes}
            renderInput={params => (
              <TextField
                {...params}
                label='Country '
                placeholder='Your country'
                InputProps={{
                  ...params.InputProps
                  // startAdornment: (
                  //   <InputAdornment position='start'>
                  //     <Icon icon='mdi:map-marker' />
                  //   </InputAdornment>
                  // )
                }}
              />
            )}
          />
          <TextField
            fullWidth
            type='number'
            label='Phone No.'
            // defaultValue={cardData?.contactNumber}
            placeholder='Your phone no'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:phone' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
          {/* <PickersBasic popperPlacement='bottom-start' /> */}
          {/* <Box sx={{ mt: 5, mb: 5 }}> */}
          <JointerDatePicker
            onValidityStartDateChange={handleValidityStartDateChange}
            onValidityEndDateChange={handleValidityEndDateChange}
          />
          {/* </Box> */}
        </Grid>
        {/* <form onSubmit={e => e.preventDefault()}> */}
        <Grid container spacing={5}>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'end' }}>
            {/* <Button type='submit' variant='contained' size='large' onClick={handleCloseModal} sx={{ mr: 2 }}>
                Close
              </Button> */}
            <Button color='error' variant='contained' size='large' onClick={handleCloseModal} sx={{ mr: 2 }}>
              Close
            </Button>
            <Button type='submit' variant='contained' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
        {/* </form> */}
      </CardContent>
      <Box sx={{}}>
        {/* <img
          src='https://cdn3d.iconscout.com/3d/premium/thumb/cross-4122534-3411218.png?f=webp'
          height={40}
          width={40}
          style={{
            // color: 'red',
            position: 'absolute',
            bottom: 440,
            right: 140,
            cursor: 'pointer',

            border: '2px solid #fff'
          }}
          onClick={handleCloseModal}
        /> */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 100,
            right: 50,
            color: 'red'
          }}
          aria-label='edit'
          onClick={handleCloseModal}
          style={{ fontSize: '50px' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Card>
  )
}

export default RaiseTicketForms
