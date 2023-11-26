import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="454535805235-s1rr1nmnbh9kb8ttjh172cncocgoilkl.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </GoogleOAuthProvider>
 
);

