import { useState } from 'react'




import Nav from './components/Nav.jsx';


import Profile from './components/Profile.jsx';
import './App.css'
import Footer from './components/Footer.jsx';

function Appp() {
  const [count, setCount] = useState(0)

  return (
    <>

<Nav/>

<Profile/>
<Footer/>
    </>
  )
}

export default Appp

