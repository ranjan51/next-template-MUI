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
import MenuItem from '@mui/material/MenuItem'
import PickersBasic from '../datePicker/TicketRaiseDatePicker'
import JointerDatePicker from '../datePicker/TicketRaiseDatePicker'

const citiesInIndia = ['Ranchi', 'Patna', 'Mumbai', 'Delhi', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad']
const internationalCompanies = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook', 'Samsung', 'Sony']

const FormLayoutsIcons = ({ cardData }: any) => {
  const [selectedCity, setSelectedCity] = React.useState<string | null>(cardData.location)
  const [selectedCompany, setSelectedCompany] = React.useState<string | null>(cardData.company)
  const handleValidityStartDateChange = (date: any) => {
    // setFormData({ ...formData, validityStartDate: date })
  }

  // Callback function to update form data with validity end date
  const handleValidityEndDateChange = (date: any) => {
    // setFormData({ ...formData, validityEndDate: date })
  }
  return (
    <Card sx={{ width: '540px', mt: 2 }}>
      <CardContent sx={{ width: '540px' }}>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <TextField
            fullWidth
            label='Ticket ID'
            disabled
            defaultValue={cardData.ticketId}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:ticket-account' />
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <Grid item xs={12} sx={{ mb: 5 }}>
          <TextField
            fullWidth
            label='Location'
            disabled
            defaultValue={cardData.location}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:map-marker' />{' '}
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <TextField
            fullWidth
            label='Company'
            disabled
            defaultValue={cardData.company}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:bag-personal' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            // type='email'
            disabled
            label='Contact name'
            placeholder='Your name'
            defaultValue={cardData.contactName}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:account-circle' />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type='number'
            disabled
            label='Phone No.'
            defaultValue={cardData.contactNumber}
            placeholder='+1-123-456-8790'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon icon='mdi:phone' />
                </InputAdornment>
              )
            }}
          />
        </Grid>

        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12} sx={{ mb: 5, ml: 5, mr: 5 }}>
              {/* <PickersBasic popperPlacement='bottom-start' /> */}
              {/* <Box sx={{ mt: 5, mb: 5 }}> */}
              <JointerDatePicker
                onValidityStartDateChange={handleValidityStartDateChange}
                onValidityEndDateChange={handleValidityEndDateChange}
              />
              {/* </Box> */}
            </Grid>
            {/* <Grid item xs={12}>
              <Button type='submit' variant='contained' size='large'>
                Close
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsIcons
