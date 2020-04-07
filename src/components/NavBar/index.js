import React from 'react';
import { Link, useLocation,useHistory,Redirect} from 'react-router-dom';
import './navBar.css';
import '../../index.css';




function NavBar() {
    
    var p = useLocation().pathname;
    const history = useHistory();

    
return <div>
    
    {/* ----------- Desktop Nav Bar ------------- */}
    <div
        style={{
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        <div
            style={{
                display: 'flex',
                width: 1024,
                justifyContent: 'space-between'
            }}
        >
            <div>
                <img src="/Images/GearCredit.jpg" alt="" width="150"/>
                <div><b>Gear Credit Limited</b></div>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div>
                    <Link to ="/" style={{
                        fontWeight : (p === "/" ? 700 : 300),
                        color: '#008D83',
                        fontSize: 15,
                        padding: '0 10px'
                    }}>首頁</Link>
                </div>
                <div>
                    <Link to ="/about-us" style={{
                        fontWeight: (p === "/about-us"? 700 : 300),
                        color: '#008D83',
                        fontSize: 15,
                        padding: '0 10px'
                    }}>關於我們</Link>
                </div>


                <div>
                    <ul
                        style={{
                            padding: 0
                        }}
                    >
                        <li
                            style={{
                                listStyle: 'none',
                                position: 'relative'
                            }}
                        >
                            <button
                                type="button"
                                onClick={e => {
                                    const status = e.target.nextSibling.style.display || 'block';
                                    e.target.nextSibling.style.display = (status == 'block' ? 'none' : 'block');
                                }}
                                style={{
                                    color: '#008D83',
                                    fontSize: 15,
                                    borderWidth: 0,
                                    backgroundColor: 'transparent',
                                    cursor: 'pointer',
                                    padding: '0 10px',
                                    fontWeight: ((p === "/loan" || p === "/mortgage") ? 700 : 300),
                                    textDecoration: 'underline'
                                }}
                            >貸款產品</button>
                            <ul style={{
                                display: 'none',
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                padding: 0,
                                margin: 0
                            }}>
                                <li
                                    style={{
                                        listStyle: 'none'
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={e => {
                                            e.target.parentNode.parentNode.style.display = 'none';
                                            history.push(e.target.value);
                                        }}
                                        value="/loan"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    >私人貸款</button>
                                </li>
                                <li
                                    style={{
                                        listStyle: 'none'
                                    }}
                                >
                                    <button
                                        type="button"
                                        onClick={e => {
                                            e.target.parentNode.parentNode.style.display = 'none';
                                            history.push(e.target.value);
                                        }}
                                        value="/mortgage"
                                        style={{
                                            cursor: 'pointer'
                                        }}
                                    >物業按揭</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>


                <div>
                    <Link to="/faqs" style={{
                        fontWeight : (p === "/faqs" ? 700 : 300),
                        color: '#008D83',
                        fontSize: 15,
                        padding: '0 10px'
                    }}>常見問題</Link>
                </div>
                <div>
                    <Link to="/contact-us" style={{
                        fontWeight: (p === "/contact-us" ? 700 : 300),
                        color: '#008D83',
                        fontSize: 15,
                        padding: '0 10px'
                    }}>聯絡我們</Link>
                </div>


                <div>
                    <Link to="/users" style={{
                        fontWeight: (p === "/users" ? 700 : 300),
                        color: '#008D83',
                        fontSize: 15,
                        padding: '0 10px'
                    }}>立即申請</Link>
                </div>
                <div
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <b>貸款熱線: 3700 0018<br/>Service Hotline: 3700 0018</b>
                </div>
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
                <Link to ="/applys" style={{fontWeight : p==="/applys"? 700:300}}>首頁￼</Link>
        </div>
        <div className = "navBar-item">
                <Link to ="/" style={{fontWeight : p==="/"? 700:300}}>關於我們</Link>
        </div>
        <div style={{ margin: 20 }}>
            <div style={{ height: 100 }}/>
            <div>
                {/* <Dropdown
                    trigger={['click']}
                    overlay={menu}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <button style={{ width: 100 }}>貸款產品</button>
                </Dropdown> */}
            </div>
        </div>
        <div className = "navBar-item">
                <Link to ="/checkouts" style={{fontWeight : p==="/checkouts"? 700:300}}>常見問題</Link>
        </div>
        <div className = "navBar-item">
                <Link to ="/products" style={{fontWeight : p==="/products"? 700:300}}>聯絡我們</Link>
        </div>
        <div className = "navBar-item"> 
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>立即申請</Link>
        </div>
        <div className = "navBar-item">
                <Link to = "/users" style={{fontWeight : p==="/users"? 700:300}}>貸款熱線 Tel 12345678</Link>
        </div>
        </div>
    </div>
    </div>
    </div>
}
export default NavBar ;   
