import { CHANGE_AUTH, AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './actionTypes';
import Config from '../../../server/config';
import axios from 'axios';
import { browserHistory } from 'react-router';
import $ from 'jquery';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
  process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
  '/api';

export function authenticate(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
}

export function signinUser(values) {

    console.log(values);
     return function(dispatch) {
      axios.post(`${API_URL}/users/signIn`,{email:values.email, password:values.password})
        .then(response => {
            //update state to indicate that user is authenticated
        
            dispatch({ type: AUTH_USER});
            //save the jwt token
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);
    
            browserHistory.push('/Home');

        })
        .catch((err) =>{
            console.log('response.err', err);
           // If request is bad
           //show an error to the user
           dispatch(authError('Bad Login Info'));
        })
        
      }

}
export function signupUser(values) {
    return function(dispatch) {
       axios.post(`${API_URL}/users/signUp`,{email:values.email, password:values.password})
       .then(response =>{
           dispatch({type: AUTH_USER});
           localStorage.setItem('token', response.data.token);
           localStorage.setItem('userId', response.data.userId);
    
           browserHistory.push('/Home');
       })
       .catch(response => dispatch(authError(response.data.error)));
    }
}
export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}
export function signinGoogle() {
    return function(dispatch) {
        

        dispatch({type: AUTH_USER});
        window.location.assign("http://localhost:8000/auth/google/");
        
    
    }
}
export function authFacebook() {
    return function(dispatch) {
        

        dispatch({type: AUTH_USER});
        window.location.assign("http://localhost:8000/auth/facebook/");
        
    
    }
}
export function signoutUser() {
    localStorage.removeItem('token');
    
    return { type: UNAUTH_USER };
}