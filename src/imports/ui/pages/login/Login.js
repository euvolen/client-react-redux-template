import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';
import autoBind from 'react-autobind';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      err: {}
    };

    autoBind(this);
  }


  componentWillReceiveProps(nextProps) {
 
    if (nextProps.errors) {
      this.setState({ err: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.login(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { err } = this.state;
    
    return (
      <section id="login">
      <div className="container">
         
          <hr className="star-dark mb-5"/>
              <div className="row">
                  <div className="col-lg-8 mx-auto">
                  <h1 className="display-4 text-center">Login</h1>
                  <p className="lead text-center">
                      Login your account
                  </p>
                  <form noValidate onSubmit={this.onSubmit}>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Email Address</label>
                                    <input className="form-control"  type="email" 
                                        value={this.state.email}
                                        onChange={this.onChange} 
                                        placeholder="Email Address" 
                                        name="email"/>
                                    <p className="help-block text-danger">{err.email}</p>
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
                                    <p className="help-block text-danger">{err.password}</p>
                                    </div>
                                </div>
                           
                              
                                <br/>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-xl">Login</button>
                                </div>
                                </form>
                  </div>
              </div>
  </div>
</section>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { login })(Login);
