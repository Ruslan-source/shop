import React from 'react';
import {cartActions} from "../../Store/Cart/actions";
import {useDispatch} from "react-redux";

function ProductsCard(props) {
    const {id,filter} = props

    const dispatch = useDispatch()

    const addCart = (id) => dispatch(cartActions.addCart(id))



    return (
        <div>
            {
                !!filter ? <>
                    {
                        id.toLowerCase().includes(filter) && <p>{id}</p>
                    }
                </> : <p onClick={() => addCart(id)}>{id}</p>
            }
        </div>
    );
}

export {ProductsCard}