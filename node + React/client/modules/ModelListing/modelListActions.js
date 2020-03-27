import { LOAD_MODEL_LIST,BRAND_LIST,LOAD_MORE_MODELS,IS_LOADER_INITIAL,IS_LOADER_COMPLETED, LOAD_ALL_MODEL_LIST, CALCULATE_COUNT_MODEL,CALCULATE_CURRENT_COUNT_MODEL} from './actionTypes';
import { LOAD_MODELS } from '../Home/actionTypes';

import axios from 'axios';
import Config from '../../../server/config';
import _ from 'lodash';
import { setTimeout } from 'timers';





export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
'/api';


export function loadModels(categoryId) {
    return function(dispatch) {
    
        axios.get(`${API_URL}/category/getAllModelsNew/${categoryId}`)
            .then(response => {
                dispatch({ type: LOAD_ALL_MODEL_LIST, payload:response.data.myModels});
                
                var result1 = _.take(response.data.myModels, 20);  
                const countObj = { count: response.data.myModels.length, currentCount: result1.length };
                dispatch({ type: CALCULATE_COUNT_MODEL, payload:countObj});
                dispatch({ type: LOAD_MODEL_LIST, payload:result1});
                dispatch({ type: BRAND_LIST, payload:response.data.allBrand});
              
                localStorage.setItem('brandIds', JSON.stringify(response.data.brandIds));
             
            })
            .catch(err => console.log('error',err));

    }
}
export function loadModelsBySub(catObj) {
    return function(dispatch) {
        const {catId, subCatId} = catObj;
        axios.get(`${API_URL}/category/getAllModelsNewBySub/${catId}/${subCatId}`)
            .then(response => {
                dispatch({ type: LOAD_ALL_MODEL_LIST, payload:response.data.myModels});
                
                var result1 = _.take(response.data.myModels, 20);  
                const countObj = { count: response.data.myModels.length, currentCount: result1.length };
                dispatch({ type: CALCULATE_COUNT_MODEL, payload:countObj});
                dispatch({ type: LOAD_MODEL_LIST, payload:result1});
                dispatch({ type: BRAND_LIST, payload:response.data.allBrand});
              
                localStorage.setItem('brandIds', JSON.stringify(response.data.brandIds));
             
            })
            .catch(err => console.log('error',err));

    }
}


export function loadMoreModels(values) {
    return function(dispatch,getState) {

        const skip = values.skip;
        const categoryId = values.categoryId;
        dispatch({ type: IS_LOADER_INITIAL, payload: true});
        var items = getState().allModelsNew;
        if (values.filters && values.filters.length > 0) {
            var newModels = [];
            _.forEach(values.filters, function(item, key) {

                let filteredArray = _.filter(items, ['brandId', item]);
                newModels.push(...filteredArray);
            });
            var result1 = _(newModels).slice(skip).take(10).value();
            const currentCount = skip + result1.length;
            const currentCountObj = { currentCount };
            dispatch({ type: CALCULATE_CURRENT_COUNT_MODEL, payload:currentCountObj});
            dispatch({ type: LOAD_MORE_MODELS, payload:result1});
            dispatch({ type: IS_LOADER_COMPLETED, payload: false});
        }
        else {
            
            var result1 = _(items).slice(skip).take(10).value();
            const currentCount = skip + result1.length;
            const currentCountObj = { currentCount };
            dispatch({ type: CALCULATE_CURRENT_COUNT_MODEL, payload:currentCountObj});
            dispatch({ type: LOAD_MORE_MODELS, payload:result1});
            dispatch({ type: IS_LOADER_COMPLETED, payload: false});
    
        }
       
    }

   
}

export function updateModels(newModels) {
    return {
        type:LOAD_MODEL_LIST,
        payload: newModels
    }
}

export function filterModels(filters) {
    return function(dispatch,getState) {
        let newModels = [];
        var items = getState().allModelsNew;
        if (filters.length > 0) {
            _.forEach(filters, function(item, key) {

                let filteredArray = _.filter(items, ['brandId', item]);
                newModels.push(...filteredArray);
                var result1 = _.take(newModels, 20);  
                const countObj = { count: newModels.length, currentCount: result1.length };
                dispatch({ type: LOAD_MODEL_LIST, payload:result1});
                dispatch({ type: CALCULATE_COUNT_MODEL, payload:countObj});
            });
        }
        else {
            var result1 = _.take(items, 20);  
            const countObj = { count: items.length, currentCount: result1.length };
            dispatch({ type: CALCULATE_COUNT_MODEL, payload:countObj});
            dispatch({ type: LOAD_MODEL_LIST, payload:result1});

        }
       
        
    }
}