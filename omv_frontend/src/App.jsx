

import { useState } from 'react'

import React from 'react';
import {Routes ,Route} from 'react-router-dom';

import Login from './pages/Login.jsx'; // ✅ adjust the path if needed
import Home from './pages/Home.jsx';

import Nav from './components/Nav.jsx';

import Profile from './components/Profile.jsx';
import './App.css'
import Footer from './components/Footer.jsx';
import EmailVerify from './pages/EmailVerify.jsx';

import Academic from './pages/Academic.jsx';
import Skill from './pages/Skill.jsx';
import Notes from './pages/Notes.jsx';
import Practice from './pages/Practice.jsx';
import Appp from './Appp.jsx';
import { ToastContainer } from 'react-toastify';

import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
<Routes>
  <Route path = '/' element = {<Appp/>}/>
  <Route path = '/login' element ={<Login/>}/>
  <Route path = '/email-verify' element ={<EmailVerify/>}/>
  
<Route path ='/notes' element = {<Notes/>}/>
  <Route path ='/academic' element = {<Academic/>}/>
  <Route path ='/skill' element = {<Skill/>}/>
  <Route path ='/practice' element = {<Practice/>}/>
</Routes>
    </>
  )
}

export default App;
