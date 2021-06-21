import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function CartCard(props) {
    const {id,qty,addQty,decQty,delCart} = props
    return (
        <tr>
            <th>{id}</th>
            <th>3200p</th>
            <th className='d-flex justify-content-around'><ExpandLessIcon onClick={() => addQty(id,qty)}/>{qty}<ExpandMoreIcon onClick={() => decQty(id,qty)}/></th>
            <th>{id}</th>
            <th onClick={() => delCart(id)}>Х</th>
        </tr>
    );
}

export {CartCard};