import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings flexCenter innerWidth f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="Logo" width={120} />
                <span className="secondaryText">
                    Our vision to make all people <br/>
                    the best place to live for them. 
                </span>
            </div>
            <div className="f-right flexColStart">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>Chennai, TamilNadu, India </span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer