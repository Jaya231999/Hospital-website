import React from 'react'
import './Offers.css'
import offerimage from '../Assets/f5.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>EXCLUSIVE</h1>
            <h1>Offers For U</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={offerimage} alt=""/>
        </div>
    </div>
  )
}
