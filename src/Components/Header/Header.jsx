import React from 'react';


import Logo from '../../Img/logo.png'
import './style.sass'
import {paths} from "../../constants";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

function Header() {

    const nav = [
        {
          name: 'Каталог',
          path: paths.catalog,
        },
        {
            name: 'О компании',
            path: paths.about,
        },
        {
            name: 'Доставка и оплата',
            path: paths.delivery,
        },
        {
            name: 'Контакты',
            path: paths.contacts,
        },
    ]

    const NavList = () => {
        return nav.map(el => {
            return <Link
                as={Link}
                to={el.path}
                key={el.name}
                className='header-nav__link' >
                {el.name}
            </Link>
        })
    }

    return (
        <React.Fragment>
            <div className='container-fluid bg'>
                <div className="container ">
                    <div className="row d-flex align-items-center ">
                        <div className='col-xl-2 col-12    text-start'>
                            <Link to={paths.home}><h2 className='logo'>CHIPKEY</h2></Link>
                        </div>
                        <div className='header-nav__list col-xl-5 col-12 text-center'>
                            <NavList/>
                        </div>
                        <div className="col-xl-3 p-4 d-flex">
                            <input className='w-100 p-1 search__input' placeholder='XTZ***-***-**'/>
                            <button className='search__btn'>SEARCH</button>
                        </div>
                        <div className='col-xl-2 col-12 text-center p-2'>
                            <Link to={paths.authorization}>
                                <AccountBoxIcon className='header-nav__icon'/>
                            </Link>
                           <Link to={paths.cart}>
                               <ShoppingCartIcon className='header-nav__icon'/>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export {Header};

/*                     <Navbar expand="sm" className=''>

                        <Navbar.Brand href="/">
                           <h3>CHIPKEY</h3>
                        </Navbar.Brand>

                       <Navbar.Collapse>

                           <Nav className="w-100 header-nav">
                                   <NavList />
                           </Nav>

                       </Navbar.Collapse>

                        <Nav className='header-nav'>
                                asdasdasd
                        </Nav>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Navbar>*/