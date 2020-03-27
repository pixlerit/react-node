import { LOAD_MODEL_LIST,LOAD_MORE_MODELS } from './actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case LOAD_MODEL_LIST:
        
            state= [];
            return [ ...state, ...action.payload ];
        case LOAD_MORE_MODELS:
            
            return [ ...state, ...action.payload ];
            
    }

    return state;
}