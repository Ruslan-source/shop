import {fetchCategoryActionTypes} from "./actions";

const initialState = {
    category: [],
    loading: true
}


export const categoryReducers = (state = initialState, action) => {
    switch (action.type){
        case fetchCategoryActionTypes.SET_CATEGORY:
            return {...state, category: action.payload.data, loading: action.payload.loading}

        default:
            return state
    }
}