import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Layout from './hocs/Layout'
import Login from './components/Login'
import Register from './components/Register'
import User from './components/User'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/login' Component={Login}></Route>
          <Route exact path='/register' Component={Register}></Route>
          <Route exact path='/user' Component={User}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
