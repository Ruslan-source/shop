import {cartActionTypes} from "./actions";

const initialState = {
    order: []
}


export const cartReducers = (state = initialState, action) => {
    switch (action.type) {

        case cartActionTypes.ADD_CART:
            const checkCart = state.order.find(item => item.id === action.payload.id)
            const addItem = !!checkCart ? state.order.map(el => el.id === action.payload.id ? {
                ...el,
                qty: el.qty + 1
            } : el) : [...state.order, {...action.payload, qty: +1}]
            return {...state, order: addItem}

        case cartActionTypes.DEL_CART:
            const delCart = state.order.filter(el => el.id !== action.payload.id)
            return {...state, order: delCart}

        case cartActionTypes.ADD_QTY:
            const checkQtyAdd = state.order.find(item => item.id === action.payload.id)
            const addQty = !!checkQtyAdd && state.order.map(el => el.id === action.payload.id ? {...el, qty: el.qty + 1} : el)
            return {...state, order: addQty}

        case cartActionTypes.DEC_QTY:
            const checkQtyDec = state.order.find(item => item.id === action.payload.id)
            const decQty = !!checkQtyDec && state.order.map(el => el.id === action.payload.id ? {...el, qty: el.qty - 1} : el)
            return {...state, order: decQty}

        default:
            return state
    }
}
