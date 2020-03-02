import React from "react";
import '../../index.css';


function Blog(){ 
    
    return  <div style={{
         marginTop: 40,
         height: 250
     }}>

<img className ="home1"src = "logo192.png" alt="" />

<div className = "centerbox">
    
    <div className = "leftcolumn">
        <div className= "flex-container3">
            <div>Banner+Slogan</div>
         </div> 
            <div className = "dotbox">
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">1</div>
            <div className = "dotbox">
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">2</div>         
            <div className="dotbox">
                <img className="dot" src = "../logo192.png "/>
                <div className="box1">3</div> 
                </div> 
            </div>
        </div>
 
     </div>

    <div className= "rightcolumn">
        <div className = "flex-container4">
            <div>calculator</div>
            </div>
    
     <div className = "flex-container4">
            <div>apply form</div>
            </div>
        </div>
    </div>
    </div>
}

export default Blog ;