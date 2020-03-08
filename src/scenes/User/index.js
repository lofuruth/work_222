import React, { useEffect, useState } from 'react';
import Oneshop from 'oneshop.web';
import { Redirect } from 'react-router-dom';
import Profile from './Profile';
import './user.css';
import '../../index.css';


function User(props){
    
    var [profile, setProfile] = useState(null);
    var [isLoading, setIsLoading] = useState(true);
    var OS = new Oneshop();

    useEffect(() => {
        OS.consumer.profile.get()
        .then((rows) => {
            var user = rows[0];
            setProfile(user);
            setIsLoading(false);
        })
        .catch((error) => {
            setIsLoading(false);
            setProfile(null);
        });
    },[]);

    function loadingScreen(){
    
        return (<div className="loading">
            Loading...
        </div>);
    }

    return (
        
        <div>
            
            <div className = "Qbox">
            {/* <div className="wrapper">
            { isLoading ? loadingScreen() : (profile ? <Profile profile={profile}/> : <Redirect to="/users/login"/>)}
            </div> */}
            <div className = "Qleft" >
            xxxxxx</div>
            <div className = "Qright">xxxxxx</div>
        </div>
            <div className = "Qdown">xxxxxx</div>
        </div>
        
        
    );
}

export default User;

