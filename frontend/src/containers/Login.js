import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const onChange = e => {}

  const onSubmit = e => {}

  return (
    <div className='container mt-5'>
      <h1>Sign In</h1>
      <p>Sign in to your Prepr Labs application</p>
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
        <button className='btn btn-primary mt-3' type='submit'>Sign In</button>
      </form>
      <p className='mt-3'>
        Don't have an account? <Link to={'/register'}>Register</Link>
      </p>
    </div>
  )
}

export default Login