import React from 'react';

import './Loan.css';


//borrow money 2
function LoanForm() {
    return <div id="loan-form">
        <table>
            <tbody>
                <tr>
                    <td>姓名 *</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>稱謂 *</td>
                    <td>
                        <label>
                            <input type="radio"/>
                            先生
                        </label>
                        <label>
                            <input type="radio"/>
                            小姐
                        </label>
                        <label>
                            <input type="radio"/>
                            女士
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>聯絡電話 *</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>電郵地址</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>教育程度</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>職業</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>申請貸款金額 *</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>選擇聯絡時間</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>出糧方式</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>有否強積金</td>
                    <td>
                        <label>
                            <input type="radio"/>
                            有
                        </label>
                        <label>
                            <input type="radio"/>
                            否
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>住屋種類</td>
                    <td>
                        <select>
                            <option>自置（有按揭）</option>
                            <option>自置（無按揭）</option>
                            <option>與家人同住</option>
                            <option>租住私人物業</option>
                            <option>租住政府房屋</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>私人貸款及信用卡結欠</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>如何認識基業信貸</td>
                    <td
                        style={{
                            padding: 10
                        }}
                    >
                        <label>
                            <input type="checkbox"/>
                            網上
                        </label>
                        <label>
                            <input type="checkbox"/>
                            報紙
                        </label>
                        <label>
                            <input type="checkbox"/>
                            雜誌廣告
                        </label>
                        <label>
                            <input type="checkbox"/>
                            其他
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>申請人請附上以下資料(每個上傳文件必須少於 10MB 和需為 JPG, PNG 或 PDF 的格式)</td>
                    <td
                        style={{
                            padding: 5
                        }}
                    >
                        <label>
                            最近三個月之收入證明(如公司信，糧單及糧簿):
                            <input type="file"/>
                        </label>
                        <br/>
                        <br/>
                        <label>
                            身份證及工作證及/或公司咭片:
                            <input type="file"/>
                        </label>
                        <br/>
                        <br/>
                        <label>
                            最近一個月之住址證明(水、電費單及載有本人名之信件):
                            <input type="file"/>
                        </label>
                        <br/>
                        <br/>
                        <label>
                            自己物業需出示證明(如差餉單、供樓紙等):
                            <input type="file"/>
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
        <br/>
        <div
            style={{
                fontSize: 13
            }}
        >
            <div>
                <label>
                    <input type="checkbox"/>
                    本人已詳細閱讀及同意 條款及細則
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"/>
                    本人/吾等不同意基業信貸將本人/吾等的個人資料使用及/或轉移作直接促銷之目的。
                </label>
            </div>
            <br/>
            <div>
                <button
                    type="button"
                    style={{
                        backgroundColor: '#008D83',
                        color: '#fff',
                        padding: '5px 20px',
                        borderWidth: 0,
                        cursor: 'pointer'
                    }}
                >提交</button>
            </div>
        </div>
    </div>;
}


export default LoanForm;
