import React from 'react';
import {Link} from "react-router-dom";
import {paths} from "../../constants";
import BWM from "../../Img/bmw.png";

function CatalogCard(props) {
    const {id,category} = props
    return (
        <div className='col-xl-2 col-sm-6 col-6 '>
            <Link to={`${paths.products}/${category}`}>
                <img src={BWM} alt="img" className='d-block img-fluid p-3'/>
                <p key={id}>{category}</p>
            </Link>
        </div>
    )
}

export {CatalogCard};