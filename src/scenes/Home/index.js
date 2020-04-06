import React from 'react';
import '../../index.css';



import Banner from '../../resources/imgs/abt-banner.jpg';
import Banner2 from '../../resources/imgs/abt-banner2.jpg';

//about us

function Home (){

    return <div style={{
        marginTop: 10,
        height: 100,
        display: 'flex',
        justifyContent: 'center'
    }}>
        <div
            style={{
                width: 1024
            }}
        >
            <div
                style={{
                    backgroundImage: `url(${Banner})`,
                    minHeight: 280,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div style={{
                    backgroundColor: 'rgba(22, 30, 20, 0.4)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgb(255,255,255)',
                    fontSize: 19
                }}>
                    <b
                        style={{
                            textShadow: 'rgb(0, 0, 0) 0px 2px'
                        }}
                    >為你解決財務需要</b>
                </div>
            </div>

            <section
                style={{
                    minHeight: 320,
                    marginTop: 50
                }}
            >
                <p>基業信貸有限公司創辦於2018年，是根據香港放債人條例(香港法例163章)正式註冊成立之認可財務公司。
        主要從事私人貸款及樓宇按揭業務有豐富經驗，能夠充分了解客戶需要，提供合適的貸款計劃，協助客戶解決在財務上的需要。</p>

                <p>Gear Credit Limited was founded in 2018, according to Hong Kong Money-Lenders Ordinance
        (CAP 163 MONEY LENDERS ORDINANCE) asestablished and recognized finance company that mainly provide private loans and property mortgage business. Our team of professionls has theexperience to fully understand the needs of our clients to provide them with the right loan program and help them solve their financial needs.</p>
            </section>
            
            <div
                style={{
                    backgroundImage: `url(${Banner2})`,
                    minHeight: 150,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative'
                }}
            >
                <div style={{
                    backgroundColor: 'rgba(22, 30, 20, 0.4)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'rgb(255,255,255)',
                    fontSize: 19
                }}>
                    <b
                        style={{
                            textShadow: 'rgb(0, 0, 0) 0px 2px'
                        }}
                    >誠實可靠&nbsp;&nbsp;值得信賴</b>
                </div>
            </div>
        </div>
    </div>
}

export default Home;