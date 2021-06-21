import React from 'react';
import {useSelector} from "react-redux";

function TopProduct() {

    const topProducts = useSelector(state => state.products.products)

    const TopProductsList = () => {
        return topProducts.filter(el => el.name === 'dsadasd').slice(0,5).map(el => {
            return <div className='col-xl-3'>
                <p>{el.name}</p>
            </div>
        })
    }


    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className="col-xl-12 text-start">
                        <h3 className='pt-2 pb-2'>
                            Популярные продукты
                        </h3>
                    </div>
                    <div className="col-xl-12 row">
                        <TopProductsList />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export {TopProduct};