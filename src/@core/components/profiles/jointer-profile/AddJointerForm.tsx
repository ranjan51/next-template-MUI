import React, { useEffect, useState } from 'react';
import { Box, TextField, MenuItem, FormControl, FormLabel, Select, Button, Typography, InputLabel, SelectChangeEvent, Grid, IconButton, Card, CardContent } from '@mui/material';
import FileUploaderRestrictions from './FileUploaderRestrictions';
import JointerDatePicker from './JointerDatePicker';
import CloseIcon from '@mui/icons-material/Close';

const AddJointerForm = ({ onCancel, jointer, isEditModalOpen }: any) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        designation: '',
        vendorName: '',
        aadharCard: '',
        contact: '',
        email: '',
        expertiseType: '',
        expertiseLevel: '',
        validityStartDate: null,
        validityEndDate: null,
        status: '',
        image: null,
    });


    useEffect(() => {
        if (jointer) {
            setFormData(jointer);
        }
    }, [jointer]);

    const [selectedExpertiseType, setSelectedExpertiseType] = useState<string>('');
    const expertiseTypeOptions = ['High-Level', 'Low-Level'];
    const handleExpertiseTypeChange = (option: string) => {
        setSelectedExpertiseType(option);
        setFormData({ ...formData, expertiseType: option });
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleExpertiseLevelChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value; // The value is already of type string
        setFormData({ ...formData, expertiseLevel: value });
    };

    const handleStatusChange = (event: SelectChangeEvent<string>) => {
        const value = event.target.value; // The value is already of type string
        setFormData({ ...formData, status: value });
    };


    // Callback function to update form data with validity start date
    const handleValidityStartDateChange = (date: any) => {
        setFormData({ ...formData, validityStartDate: date });
    };

    // Callback function to update form data with validity end date
    const handleValidityEndDateChange = (date: any) => {
        setFormData({ ...formData, validityEndDate: date });
    };


    const handleSubmit = () => {
        // Handle form submission
        console.log(formData);
    };

    // Function to update the formData with the uploaded file
    const updateFormDataWithImage = (newFormData: any) => {
        setFormData({ ...formData, image: newFormData.get('image') });
    };

    return (
        <>
            <Card sx={{ width: { xs: '%', sm: '65%', md: '75%', lg: '100%' }, mt: 0 }}>
                <CardContent sx={{ width: { xs: '%', sm: '65%', md: '75%', lg: '100%' } }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <Typography variant="h5" gutterBottom>{isEditModalOpen ? 'Update Jointer' : 'Add Jointer'} </Typography>
                            <IconButton onClick={onCancel} sx={{ color: 'red' }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>

                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <TextField
                                    name="id"
                                    label="Raychem Id"
                                    variant="outlined"
                                    value={formData.id}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    error={formData.name.length > 100}
                                    helperText={formData.name.length > 100 ? 'Name should be maximum 100 characters' : ''}
                                    inputProps={{ maxLength: 100 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <TextField
                                    name="designation"
                                    label="Designation"
                                    variant="outlined"
                                    value={formData.designation}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ maxLength: 200 }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="vendorName"
                                    label="Vendor Name"
                                    variant="outlined"
                                    value={formData.vendorName}
                                    onChange={handleChange}
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ maxLength: 100 }}
                                />
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={6}>
                                <TextField
                                    name="aadharCard"
                                    label="Aadhar Card"
                                    variant="outlined"
                                    value={formData.aadharCard}
                                    onChange={handleChange}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="contact"
                                    label="Contact"
                                    variant="outlined"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    type="number"
                                    fullWidth
                                    margin="normal"
                                    inputProps={{ maxLength: 100 }}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            name="email"
                            label="Email-Id"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />

                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} sm={6}>
                                <Grid item sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <FormLabel component="legend" sx={{ mr: 5 }}>Select Expertise Type :</FormLabel>
                                    {expertiseTypeOptions.map((option: string) => (
                                        <Grid item key={option}>
                                            <Box
                                                sx={{
                                                    border: '1px solid #ccc',
                                                    borderRadius: '5px',
                                                    padding: '8px',
                                                    cursor: 'pointer',

                                                    backgroundColor: selectedExpertiseType === option ? '#787EFF' : 'transparent',
                                                    mr: '8px',
                                                    width: { xs: '5rem', sm: '8rem' },
                                                    height: { xs: '4rem', sm: '3.2rem' },
                                                }}
                                                onClick={() => handleExpertiseTypeChange(option)}
                                            >
                                                <Typography sx={{ color: selectedExpertiseType === option ? 'white' : '' }}>
                                                    {option}
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth variant="outlined" margin="normal">
                                    <InputLabel id="expertise-level-label">Expertise Level</InputLabel>
                                    <Select
                                        labelId="expertise-level-label"
                                        id="expertise-level"
                                        value={formData.expertiseLevel}
                                        onChange={handleExpertiseLevelChange}
                                        label="Expertise Level"
                                    >
                                        <MenuItem value="Level 1">Level 1</MenuItem>
                                        <MenuItem value="Level 2">Level 2</MenuItem>
                                        <MenuItem value="Level 3">Level 3</MenuItem>
                                        <MenuItem value="Level 4">Level 4</MenuItem>
                                        <MenuItem value="Level 5">Level 5</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Box mt={5}>
                            <JointerDatePicker
                                onValidityStartDateChange={handleValidityStartDateChange}
                                onValidityEndDateChange={handleValidityEndDateChange}
                            />
                        </Box>

                        <FormControl fullWidth variant="outlined" margin="normal" sx={{ mb: 4 }}>
                            <InputLabel id="status-label">Status of Jointer</InputLabel>
                            <Select
                                labelId="status-label"
                                id="status"
                                value={formData.status}
                                onChange={handleStatusChange}
                                label="Status of Jointer"
                            >
                                <MenuItem value="Available">Available</MenuItem>
                                <MenuItem value="Unavailable">Unavailable</MenuItem>
                            </Select>
                        </FormControl>

                        <label htmlFor="icon-button-file">
                            <Typography variant="body2" display="block" sx={{ mb: 3 }}>Upload Image</Typography>
                            <FileUploaderRestrictions formData={formData} onUpdateFormData={updateFormDataWithImage} />
                        </label>
                    </Box>
                    <Box style={{ display: 'flex', placeContent: 'flex-end', marginTop: '10px' }}>
                        <Button variant="contained" color="secondary" onClick={onCancel} sx={{ mt: 2, mr: 2, height: 'auto' }}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2, height: 'auto' }}>
                            {isEditModalOpen ? 'Update' : 'Submit'}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
};

export default AddJointerForm;


