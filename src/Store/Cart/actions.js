export const cartActionTypes = {
    ADD_CART: "CART.ADD_CART",
    ADD_QTY: "CART.ADD_QTY",
    DEC_QTY: "CART.DEC_QTY",
    DEL_CART: "CART.DEL_CART"
}


export const cartActions = {

    addCart: (id, name, title) => ({
        type: cartActionTypes.ADD_CART, payload: {
            id, name, title
        }
    }),

    delCart: (id) => ({type: cartActionTypes.DEL_CART, payload: {id}}),

    addQty: (id, qty) => ({
        type: cartActionTypes.ADD_QTY, payload: {
            id,
            value: qty
        }
    }),

    decQty: (id, qty) => ({
        type: cartActionTypes.DEC_QTY, payload: {
            id,
            value: qty
        }
    })

}