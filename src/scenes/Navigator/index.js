import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';




import NavBar from '../../components/NavBar';

import Home from '../AboutUs';



import Product from '../ContactUs';
import Loan from '../Loan';
import Mortgage from '../Mortgage';
import NotFound from '../404';
import Checkout from '../Faqs';
import User from '../User';
import Login from '../User/Login';
import Register from '../User/Register';
import Apply from '../Home';
import Footer from "../Footer";



function Navigator() {
    return (
        <div> 
            <NavBar />
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Apply />
                    </Route>
                    <Route path="/about-us" exact>
                        <Home />
                    </Route>
                    <Route path="/faqs" exact>
                        <Checkout/>
                    </Route>
                    <Route path="/contact-us" exact>
                        <Product/>
                    </Route>

                    {/* <Route path="/blogs/:slug" component={Blog}>
                    <Blog/>
                    </Route>
                    <Route path="/blog/bs/:slug" component={BlogB}>
                    <Blogb/>
                    </Route> */}
                    
                    <Route path="/loan" exact>
                        <Loan/>
                    </Route>
                    <Route path="/mortgage" exact>
                        <Mortgage/>
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
                <Footer/>
            </div>
        </div>
    );
}
export default withRouter(Navigator);