import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createProfile, getCurrentProfile} from '../../../redux/actions/profile'
import autoBind from 'react-autobind';

 class Profile extends Component {
    constructor(props){
        super (props)
        this.state={
            handle:'',
            err:{},            
        }
        autoBind(this);
    }
    componentDidMount(){
        this.props.getCurrentProfile();
    }
   onSubmit(e){

      e.preventDefault()
      const profileData ={
        handle:this.state.handle,
       }
       this.props.createProfile(profileData, this.props.history)
       
   } 
   componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({err:nextProps.errors});
    }
    if(nextProps.profile.profile){
        const {profile} = nextProps.profile
   
        this.setState({
            handle:profile.handle,
        })
    }
   }
   onChange(e){
       this.setState({[e.target.name]:e.target.value})       
    } 
    render() {
      const {err}= this.state;
   
    return (
        <section id="contact">
        <div className="container">
           
            <hr className="star-dark mb-5"/>
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                    <h1 className="display-4 text-center">Profile</h1>
                 
                    <form noValidate onSubmit={this.onSubmit}>
                                  <div className="control-group">
                                      <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                      <label>Handle</label>
                                      <input className="form-control"  type="text" 
                                          placeholder ="Profile handle"
                                          name="handle"
                                          value={this.state.handle}
                                          onChange={this.onChange}/>
                                      <p className="help-block text-danger">{err.handle}</p>
                                      </div>
                                  </div>
                                  <br/>
                                  <div className="form-group">
                                      <button type="submit" className="btn btn-primary btn-xl">Update profile</button>
                                  </div>
                                  </form>
                    </div>
                </div>
    </div>
  </section>
    )
  }
}
Profile.propTypes={
    profile:PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    createProfile:PropTypes.func.isRequired,
    getCurrentProfile:PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    profile:state.profile,
    errors:state.errors,
  
})
export default connect(mapStateToProps, {createProfile, getCurrentProfile} )(withRouter(Profile));
