import React from 'react';
import { Link } from 'react-router-dom';

const queryString = require('query-string');


class CustomerCarePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {

    const stylesheet1 = require('./templates/style_desk.css');
    const stylesheet2 = require('./templates/theme_desk.css');
    const stylesheet3 = require('./templates/detail_desk.css');

    const parsed = queryString.parse(location.search);


    if (parsed.help != undefined && parsed.help.startsWith('/app/home')) {
      return (
        <div id="rn_Container">
          <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
          <style dangerouslySetInnerHTML={{ __html: stylesheet2 }} />
          <div id="rn_SkipNav"><a href="/app/home#rn_MainContent">Skip Navigation</a></div>
          <div id="rn_Body">
            <div id="rn_MainColumn" role="main">
              <a id="rn_MainContent"></a>
              <div>
                <div id="urgentupdated_maindiv">
                </div>
                <div id="div_top_heading">
                  <h1>Customer Care</h1>
                </div>
                <div id="div_searchbox_layout">
                  <div id="rn_SearchBox_1" className="rn_SearchBox">
                    <div id="rn_SearchBoxWidget_2" className="rn_SearchBoxWidget rn_SimpleSearch">
                      <form id="rn_SearchBoxWidget_2_SearchForm">
                        <input
                          type="text"
                          id="rn_SearchBoxWidget_2_SearchField"
                          name="rn_SearchBoxWidget_2_SearchField"
                          className="rn_SearchField"
                          maxLength="255"
                          placeholder="Search help"
                          title="Search help"
                        />
                        <input type="image" id="rn_SearchBoxWidget_2_Submit" className="rn_SearchImage" src="images/searchbtn1.jpg" alt="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div id="div_CategoryBoxFaqs_layout">
                  <div id="rn_CategoryBoxFaqs_3" className="rn_CategoryBoxFaqs">
                    <div id="div_CategoryBoxFaqs">
                      <div className="div_CategoryBoxFaqs_box" >
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false" styles={{ display: 'block' }}>
                            <div className="div_heading"><a href="/app/topiclanding/p/91">Order Issues</a></div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/9/prev/home">Faulty Item</a></div>
                              <div><a href="/app/answers/detail/a_id/143/prev/home">Missing Item</a></div>
                              <div><a href="/app/answers/detail/a_id/10/prev/home">Wrong item received</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/91">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true" styles={{ display: 'none' }}>
                            <div className="div_default_image"><img src="images/categorybox/order.JPG" /></div>
                            <div className="div_default_heading">Order Issues</div>
                          </div>
                        </div>
                      </div>
                      <div className="div_CategoryBoxFaqs_box" styles={{ left: '15px' }}>
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false" >
                            <div className="div_heading"><a href="/app/topiclanding/p/92">payments ,
                              Promos <br />&amp; Gift Vouchers
                            </a>
                            </div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/2278/prev/home">Payment types</a></div>
                              <div><a href="/app/answers/detail/a_id/2117/prev/home">Promo codes</a></div>
                              <div><a href="/app/answers/detail/a_id/24/prev/home">When will I be charged?</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/92">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true" >
                            <div className="div_default_image"><img src="images/categorybox/payments.JPG" /></div>
                            <div className="div_default_heading">payments , Promos <br />&amp; Gift Vouchers</div>
                          </div>
                        </div>
                      </div>
                      <div className="div_CategoryBoxFaqs_box" styles={{ left: '28px' }}>
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false">
                            <div className="div_heading"><a href="/app/topiclanding/p/89">delivery</a></div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/8/prev/home">Where's my order?</a></div>
                              <div><a href="/app/answers/detail/a_id/64/prev/home">International deliveries</a></div>
                              <div><a href="/app/answers/detail/a_id/61/prev/home">Can I track my order?</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/89">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true">
                            <div className="div_default_image"><img src="images/categorybox/delivery.JPG" /></div>
                            <div className="div_default_heading">delivery</div>
                          </div>
                        </div>
                      </div>
                      <div className="div_CategoryBoxFaqs_box" >
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false">
                            <div className="div_heading"><a href="/app/topiclanding/p/90">returns &amp; Refunds</a>
                            </div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/139/prev/home">How do I return?International</a>
                              </div>
                              <div><a href="/app/answers/detail/a_id/136/prev/home">Have you got it back?
                                International
                              </a>
                              </div>
                              <div><a href="/app/answers/detail/a_id/88/prev/home">Can I exchange?</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/90">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true">
                            <div className="div_default_image"><img src="images/categorybox/returns.JPG" /></div>
                            <div className="div_default_heading">returns &amp; Refunds</div>
                          </div>
                        </div>
                      </div>
                      <div className="div_CategoryBoxFaqs_box" >
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false">
                            <div className="div_heading"><a href="/app/topiclanding/p/104">Product &amp; stock</a></div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/18/prev/home">Sizing and care guide</a></div>
                              <div><a href="/app/answers/detail/a_id/20/prev/home">Will an item be back in stock?</a>
                              </div>
                              <div><a href="/app/answers/detail/a_id/2560/prev/home">Find a brand</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/104">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true">
                            <div className="div_default_image"><img src="images/categorybox/product.JPG" /></div>
                            <div className="div_default_heading">Product &amp; stock</div>
                          </div>
                        </div>
                      </div>
                      <div className="div_CategoryBoxFaqs_box" >
                        <div className="div_CategoryBoxFaqs_box_inn">
                          <div className="div_output" isvisible="false">
                            <div className="div_heading"><a href="/app/topiclanding/p/93">technical</a></div>
                            <div className="div_links_ind">
                              <div><a href="/app/answers/detail/a_id/44/prev/home">Trouble with the website</a></div>
                              <div><a href="/app/answers/detail/a_id/47/prev/home">Trouble signing into my account</a>
                              </div>
                              <div><a href="/app/answers/detail/a_id/2606/prev/home">What is ‘Save for later’?</a></div>
                            </div>
                            <div className="div_links_all"><a href="/app/topiclanding/p/93">See all</a></div>
                          </div>
                          <div className="div_default" isvisible="true">
                            <div className="div_default_image"><img src="images/categorybox/technical.JPG" /></div>
                            <div className="div_default_heading">technical</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="div_Popularquestions_layout">
                  <div id="rn_PopularQuestions_4" className="rn_PopularQuestions">
                    <div id="div_PopularQuestions_otr">
                      <div id="div_PopularQuestions"><h2>Popular Questions</h2></div>
                      <div id="div_PopularQuestions_impfaqs">
                        <div id="rn_HomeMultiline_5" className="rn_HomeMultiline rn_Multiline">
                          <div className="leftbox">
                            <div className="div_PopularQuestions_impfaqs_ind">
                              <a href="/app/answers/detail/a_id/136">I'm an International customer, have you received my
                                returned items?
                              </a>
                            </div>
                          </div>
                          <div className="rightbox">
                            <div className="div_PopularQuestions_impfaqs_ind">
                              <a href="/app/answers/detail/a_id/138">What is your International Returns Policy?</a>
                            </div>
                          </div>
                          <div className="leftbox">
                            <div className="div_PopularQuestions_impfaqs_ind">
                              <a href="/app/answers/detail/a_id/8">What should I do if my order hasn't been delivered
                                yet?
                              </a>
                            </div>
                          </div>
                          <div className="rightbox">
                            <div className="div_PopularQuestions_impfaqs_ind">
                              <a href="/app/answers/detail/a_id/73">How can I get a new returns note?</a>
                            </div>
                          </div>
                          <div className="leftbox">
                            <div className="div_PopularQuestions_impfaqs_ind">
                              <a href="/app/answers/detail/a_id/18">Where can I find your size guide and care
                                instructions?
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="div_AskButtons_layout">
                  <div id="rn_AskButtons_6" className="rn_AskButtons">

                    <div id="AskButtons_MainDiv">
                      <div id="AskButtons_Heading">CAN’T FIND WHAT YOU’RE LOOKING FOR?</div>
                      <div id="AskButtons_ButtonsDiv">
                        <div className="tdiv">

                          <div id="div_AskButtons_chat_avail" ><a
                            href="/app/chat/chat_launch"
                            id="AskButtons_chat_avail"
                          ><span
                            className="in_txt"
                          ><img src="images/ask/greendot.jpg" /><span className="align_chattxt">Chat Now</span>
                            </span>
                          </a>
                          </div>


                        </div>
                        <div className="bdiv">
                          <div className="in_btn_3"><a
                            href="https://twitter.com/ASOS_Heretohelp"
                            id="AskButtons_tweet"
                            target="_blank"
                          ><span className="in_txt">
							Tweet us
                           </span>
                          </a>
                          </div>
                          <div className="in_btn_3"><a
                            href="http://www.facebook.com/ASOS"
                            id="AskButtons_faceb"
                            target="_blank"
                          ><span
                            className="in_txt"
                          >Ask on facebook
                          </span>
                          </a>
                          </div>
                          <div className="in_btn_3"><a href="http://m.me/asos" id="AskButtons_faceb" target="_blank"><span
                            className="in_txt"
                          >CONNECT ON MESSENGER
                                                                                                                     </span>
                          </a>
                          </div>
                        </div>
                        <div className="tdiv">
                          <div><a href="/app/ask" id="AskButtons_askaq"><span className="in_txt">SEND US AN EMAIL</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{width:'100%'}}>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <style dangerouslySetInnerHTML={{ __html: stylesheet3 }} />

        <div id="rn_Container">
          <div id="rn_SkipNav"><a href="/app/answers/detail/a_id/2278/prev/home#rn_MainContent">Skip Navigation</a>
          </div>
          <div id="rn_Header" role="banner" className="noPrint" style={{display:'none'}}>
            <noscript><h1>Scripting must be enabled to use this site.</h1></noscript>
            <div className="site-header" style={{top:'39px',fontFamily:'Tahoma,Arial,sans-serif'}}></div>
          </div>
          <div id="rn_Body">
            <div id="rn_MainColumn" role="main">
              <a id="rn_MainContent"></a>
              <div>
                <div id="div_sitemap_layout">
                  <div id="rn_Sitemap_1" className="rn_Sitemap">
                    <div className="sitemap_maindiv">
                      <a href="/">Home</a>
                      &gt;
                      <a href="/app/home">Customer Care</a>&gt;
                      <span></span>
                    </div>
                  </div>
                </div>
                <div id="div_searchbox_layouttl">
                  <div id="rn_SearchBox_2" className="rn_SearchBox">
                    <div id="rn_SearchBoxWidget_3" className="rn_SearchBoxWidget rn_SimpleSearch">
                      <form id="rn_SearchBoxWidget_3_SearchForm" onSubmit="return false;">
                        <input type="text" id="rn_SearchBoxWidget_3_SearchField" name="rn_SearchBoxWidget_3_SearchField"
                               className="rn_SearchField" maxLength="255" value="Search help" title="Search help" />
                        <input type="image" id="rn_SearchBoxWidget_3_Submit" className="rn_SearchImage"
                               src="images/searchbtn1.jpg" alt="Search" />
                      </form>
                    </div>
                  </div>
                </div>
                <div id="div_AnswerDetail_Layout">
                  <div id="div_AnswerDetail_Layout_Heading">
                    <div id="div_AnswerDetail_Layout_Heading_maindiv">
                      <h1 id="div_AnswerDetail_Layout_Heading_h1"></h1>
                      <h3 id="div_AnswerDetail_Layout_Heading_h3">Last updated&nbsp;</h3>
                    </div>
                  </div>
                  <div id="div_AnswerDetail_Layout_2box">
                    <div id="div_AnswerDetail_Layout_2box_left">
                      <div id="div_AnswerDetail_Layout_2box_left_in">

                      </div>
                      <div id="rn_FileAttach">
                      </div>
                      <div id="div_AnswerDetail_Layout_2box_left_rating" style={{display: 'none'}}>
                        <div>
                          <div id="rn_Answer_Feedback_6" className="rn_Answer_Feedback rn_AnswerFeedback">
                            <div id="rn_Answer_Feedback_6_AnswerFeedbackControl" className="rn_AnswerFeedbackControl">
                              <div className="rn_Title">Did this answer your question?</div>
                              <div id="rn_Answer_Feedback_6_RatingMeter" className="rn_RatingMeter " role="application">
                                <a id="rn_Answer_Feedback_6_RatingCell_1" href="javascript:void(0)"
                                   className="rn_RatingCell" title="0%"><span className="rn_ScreenReaderOnly">Rate answer 1 of 5</span>&nbsp;
                                </a> <a id="rn_Answer_Feedback_6_RatingCell_2" href="javascript:void(0)"
                                        className="rn_RatingCell" title="25%"><span className="rn_ScreenReaderOnly">Rate answer 2 of 5</span>&nbsp;
                              </a> <a id="rn_Answer_Feedback_6_RatingCell_3" href="javascript:void(0)"
                                      className="rn_RatingCell" title="50%"><span className="rn_ScreenReaderOnly">Rate answer 3 of 5</span>&nbsp;
                              </a> <a id="rn_Answer_Feedback_6_RatingCell_4" href="javascript:void(0)"
                                      className="rn_RatingCell" title="75%"><span className="rn_ScreenReaderOnly">Rate answer 4 of 5</span>&nbsp;
                              </a> <a id="rn_Answer_Feedback_6_RatingCell_5" href="javascript:void(0)"
                                      className="rn_RatingCell" title="100%"><span className="rn_ScreenReaderOnly">Rate answer 5 of 5</span>&nbsp;
                              </a></div>
                            </div>
                            <div id="rn_Answer_Feedback_6_AnswerFeedbackForm"
                                 className="rn_AnswerFeedbackForm rn_Hidden">
                              <div id="rn_Answer_Feedback_6_DialogDescription" className="rn_DialogSubtitle">Please note
                                that your feedback will be looked into but you won’t receive a reply from our Customer
                                Care Team. If you have a question please use the Contact Us links on our Help pages.<br /><br />Was
                                this answer useful?</div>
                              <div id="rn_Answer_Feedback_6_ErrorMessage"></div>
                              <form>
                                <label htmlFor="rn_Answer_Feedback_6_EmailInput">Email<span
                                  className="rn_Required"> *</span><span className="rn_ScreenReaderOnly">Required</span></label>
                                <input id="rn_Answer_Feedback_6_EmailInput" className="rn_EmailField" type="text"
                                       value="" />
                                <label htmlFor="rn_Answer_Feedback_6_FeedbackTextarea">Your Feedback<span
                                  className="rn_Required"> *</span><span
                                  className="rn_ScreenReaderOnly">Required</span></label>
                                <textarea id="rn_Answer_Feedback_6_FeedbackTextarea" className="rn_Textarea" rows="4"
                                          cols="60"></textarea>
                              </form>
                              <div id="div_main_btns">
                                <div id="buttons_div">
                                  <a href="javascript:void(0);" id="customlink_cancel">Cancel</a>
                                  <a href="javascript:void(0);" id="customlink">SUBMIT</a>
                                </div>
                                <div id="loadingDiv" className="rn_Hidden">
                                  <div id="loadingDiv_in">
                                    <img src="images/loading1.gif" />
                                  </div>
                                </div>
                                <div id="buttons_bootom_div">
                                  Please note that your feedback will be looked into but you won’t receive a reply from
                                  our Customer Care Team. If you have a question, please get in touch using the contact
                                  options below.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="CustomAnswerFeedback_DivLocation">
                          &nbsp;&nbsp;
                        </div>
                        <div id="pos_top">Test</div>
                        <div id="pos_left">Test</div>
                      </div>
                      <div id="div_AnswerDetail_Layout_2box_left_share">
                        <div id="share_heading_div">
                          <h2 id="share_heading">
                          </h2>
                        </div>
                        <div id="share_social">
                          <div id="rn_SocialBookmark_7"
                               className="rn_SocialBookmark rn_asosbookmark rn_SocialBookmarkLink">
                            <a id="rn_SocialBookmark_7_Link" href="javascript:void(0);"
                               title="Share this page on social networks">
                              <span></span>
                            </a>
                            <div id="rn_SocialBookmark_7_Panel" className="rn_Panel">
                              <div>
                    <span className="rn_Link1">
                <a
                  href=" http://facebook.com/sharer.php?u=http://www.asos.com/help/pgehtml.aspx?cid=17989&amp;help=/app/answers/detail/a_id/2278"
                  target="_blank" title=" Post to Facebook ">&nbsp;&nbsp;&nbsp; </a>
            </span>
                                <span className="rn_Link2">
                <a
                  href=" http://twitter.com/home?status=Answer+http://www.asos.com/help/pgehtml.aspx?cid=17989&amp;help=/app/answers/detail/a_id/2278"
                  target="_blank" title=" Tweet this ">&nbsp;&nbsp;&nbsp; </a>
            </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="share_print">
                <span id="rn_PrintPageLink_8" className="rn_PrintPageLink">
    <a onClick="window.print(); return false;" href="javascript:void(0);" title="Print this page">
                    <img src="images/icons/printicon.jpg" alt="" />
                <span></span>
    </a>
</span>
                        </div>
                      </div>
                    </div>
                    <div id="div_AnswerDetail_Layout_2box_right">
                      <div>
                        <div id="rn_AttachmentDropdown_9" className="rn_AttachmentDropdown">
                          <div id="attachement_div_main">
                            <div><h3>Attachments</h3></div>
                            <div><h4 id="attach_heading"></h4></div>
                            <div>
                              <select id="attach_select">
                              </select>
                            </div>
                            <div>
                              <a href="javascript:void(0);" id="download_button">Download</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="RelatedQuestions_div">
                        <div id="RelatedQuestions_div_main">
                        </div>
                      </div>
                      <div id="yourordersbox_div">
                        <div id="yourordersbox_div_main">
                          <div id="rn_Yourordersbox_div_main">
                            <div id="nlg_header">YOUR ORDERS</div>
                            <div id="nlg_msg">Track/cancel orders, View order details, Print returns form, Book returns
                              collection
                            </div>
                            <div id="nlg_button"><a href="/app/answers/detail/a_id/2278/prev/home#">VIEW ALL ORDERS</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span id="msg_txt" style={{display:'none'}}>http://asos.custhelp.com</span>
                </div>
                <div id="div_AskButtons_layout">
                  <div id="rn_AskButtons_12" className="rn_AskButtons">
                    <div id="AskButtons_MainDiv">
                      <div id="AskButtons_Heading">CAN’T FIND WHAT YOU’RE LOOKING FOR?</div>
                      <div id="AskButtons_ButtonsDiv">
                        <div className="tdiv">
                          <div id="div_AskButtons_chat_avail"><a href="/app/chat/chat_launch"
                                                                 id="AskButtons_chat_avail"><span
                            className="in_txt"><img src="images/ask/greendot.jpg" /><span className="align_chattxt">Chat Now</span></span></a>
                          </div>
                        </div>
                        <div className="bdiv" style={{display:'inline-block',width:'100%;'}}>
                          <div className="in_btn_3"><a href="https://twitter.com/ASOS_Heretohelp" id="AskButtons_tweet"
                                                       target="_blank"><span className="in_txt">
							Tweet us</span></a></div>
                          <div className="in_btn_3"><a href="http://www.facebook.com/ASOS" id="AskButtons_faceb"
                                                       target="_blank"><span
                            className="in_txt">Ask on facebook</span></a></div>
                          <div className="in_btn_3"><a href="http://m.me/asos" id="AskButtons_faceb" target="_blank"
                                                       style={{backgroundImage: "url('../../themes/ASOSDeskUIV2/images/channellinks/facebook-messagner.png')",backgroundSize: '24px 24px',backgroundPosition: '16px 8px',width:'240px;'}}><span
                            className="in_txt">CONNECT ON MESSENGER</span></a></div>
                        </div>
                        <div className="tdiv">
                          <div><a href="/app/ask" id="AskButtons_askaq"><span className="in_txt">SEND US AN EMAIL</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div styles={{'margin-top':'300px'}}>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerCarePage;
