import React, {useState} from 'react'
import logo from '../assets/logoNew.png'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'

import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const Login = ({login, isAuthenticated}) => {
  // get user inputs from form
  const [formData, setFormData] = useState({
    login_input: '',
    password: ''
  })

  const {login_input, password} = formData // destructure formData

  const onChange = e => setFormData({...formData, [e.target.name]:e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    login(login_input, password)
  }

  // Google Sign in Functionality from the Google Sign On Migration site
  const [isSocialLoginSuccess, setIsSocialLoginSuccess] = useState(false)
  function decodeJwtResponse(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  }
  function onSignIn(response) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    const responsePayload = decodeJwtResponse(response.credential);

    console.log("ID: " + responsePayload.sub);
    console.log('Full Name: ' + responsePayload.name);
    console.log('Given Name: ' + responsePayload.given_name);
    console.log('Family Name: ' + responsePayload.family_name);
    console.log("Image URL: " + responsePayload.picture);
    console.log("Email: " + responsePayload.email);
    setIsSocialLoginSuccess(true)
  }

  return (
    <div className='container mt-5 bg-light w-50 p-5'>
      {isAuthenticated ? <Navigate to='/user' replace/> : <Navigate to='/login' replace/>}
      <div className='text-center'>
        <img src={logo} className='bg-white' alt='Prepr Logo'/>
      </div>
      <h1>Sign In</h1>
      <p>Sign in to your Prepr Labs application</p>
      <form onSubmit={onSubmit}>
        <CSRFToken />
        <div className='form-group'>
          <label className='form-label mt-3'>Login with your username or email: </label>
          <input
            className='form-control'
            type='text'
            placeholder='username or email'
            onChange={onChange}
            value={login_input}
            name='login_input'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Password: </label>
          <input
            className='form-control'
            type='password'
            placeholder='password'
            onChange={onChange}
            value={password}
            name='password'
            minLength='6'
            required
          />
        </div>
        <div className="d-grid gap-2 mb-3">
          <button className='btn btn-warning mt-3' type='submit'>Sign In</button>
        </div>
      </form>
      
      <div>
        <div >
          <p>or</p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              onSignIn(credentialResponse)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
          {isSocialLoginSuccess ? <Navigate to='/SSOUser' replace/> : <p></p>}
        </div>

        <p className='mt-0'>
          Don't have an account? <Link to={'/register'}>Register</Link>
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => (
  {
    isAuthenticated: state.auth.isAuthenticated
  }
)

export default connect(mapStateToProps, {login})(Login)