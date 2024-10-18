import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import FormLayoutsIcons from '../forms/viewTicketRaiseForm'
import UserViewLeft from './ViewModalPopup'

const ViewModal = ({ open, onClose, cardData }: any) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* <DialogTitle>Ticket raise</DialogTitle> */}
      {/* <DialogContent> */}
      {/* <FormLayoutsIcons cardData={cardData} /> */}
      <UserViewLeft cardData={cardData} onClose={onClose} />
      {/* <FormLayoutsIcons cardData={cardData} /> */}

      {/* </DialogContent> */}
      {/* <DialogActions> */}
      {/* <Button type='submit' variant='contained' onClick={onClose}>
        Close
      </Button> */}
      {/* You may add a submit button or any other actions here */}
      {/* </DialogActions> */}
    </Dialog>
  )
}

export default ViewModal
