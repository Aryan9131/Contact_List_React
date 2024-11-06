import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact } from '../Redux/Slices/ContactSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export default function AddContactDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [name, setName]=React.useState("")
  const [phone, setPhone]=React.useState("")
  const [email, setEmail]=React.useState("")
  const [houseNo, setHouseNo]=React.useState("")
  const [city, setCity]=React.useState("")
  const [zipCode, setZipCode]=React.useState("")
  const dispatch=useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAddContact=async ()=>{
     const newContact={
        name:name,
        email:email,
        phone:phone,
        address:{
            house:houseNo,
            city:city,
            zipcode:zipCode
        }
     }
     // Dispatch the async thunk with the new contact details
     dispatch(addContact(newContact))
     .then(() => {
       // Close the dialog on successful dispatch
       toast.success('Contact Added !');
       setOpen(false);
     })
     .catch((error) => {
        toast.error("Error while Adding Contact !")
     });
  }
  return (
    <React.Fragment>
      <Button variant="filled" sx={{border:'1px solid white', marginRight:'5px'}} onClick={handleClickOpen}>
        Add Contact
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add Contact"}
        </DialogTitle>
        <DialogContent sx={{display:"flex", flexDirection:"column"}}>
            <TextField placeholder='Name' onChange={(e)=>setName(e.target.value)}></TextField>
            <TextField placeholder='Phone No.' onChange={(e)=>setPhone(e.target.value)} sx={{margin:'5px 0px'}}></TextField>
            <TextField placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></TextField>
             <h3>Address</h3>
            <TextField placeholder='House No.' onChange={(e)=>setHouseNo(e.target.value)}></TextField>
            <TextField placeholder='City' onChange={(e)=>setCity(e.target.value)} sx={{margin:'5px 0px'}}></TextField>
            <TextField placeholder='Zip Code' onChange={(e)=>setZipCode(e.target.value)}></TextField>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddContact} autoFocus>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
