import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navBar.css';


function NavBar (){
    
    var p = useLocation().pathname;

return <div>
    
    {/* ----------- Desktop Nav Bar ------------- */}
    <div className = "navBar">
        <div className ="navBar-wrapper">
        ￼<meta charset="UTF-8"></meta>
            <div className="navBar-item">
                <div className="navBar-item">
                < img className= "b" src = "/Images/GearCredit.jpg" alt=""/>
                <div><b>Gear Credit Limited</b></div>
            </div>
            </div>
            
            <div className = "navBar-item">
                <Link to ="/applys" style={{fontWeight : p==="/applys"? 700:300}}>
                ￼首頁
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/" style={{fontWeight : p==="/"? 700:300}}>
                 關於我們
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to ="/blogs" style={{fontWeight : p==="/blogs"? 700:300}}>
                 貸款產品￼
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/checkouts" style={{fontWeight : p==="/checkouts"? 700:300}}>
                常見問題
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/products" style={{fontWeight : p==="/products"? 700:300}}>
                聯絡我們
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                ￼立即申請
                </Link>
            </div>
            <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                貸款熱線 Tel 12345678
                </Link>
            </div>
        </div>
    </div>
    
    


    {/* ----------- Mobile Nav Bar ------------- */}
    
     <div className = "mob-navBar">
        <div className ="navBar-wrapper">
            <div className="navBar-item">
            <div className="navBar-item">
            <img className= "b"src= "/logo192.png" />
              <div><b>Gear Credit Limited</b></div>
   </div>  
   <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar"></div>
  <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>    
    </ul> 
  </nav>
              
              
              <div className="container" onclick="myFunction(this)">
        <div id="wrapper" class="toggled"/>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </div>

        <div className = "navBar-item">
                <Link to ="/applys" style={{fontWeight : p==="/applys"? 700:300}}>
                首頁￼
                </Link>
            </div>
        <div className = "navBar-item">
                <Link to ="/" style={{fontWeight : p==="/"? 700:300}}>
                關於我們
                </Link>
        </div>
        <div className = "navBar-item">
                <Link to ="/blogs" style={{fontWeight : p==="/blogs"? 700:300}}>
                貸款產品￼
                </Link>
        </div>
        <div className = "navBar-item">
                <Link to ="/checkouts" style={{fontWeight : p==="/checkouts"? 700:300}}>
                常見問題
                </Link>
        </div>

         <div className = "navBar-item">
                <Link to ="/products" style={{fontWeight : p==="/products"? 700:300}}>
                聯絡我們
                </Link>
        </div>
        <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                立即申請
                </Link>
        </div>
        <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>
                貸款熱線 Tel 12345678
                </Link>
        </div>
        </div>
    </div>
    </div>
    </div>;
   
}

export default NavBar ;   

    
 

    
    

   



