import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Contacts} from './Components/ContactList'
import {ModifyList} from './Components/ModifyList'
import {Box} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Box sx={{width:"100vw",display:"flex", flexDirection:{xs:'column', md:'row'}}}>
       <ToastContainer />
      <ModifyList/>
      <Contacts/>
    </Box>
  )
}

export default App
