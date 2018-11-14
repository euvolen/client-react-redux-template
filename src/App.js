import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import { setCurrentUser, logout } from './imports/redux/actions/auth';
import { setClearProfile } from './imports/redux/actions/profile';
import jwt_decode from 'jwt-decode';
import settingToken from './imports/utils/settingToken'

import Landing from './imports/ui/pages/landing/Landing';
import Navigation from './imports/ui/components/navigation/Navigation';
import Footer from './imports/ui/components/footer/Footer';
import Signup from './imports/ui/pages/signup/Signup';
import Login from './imports/ui/pages/login/Login';
import Private from './imports/ui/components/private/Private';
import Cabinet from './imports/ui/pages/cabinet/Cabinet';
import Public from './imports/ui/components/public/Public';
import NotFound from './imports/ui/pages/not-found/NotFound';
import Logout from './imports/ui/components/logout/Logout';
import Profile from './imports/ui/pages/profile/Profile';


if (localStorage.jwtToken) {

  settingToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    store.dispatch(logout());
    store.dispatch(setClearProfile());
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <div className="App">
            <Navigation/>
                <Switch>
                <Public exact path="/" component={Landing}/> 
                <Public exact path="/signup" component={Signup}/> 
                <Public exact path="/login" component={Login}/>    
                <Private exact path="/cabinet" component={Cabinet}/>
                <Private exact path="/profile" component={Profile}/>
                <Private exact path="/logout" component={Logout}/>
                <Route component={NotFound}/>
              </Switch>
            <Footer/>
          </div> 
        </Router>      
      </Provider>
    );
  }
}

export default App;
