import React, {useState, useRef, useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { register } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'
import logo from '../assets/logoNew.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,14}$/;
// pass#orD50 this password passes the REGEX

const Register = ({register}) => {
  // set formData state (passwords are handled separatly)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    user_type: '',
    language: ''
  })

  const [accountCreated, setAccountCreated] = useState(false) // redirect to login page if successful account created
  const {first_name, last_name, username, email, user_type, language} = formData

  // set password and matched password as separate states with validator and focus states
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // as user types, check password validity against REGEX and that passwords match
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])


  // validate username to not allow special characters
  const onChangeUsername = e => setFormData({...formData, [e.target.name]: e.target.value.replace(/[^\w\s]/gi, "")})
  // generic formData set values
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

  // submit valid data and set account created to true and redirect to login page
  const onSubmit = e => {
    e.preventDefault()
    register(first_name, last_name, username, pwd, matchPwd, email, user_type, language)
    setAccountCreated(true)    
  }

  return (
    <div className='container col-md-4 mt-5 bg-light p-5'>
      {accountCreated && <Navigate to='/login' replace/>}
      <div className='text-center'>
        <img src={logo} className='bg-white' alt='Prepr Logo'/>
      </div>
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
       <div className="form-floating my-3">
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
        <div className="d-grid gap-2 mb-3">
          <button className='btn btn-warning mt-3' type='submit'>Register</button>
        </div>
      </form>
      
      <div className="d-grid gap-2">
          <p className='my-0 text-center'>
            Or
          </p>
          <button className='btn btn-info mt-1' type='button'>
            <Link style={{textDecoration: 'none', color: 'black'}} to={'/login'}>Sign in with your Google account</Link>
          </button>
      </div>
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