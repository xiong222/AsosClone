import React from 'react';

class FashionDiscoveryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('../cp-bundle/cp-bundle-1.0.248.0.css');
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <section className="grid">
          <section className="grid-row">
            <section className="grid-column grid-column__width--1 grid-column__position--1">
              <section
                className="grid-imageWrapper  js-appendImage js-dynamicBackground dynamic-background-0 lazy-loaded"
                data-image-mobile="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_mobile.png"
                data-image-desktop="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_desktop.png"
                data-mobile-bgimage=""
                data-desktop-bgimage=""
                data-mobile-bgcolor=""
                data-desktop-bgcolor=""
                style={{ backgroundImage: 'none' }}
              >

                <noscript>
                  <img
                    className="hero__image-data"
                    src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_mobile.png"
                    data-desktop-image="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_desktop.png"
                    data-breakpoint="768"
                    alt="fashion discovery"
                  />
                </noscript>
                <img
                  className="hero__image js-responsive-image"
                  src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_desktop.png"
                  data-breakpoint="736"
                  data-contentwidth="1440"
                  data-image-desktop="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_desktop.png"
                  data-image-mobile="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/voting-phase/afd_hub_hero_mobile.png"
                />
              </section>
            </section>
          </section>
        </section>

        <section className="grid">
          <section className="grid-row">
            <section className="grid-column grid-column__width--1 grid-column__position--1">

              <section className="grid-text grid-text__position--center-center">
                <section className="grid-text__container">
                  <h2 className="grid-text__title " style={{ color: '#000000' }}>

                    Meet the winners of this year's competition
                  </h2>
                  <p className="grid-text__copy " style={{ color: '#000000' }}>
                    The winners of this year’s Fashion Discovery each scoop £50,000 of investment and one-to-one
                    mentoring from industry experts, as well as the opportunity to be stocked on ASOS for at least two
                    seasons. Plus, there’s a People’s Pick winner, voted for by the public, who will have its collection
                    stocked for a season, too. Scroll down to meet the winners.
                  </p>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="mu-section is-small no-padding-desktop no-padding-mobile" >


          <article className="moment">
            <a
              href="/fashion-discovery/finalists/vote-lyph/?ctaref=winner|lyph"
              target="_blank"
              className="moment__imageLink"
              data-analytics-id="row-winner1-mulink"
            >
            </a>
            <div className="moment__mediaSection">

              <div className="moment__imageWrap">
                <img
                  className="moment__image lazy-loaded"
                  src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/lyph.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=4D04FB5375208E8BAB7F36E37E89561C36AB9886"
                  data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/lyph.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=4D04FB5375208E8BAB7F36E37E89561C36AB9886"
                  alt="lyph"
                />
              </div>
            </div>
            <div className="moment__textSection">

              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{ color: '#000000' }}>Judges' winner: LYPH</h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{ color: '#000000' }}>Our champ seamlessly brings womenswear and
                  menswear together
                </p>
              </div>

              <div className="moment__buttons">
                <a
                  className="moment__cta js-buttonHover"
                  href="/fashion-discovery/finalists/vote-lyph/?ctaref=winner|lyph"
                  target="_blank"
                  style={{ color: '#000000', borderColor: '#000000', background: '#FFFFFF' }}
                  data-hover-color="#FFFFFF"
                  data-hover-background="#000000"
                  data-analytics-id="row-winner1-readmore"
                ><span>READ MORE</span>
                </a>
              </div>
            </div>
          </article>


          <article className="moment">
            <a
              href="/fashion-discovery/finalists/vote-wesley-harriott/?ctaref=winner|wesleyharriott"
              target="_blank"
              className="moment__imageLink"
              data-analytics-id="row-winner2-mulink"
            >
            </a>
            <div className="moment__mediaSection">

              <div className="moment__imageWrap">
                <img
                  className="moment__image lazy-loaded"
                  src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/wesley_harriott.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=464C8FF24433C0739ED8ECEF6C1C353A519FD4E0"
                  data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/wesley_harriott.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=464C8FF24433C0739ED8ECEF6C1C353A519FD4E0"
                  alt="wesley"
                />
              </div>
            </div>
            <div className="moment__textSection">

              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{ color: '#000000' }}>Judges' winner: Wesley Harriott</h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{ color: '#000000' }}>Emerging victorious, it's this London-based
                  purveyor of multifunctional fashion
                </p>
              </div>

              <div className="moment__buttons">
                <a
                  className="moment__cta js-buttonHover"
                  href="/fashion-discovery/finalists/vote-wesley-harriott/?ctaref=winner|wesleyharriott"
                  target="_blank"
                  style={{ color: '#000000', borderColor: '#000000', background: '#FFFFFF' }}
                  data-hover-color="#FFFFFF"
                  data-hover-background="#000000"
                  data-analytics-id="row-winner2-readmore"
                ><span>READ MORE</span>
                </a>
              </div>
            </div>
          </article>


          <article className="moment">
            <a
              href="/fashion-discovery/finalists/vote-desree-akorahson/?ctaref=winner|desree"
              target="_blank"
              className="moment__imageLink"
              data-analytics-id="row-winner3-mulink"
            >
            </a>
            <div className="moment__mediaSection">

              <div className="moment__imageWrap">
                <img
                  className="moment__image lazy-loaded"
                  src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/desree_akorahson.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=1EB4411AC2B261CD2CB5F9D369705E0C7D3FCA51"
                  data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/winners_moments/desree_akorahson.jpg?h=646&amp;w=510&amp;bc=000000&amp;hash=1EB4411AC2B261CD2CB5F9D369705E0C7D3FCA51"
                  alt="desree"
                />
              </div>
            </div>
            <div className="moment__textSection">

              <div className="moment__titleWrap">
                <h3 className="moment__title js-dynamicText" style={{ color: '#000000' }}>People's Pick winner: Desree
                  Akorahson
                </h3>
              </div>
              <div className="moment__paragraphWrap">
                <p className="moment__paragraph" style={{ color: '#000000' }}>Chosen by you, this 60s-inspired brand is set
                  for big things
                </p>
              </div>

              <div className="moment__buttons">
                <a
                  className="moment__cta js-buttonHover"
                  href="/fashion-discovery/finalists/vote-desree-akorahson/?ctaref=winner|desree"
                  target="_blank"
                  style={{ color: '#000000', borderColor: '#000000', background: '#FFFFFF' }}
                  data-hover-color="#FFFFFF"
                  data-hover-background="#000000"
                  data-analytics-id="row-winner3-readmore"
                ><span>READ MORE</span>
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="grid">
          <section
            className="grid-backgroundWrapper__row js-dynamicBackground  js-fullWidthContainer dynamic-background-1 lazy-loaded"
            data-mobile-bgcolor=""
            data-desktop-bgcolor="#eeeeee"
            data-mobile-bgimage=""
            data-desktop-bgimage=""
            style={{ width: '100%', marginLeft: 'auto', backgroundImage: 'none' }}
          >
            <section className="grid-row">
              <section className="grid-column grid-column__width--1 grid-column__position--1">

                <section className="grid-text grid-text__position--center-center">
                  <section className="grid-text__container">
                    <h2 className="grid-text__title " style={{ color: '#000000' }}>

                      How we picked the winners
                    </h2>
                  </section>
                </section>
              </section>
            </section>
            <section className="grid-row">
              <section className="grid-column grid-column__width--1/3 grid-column__position--1">

                <section className="grid-text grid-text__position--center-top">
                  <section className="grid-text__container">
                    <h2 className="grid-text__title " style={{ color: '#000000' }}>

                      Step 1
                    </h2>
                    <p className="grid-text__copy " style={{ color: '#000000' }}>
                      After two rounds of applications spanning three months, we narrowed entrants down to the final 10.
                    </p>
                  </section>
                </section>
              </section>
              <section className="grid-column grid-column__width--1/3 grid-column__position--2">

                <section className="grid-text grid-text__position--center-top">
                  <section className="grid-text__container">
                    <h2 className="grid-text__title " style={{ color: '#000000' }}>

                      Step 2
                    </h2>
                    <p className="grid-text__copy " style={{ color: '#000000' }}>
                      After mentoring events and meeting the judging panel, we chose two final winners, along with a
                      third People’s Pick award, chosen by the public.
                    </p>
                  </section>
                </section>
              </section>
              <section className="grid-column grid-column__width--1/3 grid-column__position--3">

                <section className="grid-text grid-text__position--center-top">
                  <section className="grid-text__container">
                    <h2 className="grid-text__title " style={{ color: '#000000' }}>

                      Step 3
                    </h2>
                    <p className="grid-text__copy " style={{ color: '#000000' }}>
                      The winners then begin their ASOS mentoring while they work with our retail team to produce their
                      first collection to be sold on ASOS later that year.
                    </p>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="mu-section  ">
          <article className="productCat ">

            <div
              className="productCat__background js-fullWidthContainer js-dynamicBackground dynamic-background-2 lazy-loaded"
              data-mobile-bgcolor="#000000"
              data-desktop-bgcolor="#000000"
              style={{ backgroundImage: 'none', width: '100%', marginLeft: '-238px' }}
            >
            </div>
            <div className="productCat__titleWrap">
              <h2
                className="productCat__title"
                style={{ color: '#ffffff', backgroundColor: '#000000; box-shadow: 10px 0 0 #000000, -10px 0 0 #000000, 10px 0 0 #000000, -10px 0 0 #000000, 10px 0 0 #000000, -10px 0 0 #000000, 10px 0 0 #000000, -10px 0 0 #000000' }}
              >Meet
                the panel
              </h2>
            </div>

            <div
              className="carousel js-carousel carouselItems-5 carousel-0"
              data-carousel-name="Meet the panel"
              data-tracking-name="Judges"
            >
              <div className="carousel__controls" data-button-color="#ffffff">
                <button className="previous js-previous is-disabled"></button>
                <button className="next js-next"></button>
              </div>
              <ul className="carousel__list js-carouselList">
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-susie"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_susie.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=0737D5B0E2D9CC7BE659D02E8A59792D98E1ABBD"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_susie.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=0737D5B0E2D9CC7BE659D02E8A59792D98E1ABBD"
                        alt=" Susanna Lau"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-nick"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_nick.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=37EA9DE6FB6045965DA9C232A3F8145EA98C1274"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_nick.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=37EA9DE6FB6045965DA9C232A3F8145EA98C1274"
                        alt="Nick Beighton"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-gemma"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_gemma.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=E04906973A370D271AF817F32679B8DC91C8BB14"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_gemma.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=E04906973A370D271AF817F32679B8DC91C8BB14"
                        alt="Gemma Shiel"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-katie"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_katie.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=63F906E72DBA87872E90E56D26B17B9084CC4AA5"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_katie.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=63F906E72DBA87872E90E56D26B17B9084CC4AA5"
                        alt="Katie Baron"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-jo"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_jo.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=2FC15B8512F7210E480A41E41F8B452601F005C6"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_jo.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=2FC15B8512F7210E480A41E41F8B452601F005C6"
                        alt="judge"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-hilary"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_hilary.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=400E3587066069417264471B3A78637C17906097"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_hilary.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=400E3587066069417264471B3A78637C17906097"
                        alt="judge"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-john"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/download.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=A75BB832C809C5DE2A2A43CBC8AB7C1C565F2C2A"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/download.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=A75BB832C809C5DE2A2A43CBC8AB7C1C565F2C2A"
                        alt="judge"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-elgar"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="data:image/svg+xml;charset=utf8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' style%3D'stroke-width: 0px; background-color: %23eee;' viewBox%3D'0 0 132 169'%2F%3E"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/panel/afd_panel_elgar.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=19F321D9FAFCD56E2C2A4E8E271714D59A8BBDF4"
                        alt="elgar"
                        className="carousel__image"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#000000' }}>
                      <div className="carousel__label"><span className="carousel__labelText">ELGAR</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.asos.com/women/fashion-feed/2017_09_04-mon/fashion-discovery-judges-bios/?ctaref=fashiondiscovery|judges"
                    target="_self"
                    rel="nofollow"
                    data-analytics-id="row-judges-elgar"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="data:image/svg+xml;charset=utf8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' style%3D'stroke-width: 0px; background-color: %23eee;' viewBox%3D'0 0 132 169'%2F%3E"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/afd_panel_laura.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=970DA6ADD6DBF755B9D2B0F5788001A965ECC37C"
                        alt=""
                        className="carousel__image"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#000000' }}>
                      <div className="carousel__label"><span className="carousel__labelText">ELGAR</span></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="mu-section  ">
          <article className="productCat ">

            <div
              className="productCat__background js-fullWidthContainer js-dynamicBackground dynamic-background-3 lazy-loaded"
              data-mobile-bgcolor="#ffffff"
              data-desktop-bgcolor="#ffffff"
              style={{ backgroundImage: 'none', width: '100%', marginLeft: '-238px' }}
            >
            </div>
            <div className="productCat__titleWrap">
              <h2
                className="productCat__title"
                style={{ color: '#000000', backgroundColor: '#ffffff', boxShadow: '10px 0 0 #ffffff, -10px 0 0 #ffffff, 10px 0 0 #ffffff, -10px 0 0 #ffffff, 10px 0 0 #ffffff, -10px 0 0 #ffffff, 10px 0 0 #ffffff, -10px 0 0 #ffffff' }}
              >The
                finalists
              </h2>
            </div>

            <div
              className="carousel js-carousel carouselItems-5 carousel-1"
              data-carousel-name="The finalists"
              data-tracking-name="finalists carousel"
            >
              <div className="carousel__controls" data-button-color="#000000">
                <button className="previous js-previous is-disabled"></button>
                <button className="next js-next"></button>
              </div>
              <ul className="carousel__list js-carouselList">
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-bans-illustration/?ctaref=fashiondiscovery|bansillustration"
                    target="|Custom"
                    data-analytics-id="row-finalistscarousel-bansillustration"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_bans.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=DD01E430AB82D6C1546CC2BB2B1FC71626E0F860"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_bans.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=DD01E430AB82D6C1546CC2BB2B1FC71626E0F860"
                        alt="bans"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Bans Illustration</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-carbs/?ctaref=fashiondiscovery|CARBS"
                    target="|Custom"
                    data-analytics-id="row-finalistscarousel-carbs"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_carbs.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=393F06B05A987A0D58ADF7CBECC5ABA6DDC490CF"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_carbs.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=393F06B05A987A0D58ADF7CBECC5ABA6DDC490CF"
                        alt="carbs"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">CARBS</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-desree-akorahson/?ctaref=fashiondiscovery|DesreeAkorahson"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-desreeakorahson"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_desree_akorahson.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=E813505AB99E12DCE93D30BCCDAA61918C6788A1"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_desree_akorahson.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=E813505AB99E12DCE93D30BCCDAA61918C6788A1"
                        alt="desree"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Desree Akorahson</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-fortie-label/?ctaref=fashiondiscovery|FortieLabel"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-fortielabel"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_fortie_label.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=CE62CE6B9531ED886876E060DC4DD12942D41254"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_fortie_label.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=CE62CE6B9531ED886876E060DC4DD12942D41254"
                        alt="fortie"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Fortie Label</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-katie-gementera/?ctaref=fashiondiscovery|KatieGementera"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-katiegementera"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_katie_gementera.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=C17954D5AD95E1236E8F737E5E4A50F9270CB335"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_katie_gementera.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=C17954D5AD95E1236E8F737E5E4A50F9270CB335"
                        alt="katie"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Katie Gementera</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-krasimira-stoyneva/?ctaref=fashiondiscovery|KrasimiraStoyneva"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-krasimirastoyneva"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_krasmira_stoyneva.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=2A76EDD0F01E6BD7632C1E6C34A2E3ACE9C42CC6"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_krasmira_stoyneva.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=2A76EDD0F01E6BD7632C1E6C34A2E3ACE9C42CC6"
                        alt="krasmira"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Krasimira Stoyneva</span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-lyph/?ctaref=fashiondiscovery|LYPH"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-lyph"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_lyph.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=60FDC5AFBD6A2A31A9FEC6D6B5003C74294D18FF"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_lyph.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=60FDC5AFBD6A2A31A9FEC6D6B5003C74294D18FF"
                        alt="lyph"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">LYPH</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-sullen-girl/?ctaref=fashiondiscovery|SullenGirl"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-sullengirl"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_sullen_girl.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=1B4F83CCDACEEB780C8DF7DB6BE6CDB775EA5187"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_sullen_girl.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=1B4F83CCDACEEB780C8DF7DB6BE6CDB775EA5187"
                        alt="sullen girl"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Sullen Girl</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-tolu-coker/?ctaref=fashiondiscovery|ToluCoker"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-tolucoker"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_tolu_coker.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=7B539E6656F6B3BE649FD4A51EABC209601ADF24"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_tolu_coker.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=7B539E6656F6B3BE649FD4A51EABC209601ADF24"
                        alt="tolu"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Tolu Coker</span></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/fashion-discovery/finalists/vote-wesley-harriott/?ctaref=fashiondiscovery|WesleyHarriott"
                    target="_blank"
                    data-analytics-id="row-finalistscarousel-wesleyharriott"
                  >
                    <div className="carousel__imageWrap">
                      <img
                        src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_wesley_harriott.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=795C2CE8BC52A26FD87FCDF37EA7F0B99C843B24"
                        data-src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/winners-phase/01_wesley_harriott.jpg?h=289&amp;w=226&amp;bc=000000&amp;hash=795C2CE8BC52A26FD87FCDF37EA7F0B99C843B24"
                        alt="wesley"
                        className="carousel__image lazy-loaded"
                      />
                    </div>
                    <div className="carousel__labelWrap" style={{ color: '#000000', backgroundColor: '#ffffff' }}>
                      <div className="carousel__label"><span className="carousel__labelText">Wesley Harriott</span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="grid">
          <section className="grid-row">
            <section className="grid-column grid-column__width--1 grid-column__position--1">

              <section className="grid-text grid-text__position--center-center">
                <section className="grid-text__container">
                  <h2 className="grid-text__title " style={{ color: '#000000', display: 'none' }}>

                  </h2>
                  <div className="grid-text__buttons">

                    <a
                      className="grid-text__cta js-buttonHover"
                      href="/fashion-discovery/faq/?ctaref=fashiondiscovery|winner|faqs"
                      style={{ color: '#ffffff', borderColor: '#FF00FF', background: '#FF00FF' }}
                      data-hover-color="#FFFFFF"
                      data-hover-border="#000000"
                      data-hover-background="#000000"
                    >
                      <span>FAQS</span>
                    </a>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </section>

        <section className="mu-section hero js-fullWidthContainer" style={{ width: '100%', marginLeft: 'auto' }}>

          <div className="hero__link"><a className="hero__muLink" data-analytics-id="row-footer-mulink">
            <div
              className="hero__imageWrap js-appendImage"
              data-image-mobile="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_mobile_footer.png"
              data-image-desktop="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_desktop_footer.png"
              alt="ASOS Fashion DIscovery 2017"
              data-image-desktop-height="98"
              data-image-mobile-height="170"
            >
              <img
                className="hero__image js-responsive-image"
                src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_desktop_footer.png"
                data-breakpoint="736"
                data-contentwidth="1440"
                data-image-desktop="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_desktop_footer.png"
                data-image-mobile="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_mobile_footer.png"
              />
            </div>
            <noscript><img
              className="image__data"
              src="https://content.asos-media.com/-/media/hubs/fashion-discovery/2017/application-phase/landing-page/afd_hero_mobile_footer.png"
              alt="ASOS Fashion Discovery"
            />
            </noscript>
            <article className="hero__holder">
              <div className="hero-copy is-medium is-mobile-small left desktop-center mobile-center">
                <div className="hero-copy__overflow">
                  <div className="hero-title">
                    <div className="hero-title__container is-desktop ">
                      <h2 className="hero-title__text js-dynamicText" style={{ color: '#000000' }}>
                      </h2>
                    </div>
                    <div className="hero-title__container is-mobile ">
                      <h2 className="hero-title__text" style={{ color: '#000000' }}>

                      </h2>
                    </div>
                  </div>
                </div>
                <div className="hero__buttons">
                </div>
              </div>

              <div className="hero-slug">
                <span className="hero-slug__highlight" style={{ color: '#000000' }}>

                </span>
              </div>
            </article>
          </a>
          </div>
        </section>
      </div>
    );
  }
}

export default FashionDiscoveryPage;
