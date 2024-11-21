import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers For Your Email</h1>
        <p>Subscribe to our NewLetter and stay updated</p>
        <div>
            <input type="Email" placeholder='Enter your Email Id'/>
           <button>Subscribe</button>
        </div>
    </div>
  )
}
