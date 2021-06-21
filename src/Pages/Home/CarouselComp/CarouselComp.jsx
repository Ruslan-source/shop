import React from 'react';
import { Carousel, Radio } from 'antd';
import './style.sass'


function CarouselComp() {




    const [dotPosition, setDotPosition] = React.useState('right');


    return (
        <div className='container carousels'>
            <Carousel dotPosition={dotPosition} className=''>
                <div className='carousel__item'>
                    <h3 className='carousel__img'>1</h3>
                </div>
                <div className='carousel__item'>
                    <h3  className='carousel__img'>1</h3>
                </div>
                <div className='carousel__item'>
                    <h3 className='carousel__img'>1</h3>
                </div>
                <div className='carousel__item'>
                    <h3 className='carousel__img'>1</h3>
                </div>
            </Carousel>
        </div>
    );
}

export {CarouselComp}
