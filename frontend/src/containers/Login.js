/* global gapi */
import React, {useState, useEffect} from 'react'
import {Link, Navigate} from 'react-router-dom'
import {connect} from 'react-redux'
import { login } from '../actions/auth'
import CSRFToken from '../components/CSRFToken'
// import GoogleLoginButton from '../components/GoogleLoginButton'
import axios from 'axios'
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

// useEffect(() => {
//   const googleLogin = async (accesstoken) => {
//     let res = await axios.post(
//       "http://localhost:8000/rest-auth/google/",
//       {
//         access_token: accesstoken,
//       }
//     );
//     console.log(res);
//     return await res.status;
//   };
//   googleLogin()
// }, [])

// const [ user, setUser ] = useState([]);
// const [ profile, setProfile ] = useState([]);

// const loginG = useGoogleLogin({
//     onSuccess: (codeResponse) => setUser(codeResponse),
//     onError: (error) => console.log('Login Failed:', error)
// });
// const logOut = () => {
//   googleLogout();
//   setProfile(null);
// };

// useEffect(
//     () =>  {
//         if (user) {
//             //  axios
//                 // .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
//                 //     headers: {
//                 //         Authorization: `Bearer ${user.access_token}`,
//                 //         Accept: 'application/json'
//                 //     }
//                 // })
//                 axios.post(
//                   "http://localhost:8000/accounts/google/login/callback/",
//                   // {
//                   //   access_token: accesstoken,
//                   // }
//                   {headers: {
//                             Authorization: `Bearer ${user.access_token}`,
//                             Accept: 'application/json'
//                         }
//                     }
//                 )
//                 .then((res) => {
//                     setProfile(res.data);
//                 })
//                 .catch((err) => console.log(err));
//         }
//     },
//     [ user ]
// );
// function onSignIn(googleUser) {
//   var profile = googleUser.getBasicProfile();
//   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//   console.log('Name: ' + profile.getName());
//   console.log('Image URL: ' + profile.getImageUrl());
//   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

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


// useEffect(() => {
//   // const { gapi } = window;
//   window.gapi.signin2.render('g-signin2', {
//     'scope': 'https://www.googleapis.com/auth/plus.login',
//     'width': 200,
//     'height': 50,
//     'longtitle': true,
//     'theme': 'dark',
//     'onsuccess': onSignIn
//   })
// })

  return (
    <div className='container mt-5'>
      {isAuthenticated ? <Navigate to='/user' replace/> : <Navigate to='/login' replace/>}
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
        <button className='btn btn-primary mt-3' type='submit'>Sign In</button>
      </form>
      <p className='mt-3'>
        Don't have an account? <Link to={'/register'}>Register</Link>
      </p>
      <p>or</p>
      <div>
        {/* <GoogleLoginButton /> */}
        <div>
            {/* <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button onClick={() => loginG()}>Sign in with Google 🚀 </button>
            )} */}
            {/* <div id="g-signin2"
             data-onsuccess={onSignIn}
             >
             
              Login with Google</div> */}

{/* <div id="g_id_onload"
         data-client_id="454535805235-s1rr1nmnbh9kb8ttjh172cncocgoilkl.apps.googleusercontent.com"
         data-callback={onSignIn}>
    </div>
    <div class="g_id_signin" data-type="standard"></div> */}
<GoogleLogin
// onClick={onSignIn}
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    onSignIn(credentialResponse)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
{isSocialLoginSuccess ? <Navigate to='/SSOUser' replace/> : <p>Unsucessful social login</p>}


        </div>
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