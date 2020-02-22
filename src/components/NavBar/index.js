import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.css';


function NavBar (){
    
    var p = useLocation().pathname;
    //var $ = $( "hide" );


return <div>
    {/* ----------- Desktop Nav Bar ------------- */}
    <div className = "navBar">
        <div className ="navBar-wrapper">
            <div className="navBar-item">
                <img className= "b" src = "/Logo" />
                <div>Gear Credit Limited</div>
            </div>
            <div className = "navBar-item">
                <Link to ="/" style={{fontWeight : p==="/"? 700:300}}>
                    Home
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/blogs" style={{fontWeight : p==="/blogs"? 700:300}}>
                    Blog
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/checkouts" style={{fontWeight : p==="/checkouts"? 700:300}}>
                    Checkout
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/products" style={{fontWeight : p==="/products"? 700:300}}>
                    Product
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                    My Account
                </Link>
            </div>
        </div>
    </div>

    {/* ----------- Mobile Nav Bar ------------- */}
    
    
    
 

    
    

    <div className = "mob-navBar">
        <div className ="navBar-wrapper">
            <div className="navBar-item">
            <div className="navBar-item">

                <img className= "b"src="./Logo" />
              
                <div>Gear Credit Limited</div>
            </div>

        <div class="container" onclick="myFunction(this)">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
        </div>

            <div className = "navBar-item">
             
                <Link to ="/" style={{fontWeight : p==="/"? 700:300}}>
                    Home
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/blogs" style={{fontWeight : p==="/blogs"? 700:300}}>
                    Blog
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/checkouts" style={{fontWeight : p==="/checkouts"? 700:300}}>
                    Checkout
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/products" style={{fontWeight : p==="/products"? 700:300}}>
                    Product
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                    My Account
                </Link>
            </div>
        </div>
        
    </div>
</div>


</div>;
}
export default NavBar ;