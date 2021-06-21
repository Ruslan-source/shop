import {all} from 'redux-saga/effects'
import {fetchCategoryWatcher} from "./FetchCategory";
import {fetchProductsWatcher} from "./FetchProducts";
import {fetchAuthWatcher} from "./Auth";


export function* rootWatcher() {
    yield all([fetchCategoryWatcher(),fetchProductsWatcher(),fetchAuthWatcher()])
}