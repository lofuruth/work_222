import React from 'react';
import GoogleMapReact from 'google-map-react';

//contact us

function Product (){
    
    return <div style={{
        marginTop: 10,
        height: 500
    }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={{
                lat: 22.28552,
                lng: 114.15769
            }}
            defaultZoom={16}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => {}}
        >
            <div
                lat={22.28552}
                lng={114.15769}
                text="My Marker"
            >hahahah</div>
        </GoogleMapReact>
        <div className = "contactus">
            <div className = "contactbox">如有任何查詢歡迎留言<br></br>Tell us about your issue so we can help you more quickly.</div>
            <br></br>
            <div className = "contactbox">電話:  PHONE:3700 0018</div>
            <br></br>
            <div className = "contactbox">電郵:  EMAIL:info@gearcredit.com</div>
            <br></br>
            <div className = "contactbox">地址:香港中環德輔道中104號詹氏商業大廈4樓全層<br></br>ADDRESS:
4/F, Jim’s Commercial Building, 104 Des Voeux Road Central, Central, Hong Kong</div>
        </div>
    </div>

}

export default Product;