import React, { useEffect } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { addClickedContact, fetchContacts } from '../Redux/Slices/ContactSlice';

export const Contacts = () => {
    const { contacts, status, error } = useSelector((state) => state.Contacts);
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("ContactList updated : "+JSON.stringify(contacts))
     },[contacts])
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchContacts());
        }
    }, []);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
   
    return (
        <Box sx={{width:{xs:'100%', md:"40%"}, height:"100vh",overflowY:"auto", display:"flex", alignContent:"center", flexDirection:"column" }}>
            <Typography varient="h4" gutterBottom sx={{padding:"22px 0px",textAlign:"center", backgroundColor:"whitesmoke", color:"black"}}>Contact List:</Typography>
            <List sx={{height:"85vh", overflowY:'auto', backgroundColor:"grey"}} >
                {contacts.map((item) => (
                    <ListItem key={item.id}
                              onClick={()=>dispatch(addClickedContact(item))}
                              sx={{
                                    margin:"3px 0px",border:"1px solid black",display:"flex",
                                    alignItems:"center", alignContent:"center",
                                    flexDirection:"column", 
                                    
                                   '&:hover':{backgroundColor:"blue", cursor:"pointer"}
                                }}>
                        {item.name} - ({item.address.house})
                    </ListItem>
                ))}
            </List>
            
        </Box>
    );
};
