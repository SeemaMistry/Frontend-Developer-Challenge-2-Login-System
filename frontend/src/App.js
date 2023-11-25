import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './hocs/Layout'
import Login from './containers/Login'
import Register from './containers/Register'
import User from './containers/User'

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
