import {fetchProductsActionTypes} from "./actions";

const initialState = {
    products: [],
    loading: true
}


export const productsReducers = (state = initialState, action) => {
    switch (action.type){
        case fetchProductsActionTypes.SET_PRODUCTS:
            return  {...state, products: action.payload.data, loading: action.payload.loading}
        default:
          return state
    }
}