import { CALCULATE_COUNT_MODEL,CALCULATE_CURRENT_COUNT_MODEL } from './actionTypes';

export default function(state = {}, action) {

    switch (action.type) {

        case CALCULATE_COUNT_MODEL:
            return {count: action.payload.count, currentCount: action.payload.currentCount}

        case CALCULATE_CURRENT_COUNT_MODEL:

            return {...state, currentCount: action.payload.currentCount};
  
            
    }

    return state;
}