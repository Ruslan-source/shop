import {put, call, takeEvery} from 'redux-saga/effects'
import {fetchCategoryActions,fetchCategoryActionTypes} from "../../Store/FetchCategory";
import axios from "axios";
import {authActions, authActionTypes} from "../../Store/Auth";





function* registerUser(action) {
    try {
        const data = yield axios.post('/api/auth/registration',{...action.form},{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data)
        yield put(authActions.setUser(data))
    }catch (e) {
        console.log(e)
    }
}

function* loginUser(action) {
    try {
        const data = yield axios.post('/api/auth/login/',{...action.form},{
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.data)
        const s =  yield call(() => new Promise(res => res(data)))
        yield put(authActions.setUser(s,true))
    }catch (e) {
        console.log(e)
    }
}

export function* fetchAuthWatcher() {
    yield takeEvery(authActionTypes.REGISTER_USER,registerUser )
    yield takeEvery(authActionTypes.LOGIN_USER,loginUser )
}
