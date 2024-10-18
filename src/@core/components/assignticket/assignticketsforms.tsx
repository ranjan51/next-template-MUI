import { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'
import Icon from 'src/@core/components/icon'
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { Box, Typography, useMediaQuery } from '@mui/material'
import PickersTime from './pickers/PickersTime'
import 'react-datepicker/dist/react-datepicker.css'
import PickersBasic from './pickers/PickersBasic'
import { color } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close'

const level = ['1', '2', '3', '4', '5']
const internationalCompanies = ['112', '233', '234', '543', '234']

const AssignTicketsForm = ({ cardData, setFormvisible }: any) => {
  const [expertiseOption, setExpertiseOption] = useState<string | number>()
  const [expertiseSubOption, setExpertiseSubOption] = useState<string | number>()
  const [jobTypeOption, setJobTypeOption] = useState('')
  const [selectedCity, setSelectedCity] = React.useState<string | null>(cardData?.location)
  const [selectedCompany, setSelectedCompany] = React.useState<string | null>(cardData?.company)

  const handleExpertiseOptionChange = (option: string) => {
    setExpertiseOption(option)
  }

  const handleJobTypeOptionChange = (option: string) => {
    setJobTypeOption(option)
  }

  const handleOptionABChange = (option: any) => {
    setExpertiseSubOption(option)
  }

  const [formData, setFormData] = useState({
    selectedDate: null,
    selectedDateTime: null,
    expertiseLevel: '',
    expertiseType: '',
    jobtype: '',
    jointer: '',
    raychem: '',
    TselectedDate: '',
    TselectedDateTime: '',
    Jointertype: '',
    sitecode: ''
    // Add other form fields as needed
  })

  const handleDateChange = (date: any) => {
    setFormData({
      ...formData,
      selectedDate: date
    })
  }

  const handleOptionChange = (event: any, value: any) => {
    setFormData({
      ...formData
    })
  }

  const handleCheckboxChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.checked
    })
  }

  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down('sm'))

  return (
    <Card sx={{ maxWidth: '100%', mt: 2 }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid container spacing={3} justifyContent='center' alignItems='center'>
            <Grid item xs={12} marginLeft={'3rem'} marginRight={'2rem'}>
              <Grid
                item
                xs={12}
                container
                justifyContent='space-between'
                alignItems='center'
                sx={{ borderBottom: '1px dotted #ccc' }}
              >
                <Typography
                  variant='h5'
                  gutterBottom
                  sx={{
                    color: '#333',
                    display: 'flex',
                    alignItems: 'center',
                    mb: '1rem',
                    mt: '0.5rem'
                  }}
                >
                  T-12345678
                </Typography>
                <CloseIcon
                  color='error'
                  onClick={() => {
                    setFormvisible(false)
                  }}
                />
              </Grid>

              <Grid container spacing={3} sx={{ mt: '0.5rem' }}>
                <Grid item xs={12} md={6}>
                  <PickersBasic popperPlacement={'auto-start'} />
                </Grid>
                <Grid item xs={12} md={6}>
                  <PickersTime popperPlacement={'auto-start'} />
                </Grid>
                <Grid item xs={12} sx={{ mt: '1rem' }}>
                  <Autocomplete
                    fullWidth
                    value={selectedCity}
                    onChange={(event, newValue) => setSelectedCity(newValue)}
                    options={level}
                    renderInput={params => (
                      <TextField
                        {...params}
                        label='Expertise level'
                        placeholder='Expertise level'
                        InputProps={{
                          ...params.InputProps,
                          startAdornment: <InputAdornment position='start'></InputAdornment>
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expertise type :</Typography>
                  <Grid container spacing={2} sx={{ mt: '0.5rem' }}>
                    {['High-Level', 'Low-Level'].map(option => (
                      <Grid item key={option}>
                        <Box
                          sx={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '8px',
                            cursor: 'pointer',
                            backgroundColor: expertiseOption === option.toLowerCase() ? '#787EFF' : 'transparent',
                            width: isSmallScreen ? '100%' : '200px'
                          }}
                          onClick={() => handleExpertiseOptionChange(option.toLowerCase())}
                        >
                          <Typography sx={{ color: expertiseOption === option.toLowerCase() ? 'white' : '' }}>
                            {option}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Job Type :</Typography>
                  <Grid container spacing={2} sx={{ mt: '0.5rem', justifyContent: 'center', alignItems: 'center' }}>
                    {['Supervision', 'Jointing'].map(option => (
                      <Grid item key={option}>
                        <Box
                          sx={{
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            padding: '8px',
                            cursor: 'pointer',
                            backgroundColor: jobTypeOption === option.toLowerCase() ? '#787EFF' : 'transparent',
                            width: isSmallScreen ? '100%' : '200px' // Adjust the widths as needed
                          }}
                          onClick={() => handleJobTypeOptionChange(option.toLowerCase())}
                        >
                          <Typography sx={{ color: jobTypeOption === option.toLowerCase() ? 'white' : '' }}>
                            {option}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* Jointer Details */}

            <Grid item xs={12} sx={{ mt: '2rem', ml: '3rem', mr: '2rem' }}>
              <fieldset style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '16px' }}>
                <legend> Ticket Details</legend>

                <Grid container spacing={3} sx={{ mt: '0.5rem' }}>
                  {/* Autocomplete for Ticket ID */}
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                      <Autocomplete
                        fullWidth
                        value={selectedCompany}
                        onChange={(event, newValue) => setSelectedCompany(newValue)}
                        options={internationalCompanies}
                        renderInput={params => (
                          <TextField
                            {...params}
                            sx={{ ml: '1rem' }}
                            label='Jointer'
                            defaultValue={cardData?.company}
                            placeholder='Jointer'
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: <InputAdornment position='start'></InputAdornment>
                            }}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        sx={{ ml: '2.5rem' }}
                        label='Raychem ID'
                        placeholder='Raychem ID'
                        variant='outlined'
                        fullWidth
                        // Add any other props or event handlers you need, such as onChange
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PickersTime popperPlacement={'auto-start'} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <PickersBasic popperPlacement={'auto-start'} />
                  </Grid>
                  {/* Expertise Options */}
                  <Grid item xs={12}>
                    <Typography gutterBottom sx={{ mb: '1rem' }}>
                      Type of Jointer :
                    </Typography>
                    <Grid container spacing={2}>
                      {['Option A', 'Option B'].map(option => (
                        <Grid item key={option}>
                          <Box
                            sx={{
                              border: '1px solid #ccc',
                              borderRadius: '5px',
                              padding: '8px',
                              cursor: 'pointer',
                              width: isSmallScreen ? '100%' : '200px',
                              backgroundColor: expertiseOption === option.toLowerCase() ? '#787EFF' : 'transparent'
                            }}
                            onClick={() => handleExpertiseOptionChange(option.toLowerCase())}
                          >
                            <Typography sx={{ color: expertiseOption === option.toLowerCase() ? 'white' : '' }}>
                              {option}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                  {/* Sub Options */}
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      {expertiseOption === 'option a' &&
                        [1, 2, 3].map(option => (
                          <Grid item key={option}>
                            <Box
                              sx={{
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '8px',
                                cursor: 'pointer',
                                width: isSmallScreen ? '100%' : '200px',
                                backgroundColor: expertiseSubOption === option ? '#787EFF' : 'transparent'
                              }}
                              onClick={() => handleOptionABChange(option)}
                            >
                              <Typography sx={{ color: expertiseSubOption === option ? 'white' : '' }}>
                                Option {option}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      {expertiseOption === 'option b' &&
                        [4, 5, 6].map(option => (
                          <Grid item key={option}>
                            <Box
                              sx={{
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '8px',
                                cursor: 'pointer',
                                width: isSmallScreen ? '100%' : '200px',
                                backgroundColor: expertiseSubOption === option ? '#787EFF' : 'transparent'
                              }}
                              onClick={() => handleOptionABChange(option)}
                            >
                              <Typography sx={{ color: expertiseSubOption === option ? 'white' : '' }}>
                                Option {option}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    {/* <Typography gutterBottom sx={{ mb: '0.5rem' }}>
                      Site Code :
                    </Typography> */}
                    <TextField
                      sx={{ mt: '0.5rem' }}
                      label='Site Code'
                      placeholder='Site Code'
                      variant='outlined'
                      fullWidth
                      // Add any other props or event handlers you need, such as onChange
                    />
                  </Grid>
                  {/* Buttons */}
                  <Grid item xs={12} container justifyContent='end' marginTop={'1rem'}>
                    <Button
                      onClick={() => {
                        setFormvisible(false)
                      }}
                      variant='contained'
                      color='error'
                      size='large'
                      sx={{ marginRight: '1rem' }}
                    >
                      Cancel
                    </Button>
                    <Button type='submit' variant='contained' size='large'>
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </fieldset>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default AssignTicketsForm
