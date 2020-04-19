import React from "react";
//import './footer.css';

function Footer() {
  return (
    <div id="footer"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
      }}
    >
      <div
        style={{
          width: 1024,
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontSize: 13
          }}
        >忠告：借錢梗要還，咪俾錢中介 Warning: You have to repay your loans. Don’t pay any intermediaries.</p>
      </div>
    </div>
  );
}

export default Footer;