import React from 'react'
import './account.css'
const Register = ({ setcurrNO }) => {
  return (
    <>
      <div className='outerRegisterComponent'>
        <div className='heading'>Create an account</div>
        <form>
          <div className='inputs'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <div className='check'>
              <input type='checkbox' id='check' />
              <label htmlFor='check'>
                By proceeding, I agree to all <a href='/'>T&C</a> and{' '}
                <a href='/'>Privacy Policy</a>
              </label>
            </div>
          </div>
          <button className='regButton' onClick={() => setcurrNO(4)}>
            Create an Account
          </button>
        </form>
        <div className='or'>
          <p>or</p>
        </div>
        <div className='alterReg'>
          <div className='sites'>
            <div className='img'>
              <img
                width='40'
                height='40'
                src='https://img.icons8.com/fluency/48/google-logo.png'
                alt='google-logo'
              />
            </div>
            <div className='img'>
              <img
                width='40'
                height='40'
                src='https://img.icons8.com/fluency/48/meta.png'
                alt='meta'
              />
            </div>
          </div>
          <p>
            Already have an account? <a onClick={() => setcurrNO(3)}>Login</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Register
