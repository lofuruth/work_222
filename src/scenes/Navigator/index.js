import React from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';




import NavBar from '../../components/NavBar';

import AboutUs from '../AboutUs';
import Product from '../ContactUs';
import Loan from '../Loan';
import Mortgage from '../Mortgage';
import NotFound from '../404';
import Faqs from '../Faqs';
import Apply from '../Apply';
//import Login from '../User/Login';
//import Register from '../User/Register';
import Home from '../Home';

import Footer from "../Footer";




function Navigator(props) {
    return (
        <div> 
            <NavBar />
            <div>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about-us" exact>
                        <AboutUs />
                    </Route>
                    <Route path="/faqs" exact>
                        <Faqs/>
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
                    <Route exact path="/apply/:type(loan|mortgage)?" component={Apply}/>


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