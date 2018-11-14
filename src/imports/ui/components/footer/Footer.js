import React from 'react'
import {product} from '../../../configs/data'
import {currentYear} from '../../../utils/dates'

const copyright = () => {  
  return currentYear() === product.copyrightStart ? product.copyrightStart : `${product.copyrightStart} - ${currentYear()}`
}

const  Footer = () => {
  return (
    <div>
       <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">{product.location}</p>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Social</h4>
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href={product.facebook}>
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href={product.google}>
                  <i className="fab fa-fw fa-google-plus-g"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href={product.twitter}>
                  <i className="fab fa-fw fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href={product.patreon}>
                  <i className="fab fa-fw fa-patreon"></i>
                </a>
              </li>
             </ul>
          </div>
          <div className="col-md-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">About me</h4>
            
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a className="btn btn-outline-light btn-social text-center rounded-circle" href="https://www.facebook.com/eugene.volen">
                  <i className="fab fa-fw fa-facebook-f"></i>
                </a>
              </li>
             </ul>
             </div>
        </div>
      </div>
    </footer>

    <div className="copyright py-4 text-center text-white">
      <div className="container">
        <small>Copyright &copy; {copyright()} {product.name}</small>
      </div>
    </div>
    </div>
  )
}

Footer.propTypes = {

}

export default Footer;

