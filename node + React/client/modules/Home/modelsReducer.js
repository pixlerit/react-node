import { LOAD_MODELS } from './actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case LOAD_MODELS:
            return [ ...state, ...action.payload ];
            
    }

    return state;
}