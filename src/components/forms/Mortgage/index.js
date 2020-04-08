import React from 'react';

import './Mortgage.css';


//borrow money 2
function MortgageForm() {
    return <div id="mortgage-form">
        <table>
            <tbody>
                <tr>
                    <td
                        style={{
                            width: '180px !important'
                        }}
                    >姓名 *</td>
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
                    <td>職業</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>物業類別</td>
                    <td>
                        <label>
                            <input type="checkbox"/>
                            私人住宅
                        </label>
                        <label>
                            <input type="checkbox"/>
                            唐樓
                        </label>
                        <label>
                            <input type="checkbox"/>
                            村屋
                        </label>
                        <label>
                            <input type="checkbox"/>
                            居屋（已補地價）
                        </label>
                        <label>
                            <input type="checkbox"/>
                            寫字樓
                        </label>
                        <label>
                            <input type="checkbox"/>
                            工廈
                        </label>
                        <label>
                            <input type="checkbox"/>
                            舖位
                        </label>
                        <label>
                            <input type="checkbox"/>
                            車位
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>物業地址 *</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>業主 *</td>
                    <td>
                        <label>
                            <input type="radio"/>
                            是
                        </label>
                        <label>
                            <input type="radio"/>
                            否
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>有否按揭 *</td>
                    <td>
                        <label>
                            <input type="radio"/>
                            是
                        </label>
                        <label>
                            <input type="radio"/>
                            否
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>按揭結欠</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>私人貸款及信用卡結欠</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>申請按揭金額</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>選擇聯絡時間</td>
                    <td><input type="text"/></td>
                </tr>
                <tr>
                    <td>如何認識英皇財務</td>
                    <td>
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
                            巴士廣告
                        </label>
                        <label>
                            <input type="checkbox"/>
                            其他
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>申請人請附上以下資料(每個上傳文件必須少於 10MB 和需為 JPG, PNG 或 PDF 的格式)</td>
                    <td>
                        <label>
                            最近三個月之收入證明(如公司信，糧單及糧簿):
                            <input type="file"/>
                        </label>
                        <label>
                            身份證及工作證及/或公司咭片:
                            <input type="file"/>
                        </label>
                        <label>
                            最近一個月之住址證明(水、電費單及載有本人名之信件):
                            <input type="file"/>
                        </label>
                        <label>
                            自己物業需出示證明(如差餉單、供樓紙等):
                            <input type="file"/>
                        </label>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <label>
                <input type="checkbox"/>
                本人已詳細閱讀及同意 條款及細則
            </label>
            <label>
                <input type="checkbox"/>
                本人/吾等不同意基藥信貸將本人/吾等的個人資料使用及/或轉移作直接促銷之目的。
            </label>
        </div>
        <br/>
        <div>
            <button type="button">提交</button>
        </div>
    </div>;
}


export default MortgageForm;
