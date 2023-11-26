import React, {useState, useRef, useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { register } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,14}$/;
// pass#orD50

const Register = ({register}) => {
  // set formData state
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    // password: '',
    // re_password: '',
    email: '',
    user_type: '',
    language: ''
  })

  const [accountCreated, setAccountCreated] = useState(false) // redirect to login page if successful account created
  // const {first_name, last_name, username, password, re_password, email, user_type, language} = formData // destructure forData
  const {first_name, last_name, username, email, user_type, language} = formData

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);


  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])


  const onChangeUsername = e => setFormData({...formData, [e.target.name]: e.target.value.replace(/[^\w\s]/gi, "")})
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  const onSubmit = e => {
    e.preventDefault()
    register(first_name, last_name, username, pwd, matchPwd, email, user_type, language)
    setAccountCreated(true)

     // validate user-inputs for registration
    //  if (password === re_password) {
    //   register(first_name, last_name, username, password, re_password, email, user_type, language)
    //   setAccountCreated(true)
    // } 
    
  }





  return (
    <div className='container mt-5'>
      {accountCreated && <Navigate to='/login' replace/>}
      <h1>Register for an Account</h1>
      <p>Create an account with PreprLabs</p>
      <form onSubmit={onSubmit}>
        <CSRFToken/>
      <div className='form-group'>
          <label className='form-label mt-3'>First Name: </label>
          <input
            className='form-control'
            type='text'
            placeholder='First name'
            onChange={onChange}
            value={first_name}
            name='first_name'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Last Name: </label>
          <input
            className='form-control'
            type='text'
            placeholder='Last name'
            onChange={onChange}
            value={last_name}
            name='last_name'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Username: </label>
          <input
           
            className='form-control'
            type='text'
            placeholder='Username'
            onChange={onChangeUsername}
            value={username}
            name='username'
            required
          />
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Password: </label>
          <input
          
            className='form-control'
            type='password'
            placeholder='Password'
            onChange={(e) => setPwd(e.target.value)}
            aria-invalid={validPwd ? "false" : "true"}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
            value={pwd}
            name='password'
            minLength='6'
            required
          /> 
          {pwdFocus && !validPwd ? 
                <p>
                  8 to 24 characters.<br />
                  Must include uppercase and lowercase letters, a number and a special character.<br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
              : <p></p>
        }
        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Retype Password: </label>
          <input
            className='form-control'
            type='password'
            placeholder='Confirm password'
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            name='re_password'
            minLength='6'
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          {matchFocus && !validMatch ? <p>Must match the first password input field.</p> : <p></p>}

        </div>
        <div className='form-group'>
          <label className='form-label mt-3'>Email: </label>
          <input
            className='form-control'
            type='email'
            placeholder='Email'
            onChange={onChange}
            value={email}
            name='email'
            required
          />
        </div>
       <div className="form-floating my-4">
          <select required className="form-select" id="floatingSelect" aria-label="Floating label select example" name='user_type' onChange={onChange}>
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

        <div className="form-floating my-3">
          <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name='language' onChange={onChange}>
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

const mapStateToProps = state => (
  {
    isAuthenticated: state.auth.isAuthenticated
  }
)

export default connect(mapStateToProps, {register})(Register)