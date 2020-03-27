import { LOAD_CATEGORIES, LOAD_MODELS } from './actionTypes';
import axios from 'axios';
import Config from '../../../server/config';



export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
'/api';


export function loadCategories() {
    
    return function(dispatch) {

        axios.get(`${API_URL}/category`)
            .then(response => {
                debugger;
            dispatch({ type: LOAD_CATEGORIES, payload:response.data.categories});
            dispatch({ type: LOAD_MODELS, payload:response.data.models});
             
            })
            .catch(err => console.log('error',err));

    }
}