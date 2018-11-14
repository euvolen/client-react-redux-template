import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile, deleteAccount} from '../../../redux/actions/profile';
import Loading from '../../components/loading/Loading';



class Cabinet extends Component {

  componentDidMount(){
    this.props.getCurrentProfile()
  }
    onDelete(e){
      this.props.deleteAccount();
    }
  render() {
    const {user} = this.props.auth;
    const {profile,loading} = this.props.profile;
    let cabinetContent;

    if (profile ===null ||loading) {
      cabinetContent = <Loading/>
    } else {
        const firtsName = user.name.split(' ')[0]
    
        cabinetContent = (
            <div>
                 <h2 className="text-center text-uppercase text-white">Hi {firtsName} </h2>
                  <hr className="star-light mb-5"/>
                  <div className="text-center mt-4">
            <Link className="btn btn-xl btn-outline-light" to='/profile' >
              <i className="fas fa-user mr-2"></i>
              Update profile
            </Link>      
            <button className="btn btn-xl btn-outline-light danger" onClick={this.onDelete.bind(this)} >
              <i className="fas fa-trash mr-2"></i>
              Delete account!
            </button>
          </div>
          </div>)
     
      
    }
    return (
        <section className="bg-primary text-white mb-0" id="about">
        <div className="container">
        <br />
         {cabinetContent}
        </div>
      </section>
    )
  }
}
Cabinet.propTypes ={
  getCurrentProfile:PropTypes.func.isRequired,
  deleteAccount:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
  profile:PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  profile:state.profile,
  auth:state.auth
})
export default connect(mapStateToProps, {getCurrentProfile, deleteAccount})(Cabinet)


