import React from 'react'
import "./Banner2.css"
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoReload } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { BsAward } from "react-icons/bs";

function Banner2() {
  return (
    <div className='Box'>
        <div className='box1'>
            <LiaShippingFastSolid size={40}/>
            <h2>Free Shiping</h2>
        </div>
        <div className='box2'>
            <IoReload size={40}/>
            <h2>Free Return</h2>
        
        </div>
        <div className='box3'>
            <MdSecurity size={40}/>
            <h2>Secure Payment</h2>
        
        </div>
        <div className='box4'>
            <BsAward size={40}/>
            <h2>Best Quality</h2>
        </div>
            
    </div>
  )
}

export default Banner2