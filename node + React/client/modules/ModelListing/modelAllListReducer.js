import { LOAD_ALL_MODEL_LIST } from './actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case LOAD_ALL_MODEL_LIST:
        
            state= [];
            return [ ...state, ...action.payload ];
            
    }

    return state;
}