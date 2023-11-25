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
          <label className='form-label mt-3'>First Name: </label>
          <input
            className='form-control'
            type='text'
            placeholder='First Name'
            onChange={onChange}
            // value={firstName}
            name='firstName'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Last Name: </label>
          <input
            className='form-control'
            type='text'
            placeholder='Last Name'
            onChange={onChange}
            // value={lastName}
            name='lastName'
            required
          />
        </div>
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
        <div className='form-group'>
          <label className='form-label mt-3'>Email: </label>
          <input
            className='form-control'
            type='email'
            placeholder='email'
            onChange={onChange}
            // value={email}
            name='email'
            required
          />
        </div>
  {/* TODO: set proper inputs then commit these select option dropdowns to git */}
       <div className="form-floating my-3">
          <select required className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Select user type</option>
            <option value='Learner'>Learner</option>
            <option value='Job Seeker / Applicant'>Job Seeker / Applicant</option>
            <option value='Employee'>Employee</option>
            <option value='Founder'>Founder</option>
            <option value='Educator'>Educator</option>
            <option value='Mentor'>Mentor</option>
          </select>
          <label for="floatingSelect">Required</label>
        </div>

        <div className="form-floating">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Select a language</option>
            <option value='English'>English</option>
            <option value='French'>French</option>
          </select>
          <label for="floatingSelect">Optional</label>
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