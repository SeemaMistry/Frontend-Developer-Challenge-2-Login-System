import React from 'react'
import {Link, Navigate} from 'react-router-dom'

const Register = () => {
  const accountCreated = false
  const onChange = e => {}

  const onSubmit = e => {}

  return (
    <div className='container mt-5'>
      {accountCreated && <Navigate to='/login' replace/>}
      <h1>Register for an Account</h1>
      <p>Create an account with PreprLabs</p>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label className='form-label mt-3'>Username: </label>
          <input
            className='form-control'
            type='text'
            placeholder='username'
            onChange={onChange}
            // value={username}
            name='username'
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
            // value={password}
            name='password'
            minLength='6'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Retype Password: </label>
          <input
            className='form-control'
            type='password'
            placeholder='confirm password'
            onChange={onChange}
            // value={re_password}
            name='re_password'
            minLength='6'
            required
          />
        </div>
        <button className='btn btn-primary mt-3' type='submit'>Register</button>
      </form>
      <p className='mt-3'>
        Already have an account? <Link to={'/login'}>Sign In</Link>
      </p>
    </div>
  )
}

export default Register