import {put, call, takeEvery} from 'redux-saga/effects'
import {fetchCategoryActions,fetchCategoryActionTypes} from "../../Store/FetchCategory";
import axios from "axios";
const getCategory = () => axios.get('api/category/', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data)



function* fetchCategory() {
    try {
        const data = yield call(getCategory)
        yield put( fetchCategoryActions.setCategory(data,false))
    } catch (e) {
        console.log(e)
    }
}

export function* fetchCategoryWatcher() {
    yield takeEvery(fetchCategoryActionTypes.FETCH_CATEGORY,fetchCategory)
}
