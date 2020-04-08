import React from "react";
import Slider from "react-slick";
//import '../../index.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Icon1 from '../../resources/imgs/icons/honest.jpg';
import Icon2 from '../../resources/imgs/icons/apply.jpg';
import Icon3 from '../../resources/imgs/icons/return.jpg';


import Concept1 from '../../resources/imgs/concept/concept1.jpg';
import Concept2 from '../../resources/imgs/concept/concept2.jpg';
import Concept3 from '../../resources/imgs/concept/concept3.jpg';


//first page
function Home() {
    return <div
        style={{
            marginTop: 40,
            display: 'flex',
            justifyContent: 'center'
        }}
    >
        <div
            style={{
                width: 1024
            }}
        >
            <div
                style={{
                    position: 'relative'
                }}
            >
                <Slider {...{
                    dots: true,
                    infinite: true,
                    speed: 2000,
                    autoplaySpeed: 6000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    fade: true,
                    pauseOnHover: true
                }}>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${Concept1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 450
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(20, 32, 15, 0.32)',
                                    height: '100%'
                                }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${Concept2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 450
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(20, 32, 15, 0.32)',
                                    height: '100%'
                                }}
                            ></div>
                        </div>
                    </div>
                    <div>
                        <div
                            style={{
                                backgroundImage: `url(${Concept3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: 450
                            }}
                        >
                            <div
                                style={{
                                    backgroundColor: 'rgba(20, 32, 15, 0.32)',
                                    height: '100%'
                                }}
                            ></div>
                        </div>
                    </div>
                </Slider>
                <div
                    style={{
                        position: 'absolute',
                        right: 30,
                        bottom: '50%',
                        top: 30,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'rgb(0,0,0,0.8)',
                        width: 300,
                        borderRadius: 5,
                        color: 'rgb(255,255,255)',
                        justifyContent: 'center',
                        padding: 20
                    }}
                >
                    <table width="100%">
                        <thead>
                            <tr>
                                <td
                                    colSpan="3"
                                    style={{
                                        paddingBottom: 15
                                    }}
                                ><b>貸款計算器</b></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td width="100">申請貸款額</td>
                                <td>
                                    <input
                                        type="text"
                                        style={{
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            borderColor: '#000',
                                            padding: '3px 8px',
                                            fontSize: 13,
                                            backgroundColor: 'rgb(253, 253, 253)',
                                            width: '80%'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>每月平息</td>
                                <td>
                                    <input
                                        type="text"
                                        style={{
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            borderColor: '#000',
                                            padding: '3px 8px',
                                            fontSize: 13,
                                            backgroundColor: 'rgb(253, 253, 253)',
                                            width: '80%'
                                        }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>還款期</td>
                                <td>
                                    <input
                                        type="text"
                                        style={{
                                            borderRadius: 4,
                                            borderWidth: 1,
                                            borderColor: '#000',
                                            padding: '3px 8px',
                                            fontSize: 13,
                                            backgroundColor: 'rgb(253, 253, 253)',
                                            width: '80%'
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td
                                    style={{
                                        paddingTop: 10,
                                        paddingBottom: 15
                                    }}
                                >
                                    <button
                                        type="button"
                                        style={{
                                            padding: '5px 15px',
                                            cursor: 'pointer',
                                            backgroundColor: 'rgb(0,141,131)',
                                            borderWidth: 0,
                                            fontSize: 13,
                                            color: 'rgb(255,255,255)'
                                        }}
                                    >計算</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>


            <div
                style={{
                    display: 'flex',
                    marginTop: 80
                }}
            >
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        height: 100,
                        marginRight: 30
                    }}
                >
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <div
                            style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                width: 100,
                                height: 100
                            }}
                        ><img src={Icon1} alt="" height="100"/></div>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20,
                            textAlign: 'center'
                        }}
                    >貸款服務 誠實可靠</div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        height: 100
                    }}
                >
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <div
                            style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                width: 100,
                                height: 100
                            }}
                        >
                            <img src={Icon2} alt="" height="100"/>
                        </div>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20,
                            textAlign: 'center'
                        }}
                    >申請手續 簡單快捷</div>
                </div>
                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        height: 100,
                        marginLeft: 30
                    }}
                >
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <div
                            style={{
                                borderRadius: '50%',
                                overflow: 'hidden',
                                width: 100,
                                height: 100
                            }}
                        >
                            <img src={Icon3} alt="" height="100"/>
                        </div>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20,
                            textAlign: 'center'
                        }}
                    >提供多種還款方式<br/>方便快捷</div>
                </div>
            </div>
        </div>
    </div>;
}
    
export default Home;