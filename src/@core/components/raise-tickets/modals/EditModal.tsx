import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import FormLayoutsIcons from '../forms/TicketRaiseForms'

const EditModal = ({ open, onClose, cardData }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Ticket raise</DialogTitle>
      <DialogContent>
        <FormLayoutsIcons cardData={cardData} />
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={onClose}>Cancel</Button> */}
        {/* You may add a submit button or any other actions here */}
      </DialogActions>
    </Dialog>
  )
}

export default EditModal
