
import React, { useState } from 'react';
import { Box, IconButton, TextField, MenuItem, Fab } from '@mui/material';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import ListIcon from '@mui/icons-material/List';
import TabularFormat from 'src/@core/components/profiles/jointer-profile/TabularFormat';
import CardFormat from 'src/@core/components/profiles/jointer-profile/CardFormat';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import AddJointerForm from 'src/@core/components/profiles/jointer-profile/AddJointerForm';

const JointerProfile = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'table'
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedJointer, setSelectedJointer] = useState(null);
  const [showForm, setShowForm] = useState<boolean>(false)
  const [jointers, setJointers] = useState<any>([
    {
      id: 'RC001',
      name: 'John Doe',
      designation: 'Engineer',
      vendorName: 'ABC Company',
      aadharCard: '1234 5678 9012',
      contact: '123-456-7890',
      email: 'john@example.com',
      expertiseType: 'HT',
      expertiseLevel: 'Level 3',
      validityStartDate: '2024-04-01',
      validityEndDate: '2025-04-01',
      status: 'Active',
      image: '/images/rpg-images/profile-avatar-3.jpg',
    },
    {
      id: 'RC002',
      name: 'Jane Smith',
      designation: 'Technician',
      vendorName: 'XYZ Corporation',
      aadharCard: '9876 5432 1098',
      contact: '987-654-3210',
      email: 'jane@example.com',
      expertiseType: 'LT',
      expertiseLevel: 'Level 2',
      validityStartDate: '2024-05-01',
      validityEndDate: '2025-05-01',
      status: 'Inactive',
      image: '/images/rpg-images/profile-avatar.jpg',
    },
    {
      id: 'RC003',
      name: 'Jenny M',
      designation: 'Electrician',
      vendorName: 'PQR Enterprises',
      aadharCard: '5678 9012 3456',
      contact: '987-654-3210',
      email: 'jenny@example.com',
      expertiseType: 'HT',
      expertiseLevel: 'Level 4',
      validityStartDate: '2024-05-01',
      validityEndDate: '2025-05-01',
      status: 'Inactive',
      image: '/images/rpg-images/profile-avatar-2.jpg',
    },
    {
      id: 'RC004',
      name: 'Ranjan Kishor',
      designation: 'Electrician',
      vendorName: 'LMN Ltd.',
      aadharCard: '4321 0987 6543',
      contact: '987-654-3210',
      email: 'ranjan@example.com',
      expertiseType: 'HT',
      expertiseLevel: 'Level 2',
      validityStartDate: '2024-05-01',
      validityEndDate: '2025-05-01',
      status: 'Inactive',
      image: '/images/rpg-images/profile-avatar-3.jpg',
    },
    {
      id: 'RC005',
      name: 'Nandan K',
      designation: 'Engineer',
      vendorName: 'GHI Solutions',
      aadharCard: '6789 0123 4567',
      contact: '987-654-3210',
      email: 'nandan@example.com',
      expertiseType: 'LT',
      expertiseLevel: 'Level 5',
      validityStartDate: '2024-05-01',
      validityEndDate: '2025-05-01',
      status: 'Inactive',
      image: '/images/rpg-images/profile-avatar.jpg',
    },
    {
      id: 'RC006',
      name: 'Rihanna',
      designation: 'Technician',
      vendorName: 'STU Solutions',
      aadharCard: '8901 2345 6789',
      contact: '987-654-3210',
      email: 'rihanna@example.com',
      expertiseType: 'HT',
      expertiseLevel: 'Level 3',
      validityStartDate: '2024-05-01',
      validityEndDate: '2025-05-01',
      status: 'Inactive',
      image: '/images/rpg-images/profile-avatar-2.jpg',
    },
  ]);

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: any) => {
    setFilter(event.target.value);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'card' ? 'table' : 'card');
  };

  const handleEditClick = (jointer: any) => {
    setSelectedJointer(jointer);
    setIsEditModalOpen(true);
  };

  const handleSaveModal = (updatedJointer: any) => {
    const updatedJointers = jointers.map((item: any) =>
      item.id === updatedJointer.id ? { ...item, ...updatedJointer } : item
    );
    setJointers(updatedJointers);
    setIsEditModalOpen(false);
  };

  const showJointerForm = () => {
    // Implement logic to open a modal for adding a new jointer
    setShowForm(true);
    console.log('Add Jointer button clicked');
  };
  const hideJointerForm = () => {
    // Implement logic to open a modal for adding a new jointer
    setShowForm(false);
    console.log('Add Jointer button clicked');
  };

  return (
    <>
        {isEditModalOpen ? (
            <AddJointerForm jointer={selectedJointer} onSave={handleSaveModal} onCancel={() => setIsEditModalOpen(false)} isEditModalOpen={isEditModalOpen}/>
        ) : showForm ? (
            <AddJointerForm onCancel={hideJointerForm} />
        ) : (
            <>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '20px', marginLeft: '35px' }}>
                    <TextField
                        label="Search Jointers"
                        variant="outlined"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        sx={{ marginRight: '10px', width: '69%' }}
                    />
                    <TextField
                        select
                        label="Filter"
                        variant="outlined"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Active">Active</MenuItem>
                        <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                    <IconButton color='primary' aria-label='toggle-view-mode' onClick={toggleViewMode}>
                        {viewMode === 'card' ? <WindowOutlinedIcon sx={{ height: "30px", width: '30px', ml: '10px' }} /> : <ListIcon sx={{ height: "30px", width: '30px', ml: '10px' }} />}
                    </IconButton>
                </Box>

                {viewMode === 'table' ? (
                    <TabularFormat jointers={jointers} searchTerm={searchTerm} filter={filter} handleEditClick={handleEditClick} />
                ) : (
                    <CardFormat jointers={jointers} searchTerm={searchTerm} filter={filter} handleEditClick={handleEditClick} />
                )}

                <Box sx={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    <Fab color="primary" aria-label="add" onClick={showJointerForm}>
                        <PersonAddAlt1OutlinedIcon />
                    </Fab>
                </Box>
            </>
        )}
    </>
);
};

export default JointerProfile;

