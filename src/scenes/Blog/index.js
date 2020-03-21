import React from "react";
import '../../index.css';

//borrow money 1
function Blog(){ 
    
    return  <div style={{
         marginTop: 40,
         height: 250
     }}>

<img className ="home1"src = "logo192.png" alt="" />

<div className = "centerbox">
    
    <div className = "leftcolumn">
        <div className= "flex-container3">
            <div>因應您各種需要，我們會提供合適您之私人貸款計劃，一經批核，現金即時到手，快捷方便。讓您可靈活理財。<br></br>   
In response to your financial needs, we may offer you a tailor made
personal loan program, giving you the flexibility to manage your finances.
Once approved, cash is available quickly.</div>
         </div> 
            <div className = "dotbox">
                <img className="dot" src = "../logo192.png "alt=""/>
                <div className="box1">填寫貸款申請表
Complete application form
網上遞交表格，隨時隨地方便借貸
Submit forms online, convenient to apply anytime and anywhere</div>
            <div className = "dotbox">
                <img className="dot" src = "../logo192.png "alt=""/>
                <div className="box1">貸款批核
Application review
基業信貸團隊會因應您的財務需要，制定最度身訂造的財務方案
Gear Credit Team will provide the most tailor-made financial solutions to meet your financial needs.
</div>         
            <div className="dotbox">
                <img className="dot" src = "../logo192.png "alt=""/>
                <div className="box1">貸款到手
Application approval
簽署貸款合約,並獲取貸款
Sign contract, withdrawals within 24 hours of approvals within the same day of approval
</div> 
                </div> 
            </div>
        </div>
 
     </div>

    <div className= "rightcolumn">
        <div className = "flex-container4">
            <div>calculator</div>
            </div>
    
     <div className = "flex-container4">
            <div>私人貸款申請表格 Personal Loan Application Form
姓名 Name
性別 Gender  男/女  Male/ Female
聯絡電話 Phone number
電郵地址 Email address
申請貸款金額 Loan amount
選擇聯絡時間 Contact time
提交 Submit
</div>
            </div>
        </div>
    </div>
    </div>
}

export default Blog ;