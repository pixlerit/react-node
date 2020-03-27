import {IS_LOADER_COMPLETED, IS_LOADER_INITIAL } from './actionTypes';
export default function(state = {}, action) {
    switch(action.type) {
        case IS_LOADER_COMPLETED:
            return { ...state, isLoadingCompleted:action.payload };
        case IS_LOADER_INITIAL:
            return { ...state, isLoadingCompleted:action.payload };
        
    }
    return state;
}