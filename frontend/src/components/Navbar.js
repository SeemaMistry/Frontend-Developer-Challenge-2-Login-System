import React from 'react'
import logo from '../assets/logoNew.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top" >
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logo} alt='Prepr Logo'/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="nav-link">Explore</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" >Dashboard</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" >My Challenges</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" >My Labs</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" >Career Explorer</button>
                    </li>
                </ul>
                <div style={{fontSize: '25px'}}>
                    <i className={`bi bi-bell-fill mx-2`}></i>
                    <i className={`bi bi-chat-left-fill mx-2`}></i>
                    <i className={`bi bi-question-circle-fill mx-2`}></i>
                </div>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div style={{fontSize: '25px'}}>
                    <i className={`bi bi-person-square mx-2`}></i>
                    <i className={`bi bi-grid-3x3-gap-fill mx-2`}></i>
                </div>
                </div>
            </div>
        </nav>
      )
}

export default Navbar