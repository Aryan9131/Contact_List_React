import React, { useEffect } from 'react'
import {Box, Typography} from '@mui/material'
import AddContactDialog from './AddContactDialog'
import { useSelector } from 'react-redux'
import { UpdateContactForm } from './UpdateContactForm'


export const ModifyList = () => {
    const {clickedContact}=useSelector((state)=>state.Contacts);
  return (
    <Box sx={{width:{xs:'100%', md:"60vw"}, backgroundColor:'whitesmoke'}}>
        <Box sx={{height:"50px", backgroundColor:"green", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
            <Typography variant="h6" gutterBottom sx={{marginLeft:'5px'}}>
                Contacts Book
            </Typography>
            <AddContactDialog/>
        </Box>
         <Box sx={{ display:"flex",alignItems:"center", justifyContent:"center"}}>
            {
               clickedContact
               ?
               <UpdateContactForm/>
               :
               <Typography variant="h5" gutterBottom sx={{marginLeft:'5px', marginTop:"20px", color:'black'}}>
                    Select a Contact to Update and See details.
               </Typography>
            }
         </Box>
    </Box>
  )
}
