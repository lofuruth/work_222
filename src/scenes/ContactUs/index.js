import React from 'react';
import GoogleMapReact from 'google-map-react';

import './ContactUs.css';


//contact us
function ContactUs() {
    return <div id="contact-us">
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

        <div className="content">
            <div>
                <div
                    style={{
                        flex: 1
                    }}
                >如有任何查詢歡迎留言</div>
                <div
                    style={{
                        flex: 1
                    }}
                >電話: +852 3700 0018</div>
                <div
                    style={{
                        flex: 1
                    }}
                >電郵: info@gearcredit.com</div>
                <div
                    style={{
                        flex: 1
                    }}
                >地址: 香港中環德輔道中104號詹氏商業大廈4樓全層</div>
            </div>
        </div>
    </div>

}

export default ContactUs;