import React from 'react';

class AboutPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('../cp-bundle/cp-bundle-1.0.248.0.css');

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <section className="mu-section">
          <div className="header">
            <div className="header__titleWrap">
              <h1 className="header__title" style={{color: '#000000'}}>
                About ASOS.
              </h1>
            </div>
            <div className="header__copyWrap">
              <p className="header__copy" style={{color: '#000000'}}>
                Everything you wanted to know about your fave fashion brand. And then some.                   </p>
            </div>
          </div>
        </section>
        <section className="mu-section is-small no-padding-desktop no-padding-mobile" style={{}}>
          <article className="moment">
            <a href="/about/who-we-are/?ctaref=aboutus|whoweare" target="_self" className="moment__imageLink" data-analytics-id="com-whoweare-mulink" />
            <div className="moment__mediaSection">
              <div className="moment__imageWrap">
                <img className="moment__image lazy-loaded" src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-1.jpg?h=646&w=510&bc=000000&hash=E7682752BA5D2810F65A1DBED93AF725061895C3" data-src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-1.jpg?h=646&w=510&bc=000000&hash=E7682752BA5D2810F65A1DBED93AF725061895C3" alt="About ASOS" />
              </div>
            </div>
            <div className="moment__textSection">
              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{color: '#000000'}}>Who we are</h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{color: '#000000'}}>Your biggest fans, that's who</p>
              </div>
              <div className="moment__buttons">
                <a className="moment__cta js-buttonHover" href="/about/who-we-are/?ctaref=aboutus|whoweare" target="_self" style={{color: '#000000', borderColor: '#000000', background: '#FFFFFF'}} data-hover-color="#FFFFFF" data-hover-background="#000000" data-analytics-id="com-whoweare-readtheasos101"><span>READ THE ASOS 101</span></a>
              </div>
            </div>
          </article>
          <article className="moment">
            <a href="/about/asos-brands/?ctaref=aboutus|asosbrands" target="_self" className="moment__imageLink" data-analytics-id="com-asosbrands-mulink" />
            <div className="moment__mediaSection">
              <div className="moment__imageWrap">
                <img className="moment__image lazy-loaded" src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-2.jpg?h=646&w=510&bc=000000&hash=443F1D923C6BBB03A4F0F6053726E1767B611F66" data-src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-2.jpg?h=646&w=510&bc=000000&hash=443F1D923C6BBB03A4F0F6053726E1767B611F66" alt="About ASOS" />
              </div>
            </div>
            <div className="moment__textSection">
              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{color: '#000000'}}>The ASOS Brands</h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{color: '#000000'}}>Made by us, loved by you</p>
              </div>
              <div className="moment__buttons">
                <a className="moment__cta js-buttonHover" href="/about/asos-brands/?ctaref=aboutus|asosbrands" target="_self" style={{color: '#000000', borderColor: '#000000', background: '#FFFFFF'}} data-hover-color="#FFFFFF" data-hover-background="#000000" data-analytics-id="com-asosbrands-rightthisway"><span>RIGHT THIS WAY</span></a>
              </div>
            </div>
          </article>
          <article className="moment">
            <a href="/about/asos-experience/?ctaref=aboutus|asosexperience" target="_self" className="moment__imageLink" data-analytics-id="com-asosexperience-mulink" />
            <div className="moment__mediaSection">
              <div className="moment__imageWrap">
                <img className="moment__image lazy-loaded" src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-3.jpg?h=646&w=510&bc=000000&hash=50F7AE82FA68897BE80E3F9E0C00A4F6E0BAF5CE" data-src="https://content.asos-media.com/-/media/hubs/about-us/about-asos/about-asos-3.jpg?h=646&w=510&bc=000000&hash=50F7AE82FA68897BE80E3F9E0C00A4F6E0BAF5CE" alt="About ASOS" />
              </div>
            </div>
            <div className="moment__textSection">
              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{color: '#000000'}}>The ASOS experience</h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{color: '#000000'}}>Cos there's so much more to us</p>
              </div>
              <div className="moment__buttons">
                <a className="moment__cta js-buttonHover" href="/about/asos-experience/?ctaref=aboutus|asosexperience" target="_self" style={{color: '#000000', borderColor: '#000000', background: '#FFFFFF'}} data-hover-color="#FFFFFF" data-hover-background="#000000" data-analytics-id="com-asosexperience-discoveritnow"><span>DISCOVER IT NOW</span></a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default AboutPage;
