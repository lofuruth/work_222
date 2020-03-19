import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';




import NavBar from '../../components/NavBar';

import Home from '../Home';
import Product from '../Product';
import Blog from '../Blog';
import BlogB from '../BlogB';
import NotFound from '../404';
import Checkout from '../Checkout';
import User from '../User';
import Login from '../User/Login';
import Register from '../User/Register';
import Apply from '../Apply';
import Header from '../Header';
import Footer from "../Footer";


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
        {/* <Route path="/blogs/:slug" component={Blog}>
        <Blog/>
        </Route>
        <Route path="/blog/bs/:slug" component={BlogB}>
        <Blogb/>
        </Route> */}
        
        <Route path="/blogs" exact>
            <Blog/>
        </Route>
        <Route path="/blog/bs" exact>
            <BlogB/>
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
        <Route path="/applys" exact>
            <Apply />
        </Route>
        <Route>
            <NotFound/>
        </Route>

    </Switch>
    <Footer/>
    
    </div>
    
</div>);
}
export default withRouter(Navigator);