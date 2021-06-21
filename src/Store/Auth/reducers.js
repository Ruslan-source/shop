import {authActions, authActionTypes} from "./actions";

const initialState = {
    login: null,
    user: false
}
export const authReducers = (state = initialState, action) => {
        switch (action.type){
            case authActionTypes.SET_USER:
                return {...state, login: action.payload.data, user: action.payload.user}
            default:
                return state
        }
}