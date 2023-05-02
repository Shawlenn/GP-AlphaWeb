import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkeDInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon /> <FacebookIcon /> <LinkeDInIcon />
        </div>
        <p>&copy; 2023 A'vere.com</p>
    </div>
  )
}

export default Footer;