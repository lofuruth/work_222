import React from 'react';
import {Route,Switch,withRouter,Redirect} from 'react-router-dom';


import NavBar from '../../components/NavBar';
import Home from '../Home';
import Product from '../Product';
import Blog from '../Blog';
import NotFound from '../404';
import Checkout from '../Checkout';
import User from '../User';
import Login from '../User/Login';
import Register from '../User/Register';

function Navigator(){

return (<div> 
    <NavBar />
    <div className = "scene">
    

    <Switch>
        <Route path="/" exact>
       
            <Home />
        </Route>
        <Route path="/products" exact>
            <Product/>
        </Route>
        <Route path="/blogs" exact>
            <Blog/>
        </Route>
        <Route path="/checkouts" exact>
            <Checkout/>
        </Route>
        <Route path="/users" exact>
            <User/>
        </Route>
        <Route path="/users/login" exact>
            <Login/>
        </Route>
        <Route path="/users/new" exact>
            <Register/>
        </Route>
        <Route>
            <NotFound/>
        </Route>


    </Switch>

    </div>


</div>);
}
export default withRouter(Navigator);