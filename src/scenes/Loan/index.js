import React from "react";
import Slider from "react-slick";
import './Loan.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LoanForm from '../../components/forms/Loan';


import Concept1 from '../../resources/imgs/concept/concept1.jpg';
import Concept2 from '../../resources/imgs/concept/concept2.jpg';
import Concept3 from '../../resources/imgs/concept/concept3.jpg';


//borrow money 1
function Loan() { 
    return <div id="loan">
        <div
            style={{
                width: 1024
            }}
        >
            <div>
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
                                height: 320
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
                                height: 320
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
                                height: 320
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
            </div>
            <br/><br/><br/>
            <div
                style={{
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        flex: 1,
                        marginReft: 30
                    }}
                >
                    <div
                        style={{
                            width: '95%'
                        }}
                    >因應您各種需要，我們會提供合適您之私人貸款計劃，一經批核，現金即時到手，快捷方便。讓您可靈活理財。</div>
                    <br/><br/><br/>
                    <div>
                        <div
                            style={{
                                display: 'flex'
                            }}
                        >
                            <div
                                style={{
                                    width: 90,
                                    height: 90,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#008D83',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 35,
                                        color: '#fff'
                                    }}
                                >1</div>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    fontSize: 13,
                                    padding: '0 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h2
                                    style={{
                                        margin: 0
                                    }}
                                >填寫貸款申請表</h2>
                                <p
                                    style={{
                                        fontSize: 15
                                    }}
                                >網上遞交表格，隨時隨地方便借貸</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div
                            style={{
                                display: 'flex',
                                paddingLeft: 30
                            }}
                        >
                            <div
                                style={{
                                    width: 90,
                                    height: 90,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#008D83',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 35,
                                        color: '#fff'
                                    }}
                                >2</div>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    fontSize: 13,
                                    padding: '0 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h2
                                    style={{
                                        margin: 0
                                    }}
                                >貸款批核</h2>
                                <p
                                    style={{
                                        fontSize: 15
                                    }}
                                >基業信貸團隊會因應您的財務需要，制定最度身訂造的財務方案</p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div
                            style={{
                                display: 'flex',
                                paddingLeft: 60
                            }}
                        >
                            <div
                                style={{
                                    width: 90,
                                    height: 90,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#008D83',
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 35,
                                        color: '#fff'
                                    }}
                                >3</div>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    fontSize: 13,
                                    padding: '0 20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <h2
                                    style={{
                                        margin: 0
                                    }}
                                >貸款到手</h2>
                                <p
                                    style={{
                                        fontSize: 15
                                    }}
                                >簽署貸款合約,並獲取貸款</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        flex: 1,
                        marginLeft: 30
                    }}
                >
                    <div className="calculator">
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
                                                width: '85%'
                                            }}
                                        />
                                    </td>
                                    <td rowSpan="3" width="90">
                                        <button
                                            type="button"
                                            style={{
                                                width: 80,
                                                height: 80,
                                                borderRadius: '50%',
                                                borderWidth: 0,
                                                cursor: 'pointer',
                                                backgroundColor: '#BCB174',
                                                color: '#fff',
                                                fontSize: 16
                                            }}
                                        >計算</button>
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
                                                width: '85%'
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
                                                width: '85%'
                                            }}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>    
                    </div>
                    <br/>
                    <br/>
                    <LoanForm/>
                </div>
            </div>
        </div>
    </div>;
}

export default Loan;