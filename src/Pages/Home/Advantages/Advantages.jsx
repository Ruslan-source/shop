import React from 'react';
import './style.sass'
import {FiTruck,HiOutlineDatabase,IoCheckmarkDone, GoPackage} from "react-icons/all";
function Advantages(props) {
    const advantages = [
        {
            name: 'Бесплатная доставка при заказе от 20 000 рублей',
            icon: <FiTruck />
        },
        {
            name: 'Даем 100% гарантию на 5 лет на все товары',
            icon: <GoPackage  />
        },
        {
            name: 'Оплатить заказ можно любым способом',
            icon: <HiOutlineDatabase />
        },
        {
            name: 'В наличии всегда есть новинки автозапчастей',
            icon: <IoCheckmarkDone />
        },
    ]
    const icon  = {
        fontSize: '5vh'
    }
    const AdvantagesList = () => {
      return advantages.map(el => {
                  return <div className='col-xl-3 col-sm-6 col-12 d-flex  align-items-center p-3'>
                         <span className='icon ' style={icon}>{el.icon}</span>
                         <p className=''>{el.name}</p>
                  </div>
              })


    }

    return (
        <div className='container '>
            <div className="row ">
                <AdvantagesList />
            </div>
        </div>
    );
}

export {Advantages}

/*<div className='col-xl-3 col-sm-6'>
                         <span className='icon' style={icon}>{el.icon}</span>
                         <p className=''>{el.name}</p>
                  </div> */