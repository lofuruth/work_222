import React from 'react';
import '../../index.css';


import Banner from '../../resources/imgs/abt-banner.jpg';


//question 
function Faqs() {
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

            <div
                style={{
                    marginTop: 60
                }}
            >
                <div>
                    <div
                        style={{
                            backgroundColor: '#008D83',
                            color: '#fff',
                            padding: '8px 20px'
                        }}
                    ><b>貸款人需符合什麼資格？</b></div>
                    <div
                        style={{
                            padding: 15,
                            backgroundColor: 'rgb(245, 245, 245)'
                        }}
                    >• 申請人必須年滿18歲，並擁有香港居留權之居民，自僱或受僱人士均可。Applicants must be at least 18 years of age and have residents of Hong Kong's right of abode, either self-employed or employed.</div>
                </div>

                <br/>
                <br/>

                <div>
                    <div
                        style={{
                            backgroundColor: '#008D83',
                            color: '#fff',
                            padding: '8px 20px'
                        }}
                    ><b>申請貸款所需文件？</b></div>
                    <div
                        style={{
                            padding: 15,
                            backgroundColor: 'rgb(245, 245, 245)'
                        }}
                    >
                        <ul
                            style={{
                                padding: '0 20px',
                                margin: 0,
                                fontSize: 15
                            }}
                        >
                            <li>香港居民身份證 Hong Kong Resident Identity Card</li>
                            <li>工作的資料，例如：公司電話、地址等 Information about work, such as company phone number, address, etc.</li>
                            <li>3個月內居住址證明，例如：水、電費單、銀行月結單 Proof of residence within 3 months, for example, water, electricity bill, bank statement</li>
                        </ul>
                    </div>
                </div>

                <br/>
                <br/>

                <div>
                    <div
                        style={{
                            backgroundColor: '#008D83',
                            color: '#fff',
                            padding: '8px 20px'
                        }}
                    ><b>申請前我是否可以得到個人報價？</b></div>
                    <div
                        style={{
                            padding: 15,
                            fontSize: 15,
                            backgroundColor: 'rgb(245, 245, 245)'
                        }}
                    >• 你可以在（遞交申請表後）初步審批結果之後決定會否提供文件完成申請程序。</div>
                </div>

                <br/>
                <br/>

                <div>
                    <div
                        style={{
                            backgroundColor: '#008D83',
                            color: '#fff',
                            padding: '8px 20px'
                        }}
                    ><b>如果我現在或曾經破產，我還可以申請貸款嗎？</b></div>
                    <div
                        style={{
                            padding: 15,
                            fontSize: 15,
                            backgroundColor: 'rgb(245, 245, 245)'
                        }}
                    >• 如果你因為現在或曾經破產而影響了信貸紀錄，我們將根據你的財務狀況及個別情況進行財務分析及貸款審批。</div>
                </div>

                <br/>
                <br/>

                <div>
                    <div
                        style={{
                            backgroundColor: '#008D83',
                            color: '#fff',
                            padding: '8px 20px'
                        }}
                    ><b>我如果有其他疑問，可以如何查詢 ? </b></div>
                    <div
                        style={{
                            padding: 15,
                            fontSize: 15,
                            backgroundColor: 'rgb(245, 245, 245)'
                        }}
                    >• 歡迎致電我們的客戶服務熱線3700 0018。Welcome to call our customer service hotline at 3700 0018.</div>
                </div>
            </div>

        </div>
    </div>
}
export default Faqs;