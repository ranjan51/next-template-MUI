// ** React Imports
import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import CustomInput from './PickersCustomInput'
import { DateType } from 'src/types/forms/reactDatepickerTypes'

const JointerDatePicker = ({
  onValidityStartDateChange,
  onValidityEndDateChange
}: {
  onValidityStartDateChange: any
  onValidityEndDateChange: any
}) => {
  const [startDate, setStartDate] = useState<DateType>(new Date())
  const [endDate, setEndDate] = useState<DateType>(new Date())

  const handleStartDateChange = (date: DateType) => {
    setStartDate(date)
    onValidityStartDateChange(date) // Callback to update form data with validity start date
  }

  const handleEndDateChange = (date: DateType) => {
    setEndDate(date)
    onValidityEndDateChange(date) // Callback to update form data with validity end date
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            showTimeInput
            timeInputLabel='Time:'
            dateFormat='MM/dd/yyyy h:mm aa'
            placeholderText='Click to select a date and time'
            customInput={<CustomInput label='Jointing start date and time' />}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default JointerDatePicker
