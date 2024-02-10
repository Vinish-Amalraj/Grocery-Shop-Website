import React from 'react'
import './Foot.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
const Foot = () => {
    
    const d = new Date();
    let year = d.getFullYear();
  return (
    <div className='total'>
        <div className='bg'>
            <h1>Get 20% Off Discount Coupon</h1>
            <h3>by New User</h3>
        </div>
        <div className='foot'>
            <div className='foot2'>
                <div className='foot3'>
                     <h2>About Us</h2>
                    <p>Secure paymet</p>
                    <p>Payment</p>
                    <p>Terms and Condition</p>
                </div>
                <div className='foot4'>
                    <h2>Contect Us</h2>
                    <p><FaPhoneAlt/> +91 0123456789</p>
                    <p> <IoMailOpenSharp /> abc@gmail.com</p>
                </div>
            </div>
                <div className='foot1'>
                <p>&copy;{ year} All rights reserved</p>
             </div>
         </div>
    </div>
  )
}

export default Foot