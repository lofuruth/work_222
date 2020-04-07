import React from 'react';
import GoogleMapReact from 'google-map-react';

//contact us

function ContactUs() {
    return <div
        style={{
            marginTop: 40
        }}
    >
        <div
            style={{
                height: 380
            }}
        >
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
        </div>

        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: 60
            }}
        >
            <div
                style={{
                    width: 1024,
                    display: 'flex'
                }}
            >
                <div
                    style={{
                        flex: 1
                    }}
                >如有任何查詢歡迎留言<br></br>Tell us about your issue so we can help you more quickly.</div>
                <div
                    style={{
                        flex: 1
                    }}
                >電話: 3700 0018</div>
                <div
                    style={{
                        flex: 1
                    }}
                >電郵: info@gearcredit.com</div>
                <div
                    style={{
                        flex: 1
                    }}
                >地址: 香港中環德輔道中104號詹氏商業大廈4樓全層<br></br>ADDRESS:
    4/F, Jim’s Commercial Building, 104 Des Voeux Road Central, Central, Hong Kong</div>
            </div>
        </div>
    </div>

}

export default ContactUs;