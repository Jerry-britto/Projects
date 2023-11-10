import React from 'react'
import './footer.css'
import amz from './amazon_PNG25.png'
const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <footer>
        <div className='footer_container'>
            <div className='footr_details_one'>
                <h3>Get to know us</h3>
                <p>About us</p>
                <p>Career</p>
                <p>Press Release</p>
                <p>Amazon Cares</p>
            </div>
            <div className='footer_details_one'>
                <h3>Contact with us</h3>
                <p>FaceBook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='footer_details_one forres'>
                <h3>Make Money wih us</h3>
                <p>FaceBook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div className='footer_details_one forres'>
                <h3>Make Money wih us</h3>
                <p>FaceBook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
        </div>
        <div className='lastdetails'>
            <img src={amz} alt='amazon logo'/>
            <p>Conditions of Use and Sale       Privacy Notice         Interest-Based Ads   {year}</p>
        </div>
    </footer>
  )
}

export default Footer
