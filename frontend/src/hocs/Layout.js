import React from 'react'
import Navbar from '../components/Navbar'


const Layout = ({children}) => {
  return (
    <>
        <Navbar>
            {children}
        </Navbar>
    </>
  )
}

export default Layout