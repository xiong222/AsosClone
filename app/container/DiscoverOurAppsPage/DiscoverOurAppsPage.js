import React from 'react';

class DiscoverOurAppsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./style.css');

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <div className="creative">
          <div className="section section-1">
            <h1 className="aligncenter upperc">ASOS SHOPPING APP</h1>
            <p className="aligncenter">Get this for iOS or Android and you’ll have 850+ brands in your pocket, with free delivery and easy returns – heaven, right? Available on your phone, Apple Watch or tablet, a card scanner does all the hard work at checkout and we’ll send you sales alerts. Your Saved Items will all be in there and we’ll take note of what you've bought and show you even more of what you want on your Your Edit page. Best (free) investment ever.</p>
            <div className="wrap">
              <div className="app shop-app1 floatleft">
                <a href="https://itunes.apple.com/gb/app/asos/id457876088?mt=8" target="_blank">
                  <img className="device" src="http://images.asos.com/htmlpages/160404-ASOS-Apps/shop-app-iphone.jpg" alt="Download the Asos Shopping App on your IPhone and IPod Touch" />
                  <h5 className="aligncenter">iPhone / iPod Touch</h5>
                  <div className="apple-btn"><p>applebtn</p></div>
                </a>
              </div>
              <div className="app shop-app2 floatleft">
                <a href="https://itunes.apple.com/gb/app/asos/id457876088?mt=8' target='_blank" target="_blank">
                  <img className="device" src="http://images.asos.com/htmlpages/160404-ASOS-Apps/shop-app-ipad.jpg" alt="Download the Asos Shopping App on your IPad and IPad Mini" />
                  <h5 className="aligncenter">iPad / iPad Mini</h5>
                  <div className="apple-btn"><p>applebtn</p></div>
                </a>
              </div>
              <div className="app shop-app3 floatleft">
                <a href="https://play.google.com/store/apps/details?id=com.asos.app" target="_blank">
                  <img className="device" src="http://images.asos.com/htmlpages/160404-ASOS-Apps/shop-app-android.jpg" alt="Download the Asos Shopping App from GooglePlay for your Android" />
                  <h5 className="aligncenter">Android phone / tablet</h5>
                  <div className="android-btn"><p>applebtn</p></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverOurAppsPage;
