import React from 'react';
import {useSelector} from "react-redux";
import BWM from '../../Img/bmw.png'
import {Link} from "react-router-dom";
import {paths} from "../../constants";
import {Breadcrumb} from "react-bootstrap";
import {CatalogCard} from "./CatalogCard";

function Catalog() {

    const category = useSelector(state => state.category.category)

    const borderCard = {
        border: "1px solid gray",

    }



    return (
        <React.Fragment>
            <div className='container'>
               <div className="row">
                   <div className="col-xl-12  pt-4 pb-4">
                       <h2>Каталог</h2>
                       <Breadcrumb>
                           <Breadcrumb.Item ><Link to={paths.home}>Домой</Link></Breadcrumb.Item>
                           <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
                       </Breadcrumb>
                   </div>
                   <div className="col-xl-12 text-center">
                      <div className="row">
                          {
                              category.map(el => {
                                  return <CatalogCard {...el}/>
                              })
                          }
                      </div>
                   </div>
               </div>
            </div>
        </React.Fragment>
    );
}

export {Catalog}
//<Link to={`${paths.products}/${el.category}`}>