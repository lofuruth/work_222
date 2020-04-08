import React from 'react';
import { Link, useLocation,useHistory,Redirect} from 'react-router-dom';
//import './navBar.css';
//import '../../index.css';




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
            <div
                style={{
                    display: 'flex'
                }}
            >
                <div>
                    <img src="/Images/GearCredit.jpg" alt="" width="150"/>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 50
                    }}
                >
                    <div>
                        <Link to ="/" style={{
                            fontWeight : (p === "/" ? 700 : 300),
                            color: '#008D83',
                            fontSize: 15,
                            padding: '0 10px',
                            textDecoration: 'none'
                        }}>首頁</Link>
                    </div>
                    <div>
                        <Link to ="/about-us" style={{
                            fontWeight: (p === "/about-us"? 700 : 300),
                            color: '#008D83',
                            fontSize: 15,
                            padding: '0 10px',
                            textDecoration: 'none'
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
                                        textDecoration: 'none'
                                    }}
                                >貸款產品</button>
                                <ul style={{
                                    display: 'none',
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    padding: 0,
                                    margin: 0,
                                    top: 30,
                                    zIndex: 999
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
                                                cursor: 'pointer',
                                                backgroundColor: 'rgb(0,141,131)',
                                                borderWidth: 0,
                                                padding: '8px 10px',
                                                color: '#fff',
                                                width: '100%'
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
                                                cursor: 'pointer',
                                                backgroundColor: 'rgb(0,141,131)',
                                                borderWidth: 0,
                                                padding: '8px 10px',
                                                color: '#fff',
                                                width: '100%'
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
                            padding: '0 10px',
                            textDecoration: 'none'
                        }}>常見問題</Link>
                    </div>
                    <div>
                        <Link to="/contact-us" style={{
                            fontWeight: (p === "/contact-us" ? 700 : 300),
                            color: '#008D83',
                            fontSize: 15,
                            padding: '0 10px',
                            textDecoration: 'none'
                        }}>聯絡我們</Link>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        marginRight: 20,
                        textAlign: 'right',
                        fontSize: 13,
                        fontWeight: 400
                    }}
                >
                    <div>貸款熱線: 3700 0018</div>
                </div>
                <div>
                    <Link to="/apply"
                        style={{
                            fontWeight: (p === "/apply" ? 700 : 300),
                            color: 'rgb(255,255,255)',
                            fontSize: 15,
                            padding: '7px 15px',
                            textDecoration: 'none',
                            backgroundColor: 'rgb(188,177,116)',
                        }}
                    >立即申請</Link>
                </div>
            </div>
        </div>
    </div>

    {/* ----------- Mobile Nav Bar ------------- */}
    </div>
}
export default NavBar ;   
