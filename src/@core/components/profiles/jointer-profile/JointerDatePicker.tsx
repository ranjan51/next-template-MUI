// ** React Imports
import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CustomInput from './PickersCustomInput';
import { DateType } from 'src/types/forms/reactDatepickerTypes';

const JointerDatePicker = ({
  onValidityStartDateChange,
  onValidityEndDateChange
}: {
  onValidityStartDateChange: any;
  onValidityEndDateChange: any;
}) => {
  const [startDate, setStartDate] = useState<DateType>(new Date());
  const [endDate, setEndDate] = useState<DateType>(new Date());

  const handleStartDateChange = (date: DateType) => {
    setStartDate(date);
    onValidityStartDateChange(date); // Callback to update form data with validity start date
  };

  const handleEndDateChange = (date: DateType) => {
    setEndDate(date);
    onValidityEndDateChange(date); // Callback to update form data with validity end date
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} className='dateWidth'>
        <Grid item xs={12} md={6}>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            placeholderText='Click to select a date'
            customInput={<CustomInput label='Validity Start Date' />
            }
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            placeholderText='Click to select a date'
            customInput={<CustomInput label='Validity End Date' />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default JointerDatePicker;
