import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoanForm from '../../components/forms/Loan';
import MortgageForm from '../../components/forms/Mortgage';

import './user.css';


function User(props) {
    const TYPE = props.match.params.type || 'loan';
    return (
        <div id="apply">
            <div
                style={{
                    width: 1024
                }}
            >
                <div
                    style={{
                        textAlign: 'center',
                        backgroundColor: '#008D83',
                        padding: '13px 0',
                        fontSize: 15
                    }}
                >
                    <Link to="/apply/loan" style={{color: '#fff', marginRight: 5}}>私人貸款</Link>
                    <Link to="/apply/mortgage" style={{color: '#fff', marginLeft: 5}}>物業按揭</Link>
                </div>
                <div className="form">
                    {TYPE == 'mortgage' && <MortgageForm/>}
                    {TYPE == 'loan' && <LoanForm/>}
                </div>
            </div>
        </div>
        
    );
}

export default User;

