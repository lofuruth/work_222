import React, { useEffect, useState } from 'react';
import Oneshop from 'oneshop.web';
import { Redirect } from 'react-router-dom';
import LoanForm from '../../components/forms/Loan';
import MortgageForm from '../../components/forms/Mortgage';


function User() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 60
            }}
        >
            <div
                style={{
                    width: 1024
                }}
            >
                <div
                    style={{
                        display: 'flex'
                    }}
                >
                    <MortgageForm/>
                    <LoanForm/>
                </div>
                <div>xxxxxx</div>
            </div>
        </div>
        
    );
}

export default User;

