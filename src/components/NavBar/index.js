import React from 'react';
import { Link, useLocation,useHistory} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

import './navBar.css';

import MenuIcon from 'react-ionicons/lib/MdMenu';




function NavBar() {
    
    var p = useLocation().pathname;
    const history = useHistory();
    const { t, i18n } = useTranslation();

    const [cookies, setCookie] = useCookies(['lang']);
    const changeLanguage = lng => i18n.changeLanguage(lng);
    if (cookies.lang && cookies.lang != i18n.language) changeLanguage(cookies.lang);

    
return <div>
    
        <div id="desktop">
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
                                fontWeight : (p === "/" ? 700 : 300)
                            }}>{t('home')}</Link>
                        </div>
                        <div>
                            <Link to ="/about-us" style={{
                                fontWeight: (p === "/about-us"? 700 : 300)
                            }}>{t('about-us')}</Link>
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
                                    >{t('products')}</button>
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
                                            >{t('loan')}</button>
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
                                            >{t('mortgage')}</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>


                        <div>
                            <Link to="/faqs" style={{
                                fontWeight : (p === "/faqs" ? 700 : 300)
                            }}>{t('faqs')}</Link>
                        </div>
                        <div>
                            <Link to="/contact-us" style={{
                                fontWeight: (p === "/contact-us" ? 700 : 300)
                            }}>{t('contact-us')}</Link>
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
                        <div><span>{t('hotline')}</span>: 3700 0018</div>
                        <div>
                            <button type="button" onClick={e => {
                                setCookie('lang', e.target.value, { path: '/' });
                            }} value="en" style={{
                                borderWidth: 0,
                                borderColor: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                            }}>EN</button>
                            <button type="button" onClick={e => {
                                setCookie('lang', e.target.value, { path: '/' });
                            }} value="zh" style={{
                                borderWidth: 0,
                                borderColor: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                            }}>繁</button>
                            <button type="button" onClick={e => {
                                setCookie('lang', e.target.value, { path: '/' });
                            }} value="cn" style={{
                                borderWidth: 0,
                                borderColor: 'none',
                                backgroundColor: 'transparent',
                                cursor: 'pointer'
                            }}>簡</button>
                        </div>
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
                        >{t('apply-now')}</Link>
                    </div>
                </div>
            </div>
        </div>

        {/* ----------- Mobile Nav Bar ------------- */}
        <div id="mobile">
            <div
                style={{
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    padding: '5px 0',
                    alignItems: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flex: 1,
                        marginRight: -80
                    }}
                >
                    <button type="button"
                        style={{
                            backgroundColor: 'transparent',
                            borderWidth: 0,
                            cursor: 'pointer'
                        }}
                        onClick={e => history.push('/')}
                    >
                        <img src="/Images/GearCredit.jpg" alt="" width="70"/>
                    </button>
                </div>
                <div
                    style={{
                        marginRight: 20
                    }}
                >
                    <button
                        type="button"
                        style={{
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                            border: '1px solid rgb(223,223,223)',
                            borderRadius: 3
                        }}
                        onClick={e => {
                            let target = e.target;
                            while(!/^button$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                            target = target.parentNode.parentNode.nextSibling;
                            target.style.display = target.style.display == 'block' ? 'none' : 'block';
                        }}
                    ><MenuIcon/></button>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <button type="button"
                            style={{
                                fontWeight : (p === "/" ? 700 : 300)
                            }}
                            onClick={e => {
                                let target = e.target;
                                while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                target = target.parentNode;
                                target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                history.push('/');
                            }}
                        >首頁</button>
                    </li>
                    <li>
                        <button type="button"
                            style={{
                                fontWeight : (p === "/about-us" ? 700 : 300)
                            }}
                            onClick={e => {
                                let target = e.target;
                                while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                target = target.parentNode;
                                target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                history.push('/about-us');
                            }}
                        >關於我們</button>
                    </li>
                    <li>
                        <div>貸款產品</div>
                        <ul>
                            <li>
                                <button type="button"
                                    style={{
                                        fontWeight : (p === "/loan" ? 700 : 300),
                                        color: '#fff',
                                        fontSize: 13,
                                        padding: '0 10px',
                                        textDecoration: 'none',
                                        backgroundColor: 'transparent',
                                        borderWidth: 0,
                                        cursor: 'pointer'
                                    }}
                                    onClick={e => {
                                        let target = e.target;
                                        while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                        target = target.parentNode.parentNode.parentNode;
                                        target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                        history.push('/loan');
                                    }}
                                >私人貸款</button>
                            </li>
                            <li>
                                <button type="button"
                                    style={{
                                        fontWeight : (p === "/mortgage" ? 700 : 300),
                                        color: '#fff',
                                        fontSize: 13,
                                        padding: '0 10px',
                                        textDecoration: 'none',
                                        backgroundColor: 'transparent',
                                        borderWidth: 0,
                                        cursor: 'pointer'
                                    }}
                                    onClick={e => {
                                        let target = e.target;
                                        while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                        target = target.parentNode.parentNode.parentNode;
                                        target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                        history.push('/mortgage');
                                    }}
                                >物業按揭</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button type="button"
                            style={{
                                fontWeight : (p === "/faqs" ? 700 : 300)
                            }}
                            onClick={e => {
                                let target = e.target;
                                while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                target = target.parentNode;
                                target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                history.push('/faqs');
                            }}
                        >常見問題</button>
                    </li>
                    <li>
                        <button type="button"
                            style={{
                                fontWeight : (p === "/contact-us" ? 700 : 300)
                            }}
                            onClick={e => {
                                let target = e.target;
                                while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                target = target.parentNode;
                                target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                history.push('/contact-us');
                            }}
                        >聯絡我們</button>
                    </li>
                    <li>
                        <button type="button"
                            style={{
                                fontWeight : (p === "/apply" ? 700 : 300)
                            }}
                            onClick={e => {
                                let target = e.target;
                                while(!/^ul$/i.test(target.nodeName) && target.parentNode) target = target.parentNode;
                                target = target.parentNode;
                                target.style.display = target.style.display == 'block' ? 'none' : 'block';
                                history.push('/apply');
                            }}
                        >立即申請</button>
                    </li>
                </ul>
            </div>
        </div>

    
    </div>
}
export default NavBar ;   
