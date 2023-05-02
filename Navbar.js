import React, { useState } from 'react'
import Logo from '../assets/TheWebsiteLogo.jpg'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
  return (
    <div className='navbar'>
        <div className='leftSide'>
            <img src={Logo} />
        </div>
        <div className='rightSide'>
        <Link to='/'> Home </Link>
        <Link to='/product'> Product </Link>
        <Link to='/about'> About </Link>
        <Link to='/contact'> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar;