import axios from 'axios';
import {GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE, SET_CURRENT_USER} from './types';

//Get current profile

export const getCurrentProfile = () => dispatch =>{
    dispatch(setProfileLoading());
    axios.get('/api/profile')
    .then(res =>dispatch({type:GET_PROFILE,payload:res.data}))
    .catch(err =>dispatch({type:GET_PROFILE,payload:{}}))
}


//Get current profile by handle

export const getCurrentProfileByHandle = (handle) => dispatch =>{
    dispatch(setProfileLoading());
    axios.get(`/api/profile/handle/${handle}`)
    .then(res =>dispatch({type:GET_PROFILE,payload:res.data}))
    .catch(err =>dispatch({type:GET_PROFILE,payload:null}))
}


//Create profile

export const createProfile = (profileDate, history) => dispatch =>{

    axios.post('/api/profile',profileDate)
    .then(res =>history.push('/cabinet'))
    .catch(err=>dispatch({type:GET_ERRORS,payload:err.response.data}))

}



// Delete Account and user
export const deleteAccount = () => dispatch =>{
if(window.confirm("Are you sure? This can not be undone")){
    axios
        .delete('/api/profile')
        .then(res => {
            dispatch({type: SET_CURRENT_USER,payload: {}});
            localStorage.removeItem('jwtToken');
        })
        .catch(err=>
            dispatch({type:GET_ERRORS,payload:err.response.data}))
}
}

//Profile loading
export const setProfileLoading = () =>{
    return {
        type: PROFILE_LOADING
    }
}

//Clear profile
export const setClearProfile = () =>{
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}

