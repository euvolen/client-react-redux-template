import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

 const PrivateNav = ({user}) => {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item mx-0 mx-lg-1">
        <p className="nav-link py-3 px-0 px-lg-3 text-light">{user}</p>
    </li> 
       <li className="nav-item mx-0 mx-lg-1">
        <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/logout">Logout</Link>
      </li>      
    </ul>
  </div>
  )
}
PrivateNav.propTypes ={
    user: PropTypes.string.isRequired
}
export default PrivateNav;