import React from "react";
import '../../index.css';

//first page
function Apply(){
    
    return <div style={{
        marginTop: 20,
        height: 200
    }}>

<div className ="flex-container1">
     <img src = "../logo192.png" alt=""/>
     <div className ="flex-container5">貸款計劃及按揭股價</div>
     </div>
    <div className = "dot1" >
                
                <img className="dot" src = "../logo192.png " alt=""/>
                <div className="box1">
                貸款服務 誠實可靠 Honest and Reliable
                </div>
                <img className="dot" src = "../logo192.png "alt=""/>
                <div className="box1">
                申請手續 簡單快捷  East and Fast Application Process
                </div>
                <img className="dot" src = "../logo192.png "alt=""/>
                <div className="box1">
                提供多種還款方式 方便快捷  Convenient Repayment Methods
                </div>
            </div>
    
    </div>;
}
    
export default Apply ;