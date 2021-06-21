import React, {useState} from 'react';
import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {ProductsCard} from "./ProductsCard";

function Products() {
    const products = useSelector(state => state.products.products)
    const { category } = useParams()
    const a = "72fcfaec-560b-45a9-bfe3-cdf0e608237f"
    console.log(products.map(el => el.id.toLowerCase() === a.toLowerCase() && el))

    const [filter,setFilter] = useState('')

    return (
        <div className='container'>
            <input type="text" onChange={(e) => setFilter(e.target.value)}/>
            {
                products.filter(el => el.category === category).map(item => {
                    return <ProductsCard {...item} filter={filter}/>
                })
            }
        </div>
    );
}
//el.category === category ? <ProductsCard {...el} filter={filter}/> : <p>No</p>
export {Products};