import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "../Components";
import {paths} from "../constants";
import {Authorization, Cart, Catalog, Home} from "../Pages";










function Routing() {

    return (
       <Router>
            <Header />
            <Switch>
                <Route exact path={paths.home}>
                    <Home />
                </Route>
                <Route path={paths.catalog}>
                    <Catalog />
                </Route>
                <Route path={paths.authorization}>
                    <Authorization />
                </Route>
                <Route path={paths.cart}>
                    <Cart />
                </Route>
            </Switch>
        </Router>
    );
}

export {Routing};

