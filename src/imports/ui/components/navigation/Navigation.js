import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PrivateNav from './PrivateNav';
import PublicNav from './PublicNav';


class Navigation extends Component {


  render() {
    const { isAuthenticated, user } = this.props.auth;

    return (
      <nav className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav">
      <div className="container">
        <Link className="navbar-brand js-scroll-trigger" to="/">Boilerplate</Link>
        <button className="navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        {isAuthenticated ? <PrivateNav user={user.name}/>:<PublicNav/>}  
      </div>
    </nav>
    )
  }
}
Navigation.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Navigation);