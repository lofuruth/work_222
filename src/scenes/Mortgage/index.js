import React from 'react';
import Slider from "react-slick";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Concept1 from '../../resources/imgs/concept/concept1.jpg';
import Concept2 from '../../resources/imgs/concept/concept2.jpg';
import Concept3 from '../../resources/imgs/concept/concept3.jpg';


import MortgageForm from '../../components/forms/Mortgage';


//borrow money 2
function Mortgage() {
    
    return <div
        style={{
            marginTop: 40
        }}
    >
        <div
            style={{
                display: 'flex',
                justifyContent: 'center'
            }}
        >
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
                            marginRight: 30
                        }}
                    >
                        <div>
                            申請容易 Easy to apply 申請毋須繁複文件及壓力測試, 可隨時借及隨時還, 零費用 - 送估價費 Simple application that requires simple documents and no stress test. Exempt valuation fee.
                        </div>
                        <br/>
                        <div>
                            種類繁多 Any property is welcome 適合任何物業, 無論物業一按, 二按或轉按,都為您度身訂做! Gear Credit is allowing you to grasp market opportunities and meet your different financial needs whether your property is mortgaged or not.
                        </div>
                        <br/>
                        <div>
                            貸款額高 High loan amount 貸款額高達樓價8成 Loan-to-value ratio up to 80%
                        </div>
                        <br/>
                        <div>
                            零手續費 No extra fee 免手續費及估價費, 無隱藏費用, 提早還款免罰息 Exempt handling fee and valuation fee. No hidden fee. No default interest for early settlement.
                        </div>
                        <br/>
                        <div
                            style={{
                                display: 'flex'
                            }}
                        >
                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#eee',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >一按</div>
                            </div>
                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#eee',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >二按</div>
                            </div>
                            <div
                                style={{
                                    flex: 1
                                }}
                            >
                                <div
                                    style={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: '#eee',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >轉按</div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            flex: 1,
                            marginLeft: 30
                        }}
                    >
                        <div>
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <td colSpan="3"><b>貸款計算器</b></td>
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
                            </table>
                        </div>
                        <br/><br/>
                        <MortgageForm/>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Mortgage;
