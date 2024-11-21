import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.png'
import arrowicon from '../Assets/arrowicon.png'
import bannerimage from '../Assets/bannerimage.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
              <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand} alt=""/>
              </div>
              <p>Collections</p>
              <p>For EveryOne</p>
            </div>
            <div className="hero-last-btn">
                <div>Latest Collections</div>
                <img src={arrowicon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
             <img src={bannerimage} alt="" /> 
        </div>
    </div>
  )
}
