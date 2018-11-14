import axios from 'axios';
import settingToken from '../../utils/settingToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';

// Register User
export const signup = (userData, history) => dispatch => {
  axios
    .post('/api/users/signup', userData)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const login = userData => dispatch => {
  axios
    .post('/api/users/login', userData)
    .then(res => {
    
      const { token } = res.data;
   
      localStorage.setItem('jwtToken', token);
 
      settingToken(token);

      const decoded = jwt_decode(token);

      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};


export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  settingToken(false);
  dispatch(setCurrentUser({}));
};
