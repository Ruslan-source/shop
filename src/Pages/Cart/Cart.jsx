import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CartCard} from "./CartCard";
import {Breadcrumb, Table} from "react-bootstrap";
import {cartActions} from "../../Store/Cart/actions";
import {paths} from "../../constants";
import {Link} from "react-router-dom";

function Cart() {
    const order = useSelector(state => state.cart.order)
    const dispatch = useDispatch()
    const addQty = (id,qty) => dispatch(cartActions.addQty(id,qty))
    const decQty = (id,qty) => dispatch(cartActions.decQty(id,qty))
    const delCart = (id) => dispatch(cartActions.delCart(id))



    return (
        <div className='container'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="col-xl-12  pt-4 pb-4">
                            <h2>Каталог</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item ><Link to={paths.home}>Домой</Link></Breadcrumb.Item>
                                <Breadcrumb.Item active>Корина</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Наименование товара</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Стоимость</th>
                                <th>Удалить</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                order.map(el => {
                                    return <CartCard {...el} addQty={addQty} decQty={decQty} delCart={delCart}/>
                                })
                            }

                            </tbody>
                        </Table>
                    </div>
                </div>
        </div>
    );
}

export {Cart};

/*                   <div className="col-xl-12  pt-4 pb-4">
                       <h2>Каталог</h2>
                       <Breadcrumb>
                           <Breadcrumb.Item ><Link to={paths.home}>Домой</Link></Breadcrumb.Item>
                           <Breadcrumb.Item active>Каталог</Breadcrumb.Item>
                       </Breadcrumb>
                   </div> */