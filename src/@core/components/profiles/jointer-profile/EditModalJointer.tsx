import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const EditModal = ({ isOpen, onClose, jointer }:any) => {
  const handleClose = () => {
    onClose();
  };

  const handleSave = () => {
    // Implement your save logic here
    // You can access the jointer data and perform any necessary updates
    console.log('Saving changes for jointer:', jointer);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Update Jointer</DialogTitle>
      <DialogContent>
        <TextField
          label="Name"
          variant="outlined"
          defaultValue={jointer ? jointer.name : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          defaultValue={jointer ? jointer.phoneNumber : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Effective From"
          variant="outlined"
          defaultValue={jointer ? jointer.effectiveFrom : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Status"
          variant="outlined"
          defaultValue={jointer ? jointer.status : ''}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
