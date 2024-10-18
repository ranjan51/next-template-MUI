// TabularFormat.jsx
import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Box, Tooltip, Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomChip from 'src/@core/components/mui/chip'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Pagination from '@mui/material/Pagination'

const TabularFormat = ({ jointers, searchTerm, filter, handleEditClick }: any) => {


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

  // Filter jointers based on search term and status filter
  const filteredJointers = jointers.filter((jointer: any) => {
    return (
      jointer.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || jointer.status === filter)
    );
  });

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" >Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Effective From</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell> {/* New column for actions */}
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredJointers.map((jointer: any) => (
            <TableRow key={jointer.id}>
              <TableCell align="center">{jointer.name}</TableCell>
              <TableCell align="center">{jointer.contact}</TableCell>
              <TableCell align="center">{jointer.validityStartDate}</TableCell>
              <TableCell align="center"><Box sx={{ display: 'flex', justifyContent: 'center', mb: 2.7, mt: 2 }}>
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
                    textTransform: 'capitalize',
                    alignItems: 'center'
                  }}
                />
              </Box></TableCell>
              <TableCell align="center">
                {/* Action buttons */}
                <Tooltip title="Edit" arrow>
                  <IconButton color='primary' aria-label="edit" onClick={() => handleEditClick(jointer)}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Send Mail" arrow>
                  <IconButton style={{ color: '#545af5' }} aria-label="mail">
                    <MailIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View" arrow>
                  <IconButton style={{ color: '#76ABAE' }} aria-label='view'>
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" arrow>
                  <IconButton color='error' aria-label="delete" onClick={() => handleDeleteConfirmation(jointer)}>
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
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
        </TableBody>
      </Table>
      <Box style={{ display: 'flex', placeContent: 'flex-end', marginTop: '10px' }}>
        <Pagination count={10} shape='rounded' color='primary' />
      </Box>
    </>
  );
};

export default TabularFormat;
