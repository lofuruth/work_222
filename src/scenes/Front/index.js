import React from "react";
import '../../index.css';
import { Slide } from 'react-slideshow-image';


function Front (){

    return <div style={{
        marginTop: 50,
        height: 500
    }}>

        <img className ="home1"src = "logo192.png" />
    <div className = "dot1" >
                
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">
                    content
                </div>
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">
                    content
                </div>
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">
                    content
                </div>
            </div>
            
    </div>;

}

export default Front ;