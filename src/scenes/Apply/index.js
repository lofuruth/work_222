import React from "react";
import '../../index.css';


import Icon1 from '../../resources/imgs/icons/honest.png';
import Icon2 from '../../resources/imgs/icons/apply.png';
import Icon3 from '../../resources/imgs/icons/return.png';



//first page
function Apply(){
    
    return <div style={{
        marginTop: 20,
        height: 200,
        display: 'flex',
        justifyContent: 'center'
    }}>

        <div
            style={{
                width: 1024
            }}
        >
            <div className ="flex-container1">
                <img src = "../logo192.png" alt=""/>
                <div className ="flex-container5">貸款計劃及按揭股價</div>
            </div>

            <div style={{
                display: 'flex',
                marginTop: 50
            }}>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    height: 100
                }}>
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <img src={Icon1} alt="" width="100"/>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        }}
                    >
                        貸款服務 誠實可靠 Honest and Reliable
                    </div>
                </div>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    height: 100
                }}>
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <img src={Icon2} alt="" width="100"/>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        }}
                    >
                        申請手續 簡單快捷  East and Fast Application Process
                    </div>
                </div>
                <div style={{
                    flex: 1,
                    display: 'flex',
                    height: 100
                }}>
                    <div
                        style={{
                            width: 100,
                            marginRight: 10
                        }}
                    >
                        <img src={Icon3} alt="" width="100"/>
                    </div>
                    <div
                        style={{
                            border: '1px solid #eee',
                            backgroundColor: '#f7f7f7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 20
                        }}
                    >
                        提供多種還款方式 方便快捷  Convenient Repayment Methods
                    </div>
                </div>
            </div>
        </div>
    
    </div>;
}
    
export default Apply ;