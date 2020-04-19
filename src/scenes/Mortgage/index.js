import React from 'react';
import Slider from "react-slick";
import './Mortgage.css';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Concept1 from '../../resources/imgs/concept/concept1.jpg';
import Concept2 from '../../resources/imgs/concept/concept2.jpg';
import Concept3 from '../../resources/imgs/concept/concept3.jpg';


import MortgageForm from '../../components/forms/Mortgage';


//borrow money 2
function Mortgage() {
    
    return <div id="mortgage">
        <div className="wrapper">
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
            <div className="content">
                <div>
                    <div>
                        <h4
                            style={{
                                margin: 0
                            }}
                        >申請容易</h4>
                        <p>申請毋須繁複文件及壓力測試, 可隨時借及隨時還, 零費用 - 送估價費</p>
                    </div>
                    <br/>
                    <div>
                        <h4
                            style={{
                                margin: 0
                            }}
                        >種類繁多</h4>
                        <p>適合任何物業, 無論物業一按, 二按或轉按,都為您度身訂做!</p>
                    </div>
                    <br/>
                    <div>
                        <h4
                            style={{
                                margin: 0
                            }}
                        >貸款額高</h4>
                        <p>貸款額高達樓價8成</p>
                    </div>
                    <br/>
                    <div>
                        <h4
                            style={{
                                margin: 0
                            }}
                        >零手續費</h4>
                        <p>免手續費及估價費, 無隱藏費用, 提早還款免罰息</p>
                    </div>
                    <br/>
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
                                    backgroundColor: '#008D83',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff'
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
                                    backgroundColor: '#008D83',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff'
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
                                    backgroundColor: '#008D83',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#fff'
                                }}
                            >轉按</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="calculator">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <td
                                        colSpan="3"
                                        style={{
                                            paddingBottom: 15
                                        }}
                                    ><b>物業按揭計算器</b></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td width="100">物業價值</td>
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
                                    <td>貸款比率</td>
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
                                <tr>
                                    <td>年息</td>
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
                    <br/><br/>
                    <MortgageForm/>
                </div>
            </div>
        </div>
    </div>;
}

export default Mortgage;
