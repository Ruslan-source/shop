import React from 'react';
import './style.sass'
import {Advantages} from "./Advantages/Advantages";
import {CarouselComp} from "./CarouselComp/CarouselComp";
import {TopProduct} from "./TopProduct/TopProduct";
function Home() {

    return (
        <React.Fragment>
            <div className='home'>
                <CarouselComp />
                <Advantages/>
            </div>
            <TopProduct />
        </React.Fragment>

    );
}

export {Home};