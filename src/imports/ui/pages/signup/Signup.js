import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../../redux/actions/auth';
import autoBind from 'react-autobind';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmed_password: '',
      err: {}
    };

   autoBind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ err: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      confirmed_password: this.state.confirmed_password
    };

    this.props.signup(newUser, this.props.history);
  }

  render() {
    const { err } = this.state;

    return (
        <section id="sigup">
                <div className="container">
                   
                    <hr className="star-dark mb-5"/>
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">
                                Create your account
                            </p>
                                <form noValidate onSubmit={this.onSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input className="form-control"  type="text"  
                                        value={this.state.name}
                                        onChange={this.onChange} 
                                        placeholder="Name"  
                                        name="name"/>
                                     {err.name && (<div className="invalid-feedback">{err.name}</div>)}    
                                    <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control"  type="email" 
                                        value={this.state.email}
                                        onChange={this.onChange} 
                                        placeholder="Email Address" 
                                        name="email"/>
                                        {err.email && (<div className="invalid-feedback">{err.email}</div>)}    
                                    <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Password</label>
                                    <input className="form-control"   type="password" 
                                        value={this.state.password}
                                        onChange={this.onChange} 
                                        placeholder="Password" 
                                        name="password"
                                        err={err.password} />
                                        {err.password && (<div className="invalid-feedback">{err.confirmed_password}</div>)}    
                                    <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Confirm Password</label>
                                    <input className="form-control" type="password" 
                                    value={this.state.confirmed_password}
                                    onChange={this.onChange} 
                                    placeholder= {err.confirmed_password ? err.confirmed_password: "Confirm password"}  
                                    name="confirmed_password"/>                                    
                                    <p className="help-block text-danger"></p>                                 
                                    </div>
                                </div>
                              
                                <br/>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-xl">Register</button>
                                </div>
                                </form>
                            </div>
                        </div>
            </div>
    </section>
         
    );
  }
}

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { signup })(withRouter(Signup));
