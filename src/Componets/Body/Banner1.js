import React from 'react'
import "./Banner1.css"
import { IoIosArrowForward } from "react-icons/io";
import Vegetable from "./vegetable.png"
const Banner1 = () => {
  return (
    <div className='banner'>
        <div className='b1'>
            <h2>FRESH GROCERY</h2>
            <h1>There's you can buy<br></br>your all of Grocery<br></br>
            products</h1>
            <button>Shop <IoIosArrowForward size={20}/></button>
        </div>
        <div className='b2'>
            <img src={Vegetable} alt='vegetable'></img>
        </div>
    </div>
  )
}

export default Banner1