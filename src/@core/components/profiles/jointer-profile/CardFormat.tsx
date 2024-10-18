import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, IconButton, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomChip from 'src/@core/components/mui/chip';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Pagination from '@mui/material/Pagination'

const CardFormat = ({ jointers, searchTerm, filter, handleEditClick }: any) => {

  const mailtoHref = 'mailto:support@example.com?subject=SendMail&body=Description';
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [deleteJointer, setDeleteJointer] = useState(null);

  const handleDeleteConfirmation = (jointer: any) => {
    setDeleteJointer(jointer);
    setOpenDeleteDialog(true);
  };

  const handleDeleteConfirmed = () => {
    // Implement your delete logic here
    console.log("Deleting:", deleteJointer);
    setOpenDeleteDialog(false);
  };

  const handleDeleteCanceled = () => {
    setOpenDeleteDialog(false);
  };

  const handleMailClick = () => {
    window.location.href = mailtoHref;
  };

  // Filter jointers based on search term and status filter
  const filteredJointers = jointers.filter((jointer: any) => {
    return (
      jointer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || jointer.status === filter)
    );
  });

  return (
    <div >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', }}>
        {filteredJointers.map((jointer: any, index: any) => (
          <Card
            key={jointer.id}
            sx={{ width: '250px', marginBottom: '20px', marginRight: index !== filteredJointers.length - 1 ? '30px' : '0', marginLeft: '35px' }}
          >
            <CardContent>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0, display: 'flex', flexDirection: 'column' }}>
                  <Tooltip title="Edit" arrow>
                    <IconButton color='primary' aria-label='edit' onClick={() => handleEditClick(jointer)}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Send Mail" arrow>
                    <IconButton style={{ color: '#545af5' }} aria-label='mail' onClick={handleMailClick}>
                      <MailIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View" arrow>
                    <IconButton style={{ color: '#76ABAE' }} aria-label='view'>
                      <RemoveRedEyeIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" arrow>
                    <IconButton color='error' aria-label='delete' onClick={() => handleDeleteConfirmation(jointer)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>

                </Box>
              </Box>
              <img src={jointer.image} alt="Jointer" style={{ width: '50%', marginBottom: '16px', borderRadius: '8px' }} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <Typography variant='body1' sx={{ fontWeight: 'bold', mb: 2 }}>
                  {jointer.name}
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 1 }}>
                {jointer.contact}
              </Typography>
              <Typography variant='body2' sx={{ mb: 1 }}>
                {jointer.validityStartDate}
              </Typography>
              <Box sx={{ display: 'flex', mb: 2.7, mt: 2 }}>
                <CustomChip
                  skin='light'
                  size='small'
                  label={jointer.status}

                  color={jointer.status == 'Active' ? 'success' : 'warning'}
                  sx={{
                    height: 20,
                    fontWeight: 500,
                    fontSize: '0.75rem',
                    borderRadius: '5px',
                    textTransform: 'capitalize'
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        ))}

        <Dialog
          open={openDeleteDialog}
          onClose={handleDeleteCanceled}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Are you sure you want to delete this jointer?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDeleteCanceled} color="primary">Cancel</Button>
            <Button onClick={handleDeleteConfirmed} color="error" autoFocus>Confirm</Button>
          </DialogActions>
        </Dialog>

      </Box>
      <Box style={{ display: 'flex', placeContent: 'flex-end', marginTop: '10px' }}>
        <Pagination count={10} shape='rounded' color='primary' />
      </Box>
    </div>
  );
};

export default CardFormat;
