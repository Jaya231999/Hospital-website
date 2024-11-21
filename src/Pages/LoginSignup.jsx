import React from 'react'
import './Css/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder=' Enter Your Name'/>
          <input type="Email" placeholder='Enter Your Email Id'/>
          <input type="Password" placeholder='EnterYour Password'/>
        </div>
        <button>Continue</button>
       <p className="loginsignup-login">Already have an Account? <span>Login Here</span></p>    
       <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By Continuing, I agree To The Terms of Use & Privacy Policy.</p>
        </div>  
      </div>
    </div>
  )
}
export default LoginSignup
