import {combineReducers} from "redux";
import {authReducers as auth} from "./Auth";
import {cartReducers as cart} from "./Cart/reducers";
import {categoryReducers as category} from "./FetchCategory";
import {productsReducers as products} from "./FetchProducts";


export const reducers = combineReducers({
    auth,
    category,
    cart,
    products
})
