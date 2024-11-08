import React, { useEffect } from 'react'
import { Box, Button } from '@mui/material'
import { deleteContact, updateContact } from '../Redux/Slices/ContactSlice'
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpdateContactForm = () => {
    const { clickedContact } = useSelector((state) => state.Contacts)
    const dispatch = useDispatch();

    const [name, setName] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [houseNo, setHouseNo] = React.useState('')
    const [city, setCity] = React.useState('')
    const [zipCode, setZipCode] = React.useState('')

    useEffect(() => {
      setName(clickedContact?.name || '');
      setPhone(clickedContact?.phone || '');
      setEmail(clickedContact?.email || '');
      setHouseNo(clickedContact.address?.house || '');
      setCity(clickedContact.address?.city || '');
      setZipCode(clickedContact.address?.zipcode || '');
    }, [clickedContact]);

    const handleUpdateContact = async() => {
        const updatedContact = {
           id: clickedContact.id,
           name: name,
           email: email,
           phone: phone,
           address: {
               house: houseNo,
               city: city,
               zipcode: zipCode
           }
        }
        dispatch(updateContact(updatedContact))
        toast.success('Contact Data is updated!!');
     }
    const handleDeleteContact=()=>{
      dispatch(deleteContact(clickedContact.id))
      toast.dark("Contact delete !")
    }
  return (
    <Box sx={{
        display: "flex",
        width: "100%",
        overflowY: 'auto',
        height:'80vh',
        paddingTop:"20px",
        flexDirection: "column",
        alignItems:'center',
      }}>
        <TextField sx={{width: {xs: '100%', md: '50%'}}} value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <TextField sx={{width: {xs: '100%', md: '50%', margin: '5px 0px'}}} value={phone} placeholder='Phone No.' onChange={(e) => setPhone(e.target.value)} />
        <TextField sx={{width: {xs: '100%', md: '50%'}}} value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        
        <h3>Address</h3>
        <TextField sx={{width: {xs: '100%', md: '50%'}}} value={houseNo} placeholder='House No.' onChange={(e) => setHouseNo(e.target.value)} />
        <TextField sx={{width: {xs: '100%', md: '50%', margin: '5px 0px'}}} value={city} placeholder='City' onChange={(e) => setCity(e.target.value)} />
        <TextField sx={{width: {xs: '100%', md: '50%'}}} value={zipCode} placeholder='Zip Code' onChange={(e) => setZipCode(e.target.value)} />

        <Box sx={{display: "flex", justifyContent: 'space-between', marginTop: "3px", width: {xs: '100%', md: '50%'}}}>
          <Button variant="outlined" onClick={handleDeleteContact} sx={{color:"red"}}>Delete</Button>
          <Button variant="outlined" onClick={handleUpdateContact}>Update</Button>
        </Box>
    </Box>
  )
}
