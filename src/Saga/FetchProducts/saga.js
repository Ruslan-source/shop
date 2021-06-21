import {call, takeEvery,put} from "redux-saga/effects";
import {fetchProductsActions, fetchProductsActionTypes} from "../../Store/FetchProducts";
import axios from "axios";



const getProducts = () => axios.get('api/products/', {
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => response.data)

function* fetchProducts() {
   try {
       const data = yield call(getProducts)
       yield put(fetchProductsActions.setProducts(data,false))
   }catch (e) {
       console.log(e)
   }
}

export function* fetchProductsWatcher() {
    yield takeEvery(fetchProductsActionTypes.FETCH_PRODUCTS,fetchProducts )
}