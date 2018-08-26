import React from 'react';

class MainPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./gh_bundle.css');
    return (
      <section className="mu-section">
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />

        <div className="genericSplash js-fullWidthContainer ">
          <div className="genericSplash__wrapper">
            <h1 className="mu__imageWrap" data-image-desktop="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_desktop_generic_hp.jpg" data-image-mobile="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_mobile_generic_hp.jpg" alt="THIS IS ASOS">
              <span className="spinner" />
              <img className="hero__image js-responsive-image" src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_desktop_generic_hp.jpg" data-breakpoint={768} data-contentwidth={1440} data-image-desktop="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_desktop_generic_hp.jpg" data-image-mobile="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_mobile_generic_hp.jpg" /></h1>
            <noscript>&lt;img class="image__data" src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_desktop_generic_hp.jpg" data-desktop-image="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/apr-2018/summer_mobile_generic_hp.jpg" alt="genericSplash"&gt;</noscript>
            <article className="genericSplash__copy">
              <div className="genericSplash__copyContainer">
                <h2 className="genericSplash__title">
                  <span className="highlight" style={{color: '#000000', background: '#FFFFFF', boxShadow: '10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF'}}>
                    THIS IS ASOS
                  </span>
                </h2>
                <p className="genericSplash__description">
                  <span className="highlight" style={{color: '#000000', background: '#FFFFFF', boxShadow: '10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF, 10px 0 0 #FFFFFF, -10px 0 0 #FFFFFF'}}>
                    Your fashion and style destination
                  </span>
                </p>
              </div>
              <div className="genericSplash__ctas">
                <div className="genericSplash__ctasContainer">
                  <a className="mu__cta" href="/women/?ctaref=HP|gen|top|women" target style={{color: '#000000', borderColor: '#FFFFFF', borderStyle: 'solid', borderWidth: 2, background: '#FFFFFF'}} data-hover-color="#FFFFFF" data-hover-border="#000000" data-hover-background="#000000"><span style={{width: 136}}>SHOP WOMEN</span></a>
                </div>
                <div className="genericSplash__ctasContainer">
                  <a className="mu__cta" href="/men/?ctaref=HP|gen|top|men" target style={{color: '#000000', borderColor: '#FFFFFF', borderStyle: 'solid', borderWidth: 2, background: '#FFFFFF'}} data-hover-color="#FFFFFF" data-hover-border="#000000" data-hover-background="#000000"><span style={{width: 136}}>SHOP MEN</span></a>
                </div>
              </div>
            </article>
            <article className="genericSplash__overlay">
              <div className="genericSplash__overlayContainer">
                <div className="genericSplash__serviceMessage ">
                  <a href="/customer-service/delivery/?ctaref=HP|gen|service|delivery" target="_self" className="genericSplash__message">                            <span className="genericSplash__messageContainer genericSplash__messageContainer--icon">
                      <img className="genericSplash__messageIcon" src="https://content.asos-media.com/-/media/images/components/generic-splash/icons/lorry.png" />
                    </span>
                    <span className="genericSplash__messageContainer genericSplash__messageContainer--copy">
                      <p className="genericSplash__messageCopy">FREE DELIVERY &amp; RETURNS</p>
                      <p className="genericSplash__messageCopy genericSplash__messageCopy--small">MORE INFO HERE</p>
                    </span>
                  </a>
                  <a href="/discover/students/asos-on-campus/student-validation/?ctaref=HP|gen|service|students" target="_self" className="genericSplash__message">                            <span className="genericSplash__messageContainer genericSplash__messageContainer--icon">
                      <img className="genericSplash__messageIcon" src="https://content.asos-media.com/-/media/images/components/generic-splash/icons/tagwhite.png" />
                    </span>
                    <span className="genericSplash__messageContainer genericSplash__messageContainer--copy">
                      <p className="genericSplash__messageCopy">STUDENTS: 10% OFF 24/7</p>
                      <p className="genericSplash__messageCopy genericSplash__messageCopy--small">+ MORE GOOD STUFF</p>
                    </span>
                  </a>
                  <a href="/customer-service/premier-delivery/?ctaref=HP|gen|service|premier" target="_self" className="genericSplash__message">                                <span className="genericSplash__messageContainer genericSplash__messageContainer--icon">
                      <img className="genericSplash__messageIcon" src="https://content.asos-media.com/-/media/images/components/generic-splash/icons/premier.png" />
                    </span>
                    <span className="genericSplash__messageContainer genericSplash__messageContainer--copy">
                      <p className="genericSplash__messageCopy">NEXT-DAY DELIVERY</p>
                      <p className="genericSplash__messageCopy genericSplash__messageCopy--small">ONLY £9.95 A YEAR</p>
                    </span>
                  </a>                  </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default MainPage;
