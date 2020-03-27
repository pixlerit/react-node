import { BRAND_LIST } from './actionTypes';

export default function(state = [], action) {

    switch (action.type) {

        case BRAND_LIST:
        
            state = [];
            return [ ...state, ...action.payload ];
            
    }

    return state;
}