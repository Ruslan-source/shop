import {useCallback} from "react";
import axios from "axios";

export const fetchProductsActionTypes = {
    SET_PRODUCTS: "PRODUCTS.SET_PRODUCTS",
    FETCH_PRODUCTS: "PRODUCTS.FETCH_PRODUCTS"
}

export const fetchProductsActions = {
    setProducts: (data,loading) => ({type: fetchProductsActionTypes.SET_PRODUCTS, payload: {
            data,loading
        }}),
    fetchProducts: () => ({type: fetchProductsActionTypes.FETCH_PRODUCTS}),

}