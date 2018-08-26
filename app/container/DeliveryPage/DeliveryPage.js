import React from 'react';

class DeliveryPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./style.css');
    return (
      <div className="creative delivery-and-returns" id="creative">
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <header className="dr-header">
          <h1 className="dr-header_title">Delivery And Returns</h1>
          <div className="dr-header_copy"><p>See below for information about the delivery &amp; returns options in your country</p></div>
        </header>{/*dr-tabs.html*/}
        <div className="dr-tabs">
          <ul className="dr-tabs_list">
            <li className="dr-tabs_tab is-active">
              <a href="/customer-service/delivery/" className="dr-tabs_link">                <span className="dr-tabs_copy delivery">Delivery</span>
              </a>      </li>
            <li className="dr-tabs_tab ">
              <a href="/customer-service/returns/" className="dr-tabs_link">                <span className="dr-tabs_copy returns">Returns</span>
              </a>      </li>
          </ul>
        </div>
        <section className="dr-change-country dr-modal_component">
          <div className="dr-country-selector">
            <span className="dr-country-selector_copy">Deliver to</span>
            <span className="dr-country-selector_selection ua">Ukraine</span>
            <button className="dr-country-selector_button js-open-modal">Change</button>
          </div>
          <div className="dr-country-picker dr-modal_overlay">
            <div className="dr-modal">
              <header className="dr-modal_header">
                <h2 className="dr-modal_title">Select Country</h2>
              </header>
              <div className="dr-country-picker_search">
                <input className="dr-country-picker_input icon-search" data-bind="textInput: searchFilter" type="text" name="search" placeholder="Start typing to search..." />
                <span className="dr-country-picker_clearsearch icon-close" data-bind="click: clearSearch">Clear</span>
                <div className="dr-message dr-message--error icon-exclamation" data-bind="css: { 'is-active': filteredCountries() >= 0 && searchFilter() !='' }" data-serviceerror="Sorry, we're having some technical difficulties right now. Please try again soon!">
                  <div className="dr-message_copy">
                    <p>Oops! No results found </p>
                  </div>
                </div>
              </div>
              <div className="dr-modal_content">
                <ul className="dr-country-picker_list" data-bind="foreach:{data:filteredCountries, as:'country'}">
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country af" href="?country=af" data-country="af">Afghanistan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ax" href="?country=ax" data-country="ax">Aland Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country al" href="?country=al" data-country="al">Albania</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country dz" href="?country=dz" data-country="dz">Algeria</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country as" href="?country=as" data-country="as">American Samoa</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ad" href="?country=ad" data-country="ad">Andorra</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ao" href="?country=ao" data-country="ao">Angola</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ai" href="?country=ai" data-country="ai">Anguilla</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country aq" href="?country=aq" data-country="aq">Antarctica</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ag" href="?country=ag" data-country="ag">Antigua and Barbuda</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ar" href="?country=ar" data-country="ar">Argentina</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country am" href="?country=am" data-country="am">Armenia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country aw" href="?country=aw" data-country="aw">Aruba</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country au" href="?country=au" data-country="au">Australia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country at" href="?country=at" data-country="at">Austria</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country az" href="?country=az" data-country="az">Azerbaijan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bs" href="?country=bs" data-country="bs">Bahamas</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bh" href="?country=bh" data-country="bh">Bahrain</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bd" href="?country=bd" data-country="bd">Bangladesh</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bb" href="?country=bb" data-country="bb">Barbados</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country by" href="?country=by" data-country="by">Belarus</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country be" href="?country=be" data-country="be">Belgium</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bz" href="?country=bz" data-country="bz">Belize</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bj" href="?country=bj" data-country="bj">Benin</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bm" href="?country=bm" data-country="bm">Bermuda</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bt" href="?country=bt" data-country="bt">Bhutan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bo" href="?country=bo" data-country="bo">Bolivia, Plurinational State of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bq" href="?country=bq" data-country="bq">Bonaire, Sint Eustatius and Saba</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ba" href="?country=ba" data-country="ba">Bosnia and Herzegovina</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bw" href="?country=bw" data-country="bw">Botswana</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country br" href="?country=br" data-country="br">Brazil</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country io" href="?country=io" data-country="io">British Indian Ocean Territory</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bn" href="?country=bn" data-country="bn">Brunei Darussalam</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bg" href="?country=bg" data-country="bg">Bulgaria</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bf" href="?country=bf" data-country="bf">Burkina Faso</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bi" href="?country=bi" data-country="bi">Burundi</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kh" href="?country=kh" data-country="kh">Cambodia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cm" href="?country=cm" data-country="cm">Cameroon</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ca" href="?country=ca" data-country="ca">Canada</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cv" href="?country=cv" data-country="cv">Cape Verde</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ky" href="?country=ky" data-country="ky">Cayman Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cf" href="?country=cf" data-country="cf">Central African Republic</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country td" href="?country=td" data-country="td">Chad</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cl" href="?country=cl" data-country="cl">Chile</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cn" href="?country=cn" data-country="cn">China</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cx" href="?country=cx" data-country="cx">Christmas Island (Australia)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cc" href="?country=cc" data-country="cc">Cocos (Keeling) Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country co" href="?country=co" data-country="co">Colombia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country km" href="?country=km" data-country="km">Comoros</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cd" href="?country=cd" data-country="cd">Congo, the Democratic Republic of the</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cg" href="?country=cg" data-country="cg">Congo, the Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ck" href="?country=ck" data-country="ck">Cook Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cr" href="?country=cr" data-country="cr">Costa Rica</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ci" href="?country=ci" data-country="ci">Cote d'Ivoire</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country hr" href="?country=hr" data-country="hr">Croatia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cu" href="?country=cu" data-country="cu">Cuba</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cw" href="?country=cw" data-country="cw">Curacao</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cy" href="?country=cy" data-country="cy">Cyprus</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country cz" href="?country=cz" data-country="cz">Czech Republic</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kp" href="?country=kp" data-country="kp">Democratic People's Republic of Korea (North)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country dk" href="?country=dk" data-country="dk">Denmark</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country dj" href="?country=dj" data-country="dj">Djibouti</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country dm" href="?country=dm" data-country="dm">Dominica</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country do" href="?country=do" data-country="do">Dominican Republic</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ec" href="?country=ec" data-country="ec">Ecuador</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country eg" href="?country=eg" data-country="eg">Egypt</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sv" href="?country=sv" data-country="sv">El Salvador</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gq" href="?country=gq" data-country="gq">Equatorial Guinea</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country er" href="?country=er" data-country="er">Eritrea</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ee" href="?country=ee" data-country="ee">Estonia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country et" href="?country=et" data-country="et">Ethiopia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fk" href="?country=fk" data-country="fk">Falkland Islands (Malvinas)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fo" href="?country=fo" data-country="fo">Faroe Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fj" href="?country=fj" data-country="fj">Fiji</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fi" href="?country=fi" data-country="fi">Finland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fr" href="?country=fr" data-country="fr">France</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gf" href="?country=gf" data-country="gf">French Guiana</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pf" href="?country=pf" data-country="pf">French Polynesia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tf" href="?country=tf" data-country="tf">French Southern Territories</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ga" href="?country=ga" data-country="ga">Gabon</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gm" href="?country=gm" data-country="gm">Gambia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ge" href="?country=ge" data-country="ge">Georgia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country de" href="?country=de" data-country="de">Germany</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gh" href="?country=gh" data-country="gh">Ghana</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gi" href="?country=gi" data-country="gi">Gibraltar</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gr" href="?country=gr" data-country="gr">Greece</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gl" href="?country=gl" data-country="gl">Greenland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gd" href="?country=gd" data-country="gd">Grenada</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gp" href="?country=gp" data-country="gp">Guadeloupe</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gu" href="?country=gu" data-country="gu">Guam</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gt" href="?country=gt" data-country="gt">Guatemala</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gn" href="?country=gn" data-country="gn">Guinea</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gw" href="?country=gw" data-country="gw">Guinea-Bissau</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gy" href="?country=gy" data-country="gy">Guyana</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ht" href="?country=ht" data-country="ht">Haiti</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country va" href="?country=va" data-country="va">Holy See (Vatican City State)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country hn" href="?country=hn" data-country="hn">Honduras</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country hk" href="?country=hk" data-country="hk">Hong Kong</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country hu" href="?country=hu" data-country="hu">Hungary</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country is" href="?country=is" data-country="is">Iceland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country in" href="?country=in" data-country="in">India</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country id" href="?country=id" data-country="id">Indonesia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ir" href="?country=ir" data-country="ir">Iran, Islamic Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country iq" href="?country=iq" data-country="iq">Iraq</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ie" href="?country=ie" data-country="ie">Ireland, Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country il" href="?country=il" data-country="il">Israel</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country it" href="?country=it" data-country="it">Italy</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country jm" href="?country=jm" data-country="jm">Jamaica</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country jp" href="?country=jp" data-country="jp">Japan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country jo" href="?country=jo" data-country="jo">Jordan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kz" href="?country=kz" data-country="kz">Kazakhstan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ke" href="?country=ke" data-country="ke">Kenya</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ki" href="?country=ki" data-country="ki">Kiribati</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kr" href="?country=kr" data-country="kr">Korea, Republic of (South Korea)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country xk" href="?country=xk" data-country="xk">Kosovo</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kw" href="?country=kw" data-country="kw">Kuwait</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kg" href="?country=kg" data-country="kg">Kyrgyzstan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country la" href="?country=la" data-country="la">Lao People's Democratic Republic</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lv" href="?country=lv" data-country="lv">Latvia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lb" href="?country=lb" data-country="lb">Lebanon</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ls" href="?country=ls" data-country="ls">Lesotho</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lr" href="?country=lr" data-country="lr">Liberia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ly" href="?country=ly" data-country="ly">Libyan Arab Jamahiriya</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country li" href="?country=li" data-country="li">Liechtenstein</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lt" href="?country=lt" data-country="lt">Lithuania</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lu" href="?country=lu" data-country="lu">Luxembourg</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mo" href="?country=mo" data-country="mo">Macao</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mk" href="?country=mk" data-country="mk">Macedonia, the former Yugoslav Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mg" href="?country=mg" data-country="mg">Madagascar</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mw" href="?country=mw" data-country="mw">Malawi</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country my" href="?country=my" data-country="my">Malaysia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mv" href="?country=mv" data-country="mv">Maldives</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ml" href="?country=ml" data-country="ml">Mali</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mt" href="?country=mt" data-country="mt">Malta</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mh" href="?country=mh" data-country="mh">Marshall Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mq" href="?country=mq" data-country="mq">Martinique</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mr" href="?country=mr" data-country="mr">Mauritania</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mu" href="?country=mu" data-country="mu">Mauritius</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country yt" href="?country=yt" data-country="yt">Mayotte</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mx" href="?country=mx" data-country="mx">Mexico</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country fm" href="?country=fm" data-country="fm">Micronesia, Federated States of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country md" href="?country=md" data-country="md">Moldova, Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mc" href="?country=mc" data-country="mc">Monaco</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mn" href="?country=mn" data-country="mn">Mongolia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country me" href="?country=me" data-country="me">Montenegro</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ms" href="?country=ms" data-country="ms">Montserrat</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ma" href="?country=ma" data-country="ma">Morocco</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mz" href="?country=mz" data-country="mz">Mozambique</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mm" href="?country=mm" data-country="mm">Myanmar</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country na" href="?country=na" data-country="na">Namibia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nr" href="?country=nr" data-country="nr">Nauru</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country np" href="?country=np" data-country="np">Nepal</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nl" href="?country=nl" data-country="nl">Netherlands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nc" href="?country=nc" data-country="nc">New Caledonia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nz" href="?country=nz" data-country="nz">New Zealand</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ni" href="?country=ni" data-country="ni">Nicaragua</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ne" href="?country=ne" data-country="ne">Niger</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ng" href="?country=ng" data-country="ng">Nigeria</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nu" href="?country=nu" data-country="nu">Niue</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country nf" href="?country=nf" data-country="nf">Norfolk Island</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mp" href="?country=mp" data-country="mp">Northern Mariana Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country no" href="?country=no" data-country="no">Norway</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country om" href="?country=om" data-country="om">Oman</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pk" href="?country=pk" data-country="pk">Pakistan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pw" href="?country=pw" data-country="pw">Palau</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ps" href="?country=ps" data-country="ps">Palestine</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pa" href="?country=pa" data-country="pa">Panama</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pg" href="?country=pg" data-country="pg">Papua New Guinea</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country py" href="?country=py" data-country="py">Paraguay</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pe" href="?country=pe" data-country="pe">Peru</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ph" href="?country=ph" data-country="ph">Philippines</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pn" href="?country=pn" data-country="pn">Pitcairn</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pl" href="?country=pl" data-country="pl">Poland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pt" href="?country=pt" data-country="pt">Portugal</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pr" href="?country=pr" data-country="pr">Puerto Rico</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country qa" href="?country=qa" data-country="qa">Qatar</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country re" href="?country=re" data-country="re">Reunion</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ro" href="?country=ro" data-country="ro">Romania</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ru" href="?country=ru" data-country="ru">Russia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country rw" href="?country=rw" data-country="rw">Rwanda</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country bl" href="?country=bl" data-country="bl">Saint Barthelemy</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sh" href="?country=sh" data-country="sh">Saint Helena, Ascension and Tristan da Cunha</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country kn" href="?country=kn" data-country="kn">Saint Kitts and Nevis</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lc" href="?country=lc" data-country="lc">Saint Lucia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country mf" href="?country=mf" data-country="mf">Saint Martin (French part)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country pm" href="?country=pm" data-country="pm">Saint Pierre and Miquelon</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country vc" href="?country=vc" data-country="vc">Saint Vincent and the Grenadines</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ws" href="?country=ws" data-country="ws">Samoa</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sm" href="?country=sm" data-country="sm">San Marino</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country st" href="?country=st" data-country="st">Sao Tome and Principe</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sa" href="?country=sa" data-country="sa">Saudi Arabia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sn" href="?country=sn" data-country="sn">Senegal</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country rs" href="?country=rs" data-country="rs">Serbia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sc" href="?country=sc" data-country="sc">Seychelles</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sl" href="?country=sl" data-country="sl">Sierra Leone</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sg" href="?country=sg" data-country="sg">Singapore</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sx" href="?country=sx" data-country="sx">Sint Maarten (Dutch part)</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sk" href="?country=sk" data-country="sk">Slovakia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country si" href="?country=si" data-country="si">Slovenia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sb" href="?country=sb" data-country="sb">Solomon Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country so" href="?country=so" data-country="so">Somalia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country za" href="?country=za" data-country="za">South Africa</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gs" href="?country=gs" data-country="gs">South Georgia and the South Sandwich Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country es" href="?country=es" data-country="es">Spain</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country lk" href="?country=lk" data-country="lk">Sri Lanka</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sd" href="?country=sd" data-country="sd">Sudan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sr" href="?country=sr" data-country="sr">Suriname</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sj" href="?country=sj" data-country="sj">Svalbard and Jan Mayen</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sz" href="?country=sz" data-country="sz">Swaziland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country se" href="?country=se" data-country="se">Sweden</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ch" href="?country=ch" data-country="ch">Switzerland</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country sy" href="?country=sy" data-country="sy">Syrian Arab Republic</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tw" href="?country=tw" data-country="tw">Taiwan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tj" href="?country=tj" data-country="tj">Tajikistan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tz" href="?country=tz" data-country="tz">Tanzania, United Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country th" href="?country=th" data-country="th">Thailand</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tl" href="?country=tl" data-country="tl">Timor-Leste</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tg" href="?country=tg" data-country="tg">Togo</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tk" href="?country=tk" data-country="tk">Tokelau</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country to" href="?country=to" data-country="to">Tonga</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tt" href="?country=tt" data-country="tt">Trinidad and Tobago</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tn" href="?country=tn" data-country="tn">Tunisia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tr" href="?country=tr" data-country="tr">Turkey</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tm" href="?country=tm" data-country="tm">Turkmenistan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tc" href="?country=tc" data-country="tc">Turks and Caicos Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country tv" href="?country=tv" data-country="tv">Tuvalu</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country gb" href="?country=gb" data-country="gb">UK</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ug" href="?country=ug" data-country="ug">Uganda</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ua" href="?country=ua" data-country="ua">Ukraine</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ae" href="?country=ae" data-country="ae">United Arab Emirates</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country us" href="?country=us" data-country="us">United States</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country um" href="?country=um" data-country="um">United States Minor Outlying Islands</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country uy" href="?country=uy" data-country="uy">Uruguay</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country uz" href="?country=uz" data-country="uz">Uzbekistan</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country vu" href="?country=vu" data-country="vu">Vanuatu</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ve" href="?country=ve" data-country="ve">Venezuela, Bolivarian Republic of</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country vn" href="?country=vn" data-country="vn">Vietnam</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country vg" href="?country=vg" data-country="vg">Virgin Islands, British</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country vi" href="?country=vi" data-country="vi">Virgin Islands, U.S.</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country wf" href="?country=wf" data-country="wf">Wallis and Futuna</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country eh" href="?country=eh" data-country="eh">Western Sahara</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country ye" href="?country=ye" data-country="ye">Yemen</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country zm" href="?country=zm" data-country="zm">Zambia</a>
                  </li>
                  <li className="dr-country-picker_item">
                    <a data-bind="css: Code, attr: { href: '?country=' + Code, 'data-country': Code }, text: Name" className="dr-country-picker_country zw" href="?country=zw" data-country="zw">Zimbabwe</a>
                  </li>
                </ul>
              </div>
              <span className="dr-modal_close icon-close js-close-modal">Close</span>
            </div>
          </div>
        </section><article className="dr-option" data-optionid={1}>
        <img src="https://content.asos-media.com/-/media/images/asos/deliveryandreturns/asos-icons/standard_delivery.png?h=75&w=75&la=en-GB&hash=8115F86E7935C8CE991865266D4CF69C4022F1BC" className="dr-option_icon" alt="Standard Delivery" />
        <h2 className="dr-option_title">Standard Delivery</h2>
        <section className="dr-option_pricing is-loaded">
          <h3 className="dr-option_subtitle">£3.00</h3>
          <p><strong>Free</strong>– spend over £20.00</p>
        </section>
        <section className="dr-option_details">
          <div className="dr-option_container">
            <ul data-viewmore="[&quot;View More&quot;, &quot;View Less&quot;]" style={{maxHeight: 48}}>
              <li>Delivered on or before Thursday, 30 August 2018</li>
            </ul>
            <p>Note: Subject to placing your order before specific cut-off times. Details available in checkout. </p>
          </div>
        </section>
      </article>
        <article className="dr-option" data-optionid={5}>
          <img src="https://content.asos-media.com/-/media/images/asos/deliveryandreturns/asos-icons/express_delivery.png?h=75&w=75&la=en-GB&hash=0BE2693910C23F804A96993087E47C1A512E3F13" className="dr-option_icon" alt="Standard Delivery" />
          <h2 className="dr-option_title">Express Delivery</h2>
          <section className="dr-option_pricing is-loaded">
            <h3 className="dr-option_subtitle">£20.00</h3>
          </section>
          <section className="dr-option_details">
            <div className="dr-option_container">
              <ul data-viewmore="[&quot;View More&quot;, &quot;View Less&quot;]" style={{maxHeight: 48}}>
                <li>Delivered on or before Wednesday, 22 August 2018</li>
              </ul>
              <p>Note: Subject to placing your order before specific cut-off times. Details available in checkout. </p>
            </div>
          </section>
        </article>
        <div id="creative-react-app" data-env="//assets.asosservices.com"><div className="PremierLandingPageWrapper" role="main" /></div><div className="dr-message dr-message--faq icon-question">
        <h2 className="dr-message_title">Need More Information?</h2>
        <div className="dr-message_copy">
          <p>
            See our  <a href="/customer-service/customer-care/help?help=/app/topiclanding/p/89" target="_blank">Delivery FAQ</a>
          </p>
        </div>
      </div>
      </div>
    );
  }
}

export default DeliveryPage;
