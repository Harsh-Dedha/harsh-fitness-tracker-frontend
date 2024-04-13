import React from 'react'
import './login.css'
const Login = ({ setcurrNO }) => {
  return (
    <>
      <div className='outerLoginComponent'>
        <div className='heading'>Welcome Back</div>
        <form>
          <div className='inputs login'>
            <input type='email' placeholder='Email' />
            <input type='password' placeholder='Password' />
            <div className='check'>Forgot your password?</div>
          </div>
          <button className='regButton' onClick={() => setcurrNO(4)}>
            Sign In
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
            Don’t have an account yet?{' '}
            <a onClick={() => setcurrNO(2)}>Create an account</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
