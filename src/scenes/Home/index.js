import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../../index.css';



function Home (){

    return <div style={{
        marginTop: 50,
        height: 500
    }}>
        <img className = "home1" src = "../logo192.png"  />
        
        <div className ="dot1">
            <div>
                content
                <span class="dot"></span>

            </div> 
            <div className="box1">
                content
            </div>      
            <div>
                content
                    <span class="dot"></span>
            </div>
            <div className="box1">
                content
            </div>
            <div>
                content
                    <span class="dot"></span>
            </div>
            <div className="box1">
                content
            </div>
        </div>
    </div>
}

export default Home;