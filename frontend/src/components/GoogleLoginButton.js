import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <>
      <GoogleLogin
      clientId="454535805235-s1rr1nmnbh9kb8ttjh172cncocgoilkl.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  </>
  )
}

export default GoogleLoginButton