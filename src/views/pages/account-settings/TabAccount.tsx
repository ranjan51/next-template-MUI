

import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'



interface Data {
  email: string
  state: string
  address: string
  country: string
  role: string
  currency: string
  language: string
  timezone: string
  fullName: string
  organization: string
  number: number | string
  zipCode: number | string
}

const initialData: Data = {
  state: '',
  number: '',
  address: '',
  zipCode: '',
  role: 'Jointer',
  currency: 'usd',
  fullName: 'John',
  language: 'arabic',
  timezone: 'gmt-12',
  country: 'australia',
  email: 'john.doe@example.com',
  organization: 'Pixinvent'
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const TabAccount = () => {

  const [formData, setFormData] = useState<Data>(initialData)

  // const [imgSrc, setImgSrc] = useState<string>('/images/avatars/gender-neutral-avatar.png')


  const handleFormChange = (field: keyof Data, value: Data[keyof Data]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Account Details' />
          <form>
            <CardContent sx={{ pt: 0 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ImgStyled src={'/images/avatars/gender-neutral-avatar.png'} alt='Profile Pic' />
              </Box>
            </CardContent>
            <Divider />
            <CardContent>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Fullname'
                    value={formData.fullName}
                    onChange={e => handleFormChange('fullName', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Role'
                    value={formData.role}
                    onChange={e => handleFormChange('role', e.target.value)}
                    disabled
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='email'
                    label='Email'
                    value={formData.email}
                    onChange={e => handleFormChange('email', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type='number'
                    label='Phone Number'
                    value={formData.number}
                    onChange={e => handleFormChange('number', e.target.value)}
                    InputProps={{ startAdornment: <InputAdornment position='start'>In (+91)</InputAdornment> }}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='Address'
                    value={formData.address}
                    onChange={e => handleFormChange('address', e.target.value)}
                  />
                </Grid> */}

                <Grid item xs={12}>
                  <Button variant='contained' sx={{ mr: 3 }}>
                    Save Changes
                  </Button>
                  <Button type='reset' variant='outlined' color='secondary' onClick={() => setFormData(initialData)}>
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>

    </Grid>
  )
}

export default TabAccount
