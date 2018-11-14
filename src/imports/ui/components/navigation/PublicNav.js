import React from 'react'
import {Link} from 'react-router-dom'


const PublicNav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
       <li className="nav-item mx-0 mx-lg-1">
        <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/login">Login</Link>
      </li>
      <li className="nav-item mx-0 mx-lg-1">
        <Link className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to="/signup">Signin</Link>
      </li>
    </ul>
  </div>
  )
}
export default PublicNav;