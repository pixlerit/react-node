import { LOAD_CATEGORIES } from './actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case LOAD_CATEGORIES:
            state = [];
            return [ ...state, ...action.payload ];
            
    }

    return state;
}