import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions/auth';
import { setClearProfile } from '../../../redux/actions/profile';
import Loading from '../loading/Loading';

class Logout extends Component {
  componentDidMount(){
    this.props.setClearProfile()
    this.props.logout();
  }  

  render() {
    return (
      <div>
        <Loading/>
      </div>
    )
  }
}

Logout.propTypes = {
    auth: PropTypes.object.isRequired,
    logout:PropTypes.func.isRequired,
    setClearProfile:PropTypes.func.isRequired
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });  
export default connect(mapStateToProps, {logout, setClearProfile})(Logout)