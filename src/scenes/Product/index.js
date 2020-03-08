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
            <div className = "contactbox">address:xxxxxxxxxxxxx</div>
            <br></br>
            <div className = "contactbox">office hour: 0900-1900</div>
            <br></br>
            <div className = "contactbox">telephone:12345678</div>
            <br></br>
            <div className = "contactbox">email address:abcdefghijk</div>
        </div>
    </div>

}

export default Product;