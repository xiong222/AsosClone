import React from 'react';

class BagPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./style.css');
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <div id="bagApp"><button className="ie9-honeypot" />
          <div className="bag-app is-not-error-page has-bag-items" data-bind="
        css: {
            'bag-slide-effect': slideEffect,
            'has-bag-items': bagHasItems,
            'has-empty-bag': emptyBag,
            'has-error': hasError,
            'has-generic-error': showGenericError,
            'is-continue-error-page': showContinueErrorPage,
            'is-error-page': isErrorPage,
            'is-not-error-page': isNotErrorPage,
            'is-recognised': recognised,
            'is-retry-error-page': showRetryErrorPage,
            'loading-animation': bagFirstRunLoading
        }
    ">
            {/* ko if: showGenericError */}{/* /ko */}
            {/* ko ifnot: hasError */}
            {/* ko ifnot: loading */}
            {/* ko if: itemCount */}
            <bag-total className="bag-total-holder-root bag-total-holder-root--quicklink" params="
                        subTotal: bag.summary.totalPrice.text,
                        delivery: bag.delivery,
                        items: bag.items,
                        quickLink: true
                    " data-bind="
                        css: {
                            'bag-total-quicklink--hide': hideQuickLink
                        }
                    "><div className="bag-total-wrapper">
              <div className="bag-total-holder bag-title-holder bag-title-holder--total bag-total-holder--quickLink" data-bind="
            css: {
                'bag-total-holder--quickLink': quickLink,
                'bag-total-holder--german': displayVatMessage
            }
        ">
                <span className="bag-title-quicklink bag-title-quicklink--meta">
                  <h2 className="bag-title bag-title--total" data-bind="text: title()">BAG SUB-TOTAL</h2>
                  <p className="bag-total-title-holder bag-total-title-holder--subtotal">
                    {/* ko ifnot: quickLink */}{/* /ko */}
                    <span className="bag-total-price bag-total-price--subtotal" data-bind="html: subTotal">£15.98</span>
                    {/* ko if: displayVatMessage */}{/* /ko */}
                  </p>
                </span>
                {/* ko if: canShowDelivery */}{/* /ko */}
                <span className="bag-title-quicklink bag-title-quicklink--checkout">
                  <p className="bag-total-button-holder">
                    <a href="#" className="bag-total-button bag-total-button--checkout bag-total-button--checkout--quicklink" data-bind="
                        localeText: {
                            key: 'lang_bag_total_checkout_link'
                        },
                        event: {
                            click: startCheckout
                        },
                        css: {
                            'bag-total-button--checkout--quicklink': quickLink,
                            'bag-total-button--checkout--total': !quickLink
                        }
                    ">CHECKOUT</a>
                  </p>
                </span>
              </div>
            </div>
            </bag-total>
            {/* /ko */}
            {/* /ko */}
            {/* /ko */}
            <bag-messages className="bag-messages-application" params="messages: messages"><div className="bag-messaging-looper" data-bind="foreach: messages" />
            </bag-messages>
            {/* ko if: hasError */}{/* /ko */}
            {/* ko ifnot: hasError */}
            <div className="bag-holder" data-bind="
                css: {
                    'bag-holder--empty' : emptyBag,
                    'bag-holder--hidden' : bagFirstRunLoading,
                    'bag-holder--fadeout': noItems,
                    'bag-holder--german': displayVatMessage
                }
            ">
              {/* ko ifnot: emptyBag */}
              <div className="bag-contents-wrapper">
                <div className="bag-contents-holder bag-contents-holder--items">
                  {/* ko if: beingEdited */}{/* /ko */}
                  {/* ko ifnot: loading */}
                  <div className="bag-title-holder">
                    <h2 className="bag-title bag-title--items" data-bind="localeText:{key: 'lang_your_items_section_title'}">MY BAG</h2>
                    {/* ko if: showExpiry */}
                    <p className="bag-expiry-warning bag-expiry-warning--desktop" data-bind="localeText:{key: 'lang_your_items_expiry_info'}">Items are reserved for 60 minutes</p>
                    {/* /ko */}
                  </div>
                  <bag-messages className="bag-messages-panel-product" params="messages: panelMessages.product"><div className="bag-messaging-looper" data-bind="foreach: messages" />
                  </bag-messages>
                  <bag-item-list params="items: bag.items"><ul className="bag-items" data-bind="foreach: items">
                    <li className="bag-item-holder" data-bind="
            css: {
                'bag-editing-mask-infront is-being-edited' : $data.beingEdited,
                'loading-animation': $data.isLoading
            },
           attr: {
                'role': ($data.beingEdited() ? 'dialog' : null),
                'data-remove-text': $parent.localisedRemoveText,
                'data-saved-text': $parent.localisedSavedText
            }" data-remove-text="Item deleted" data-saved-text="Item saved for later">
                      <div className="bag-item-padding" data-bind="
                css: {
                    'bag-item-padding--delay-loading': $parent.delayLoading($data),
                    'bag-item-padding--delayed-loading-has-started-get-busy': $parent.delayedLoadingHasStartedGetBusy($data)
                }
        ">
                        <div className="bag-item-border">
                          <div className="bag-item-zoomer">
                            {/* ko if: itemType === 'Product' */}
                            <bag-item-product className="bag-item bag-item--product" params="item: $data, index: $index, isMobile: $parent.isMobile"><div className="bag-item-generic bag-item-container bag-item-container--product bag-item-generic--showing" data-bind="
        css: {
            'bag-item-generic--delaying': itemDelaying,
            'bag-item-generic--showing': itemShowing
        }
    ">
                              <bag-item-image className="bag-item-image" params="
            {
                imageList: item.images,
                link: getLink(),
                colour: item.colour
            }
        ">{/* ko if: hasImages() */}
                                <span className="bag-item-image">
                                    {/* ko if: itemLink */}
                                  <a data-bind="attr: { href: itemLink }" href="http://www.asos.com/prd/10573614?CTARef=Bag+Item+Image">
                                      <img className="bag-item-image-img" data-bind="attr: { src: getImage, alt: '' }" src="https://images.asos-media.com/products/love-is-a-pug-picture-book/10573614-1-multi?$l$" alt />
                                    </a>
                                  {/* /ko */}
                                  {/* ko ifnot: itemLink */}{/* /ko */}
                                  </span>
                                {/* /ko */}
                              </bag-item-image>
                              <div className="bag-item-descriptions">
                                <bag-price className="bag-item-price" params="price: item.price"><div className="bag-item-price-holder">
                                      <span className="bag-item-price bag-item-price--current" data-bind="
            text: currentPrice,
            css: {
                'bag-item-price--markedDown': price.isMarkedDown,
                'bag-item-price--rrp': price.isOutletPrice
            }
        ">£7.99</span>
                                  {/* ko if: price.isMarkedDown */}{/* /ko */}
                                  {/* ko if: price.isOutletPrice */}{/* /ko */}
                                </div>
                                </bag-price>
                                <p className="bag-item-name">
                                  <a data-bind="attr: { href: getLink() }, text: item.name " href="http://www.asos.com/prd/10573614">Love Is A Pug Picture Book</a>
                                </p>
                                <p className="bag-item-variants">
                                  {/* ko if: item.colour */}
                                  <span className="bag-item-colour" data-bind="text: item.colour">Multi</span>
                                  {/* /ko */}
                                  {/* ko if: item.size */}
                                  <span className="bag-item-size-holder bag-item-select2-holder">
                                      <select className="bag-item-size bag-item-selector select2-hidden-accessible" data-bind="
                            options: availableSizes,
                            optionsText: 'displayText',
                            optionsValue: 'variantId',
                            optionsAfterRender: disableOutOfStock,
                            value: item.variantId,
                            select2: {
                                eventSystem: sizeEventSystem,
                                onOpen: loadSizes
                            },
                            enabled: enableSizeSelector
                        " tabIndex={-1} aria-hidden="true"><option value={10573615}>No Size</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 70}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-ty87-container"><span className="select2-selection__rendered" id="select2-ty87-container" title="No Size">No Size</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                    </span>
                                  <span className="bag-item-size bag-item-variant--mobile" data-bind="
                        text: item.size,
                        css: {
                            'bag-pulse-item': pulseSize
                        }
                    ">No Size</span>
                                  {/* /ko */}
                                  <span className="bag-item-quantity-holder bag-item-select2-holder">
                                      <span className="bag-item-quantity-prefix" data-bind="
                            localeText: {
                                key: 'lang_mobile_dialog_quantity_prefix_short'
                            },
                            event: {
                                click: triggerOpenQuantity
                            }
                        ">Qty</span>
                                      <select className="bag-item-quantity bag-item-selector select2-hidden-accessible" data-bind="
                            options: getQuantityOptions(),
                            value: item.quantity || 1,
                            select2:{
                                eventSystem: quantityEventSystem
                            }
                        " tabIndex={-1} aria-hidden="true"><option value={1}>1</option><option value={2}>2</option><option value={3}>3</option><option value={4}>4</option><option value={5}>5</option><option value={6}>6</option><option value={7}>7</option><option value={8}>8</option><option value={9}>9</option><option value={10}>10</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 37}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-o5it-container"><span className="select2-selection__rendered" id="select2-o5it-container" title={2}>2</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                    </span>
                                  <span className="bag-item-quantity-holder">
                                      <span className="bag-item-quantity bag-item-quantity--pre bag-item-variant--mobile" data-bind="localeText: { key: 'lang_mobile_dialog_quantity_prefix_short' }">Qty</span>
                                      <span className="bag-item-quantity bag-item-variant--mobile" data-bind="
                        text: item.quantity,
                        css: {
                            'bag-pulse-item': pulseQuantity
                        }
                    ">2</span>
                                    </span>
                                </p>
                                <bag-move-to-saved className="bag-item-save" data-bind="attr: {'data-id': item.id()}" params="item: item" data-id="86b601dd-4ec2-4172-b282-4cd22ea82b54"> <button data-bind="click: moveToSaved, localeText: {key: 'lang_your_items_save_button_text'}, disable: item.beingEdited" className="bag-item-moveToSaved">Save for later</button>
                                </bag-move-to-saved>
                              </div>
                              <bag-edit-actions className="bag-item-actions-holder" params="onCancel: reset, onUpdate: updateItemSelection, beingEdited: item.beingEdited">{/* ko if: showActions */}{/* /ko */}
                              </bag-edit-actions>
                              {/* ko ifnot: item.beingEdited */}
                              <bag-messages params="messages: item.messages, isProduct: true"><div className="bag-messaging-looper" data-bind="foreach: messages" />
                              </bag-messages>
                              {/* /ko */}
                              {/* ko if: isMobile */}{/* /ko */}
                            </div>
                            </bag-item-product>
                            {/* /ko */}
                            {/* ko if: itemType === 'Subscription' */}{/* /ko */}
                            {/* ko if: itemType === 'Voucher' */}{/* /ko */}
                            <bag-remove className="bag-item-remove-holder" params="item: $data, index: $index"><div className="bag-item-generic bag-item-generic--showing" data-bind="
        css: {
            'bag-item-generic--delaying': itemDelaying,
            'bag-item-generic--showing': itemShowing
        }
    ">
                              <button className="bag-item-remove" data-bind="
            click: removeItem,
            attr: {
                'data-id': item.id()
            }
        " data-id="86b601dd-4ec2-4172-b282-4cd22ea82b54" />
                            </div></bag-remove>
                          </div>
                          {/* ko if: itemType !== 'Product' && $parent.isMobile */}{/* /ko */}
                        </div>
                      </div>
                      {/* ko if: $data.isLoading */}{/* /ko */}
                    </li>
                  </ul>
                  </bag-item-list>
                  <h3 className="bag-subtotal">
                    <span className="bag-subtotal-subtotal" data-bind="localeText: {key: 'lang_your_items_sub_total_label'}">Sub-total</span>
                    <span className="bag-subtotal-price" data-bind="text: subTotal()">£15.98</span>
                    {/* ko if: displayVatMessage */}{/* /ko */}
                  </h3>
                  {/* /ko */}
                </div>
                {/* ko if: itemCount */}
                {/* ko ifnot: loading */}
                <div className="bag-main-bottom-panel">
                  {/* ko if: showExpiry */}
                  <p className="bag-expiry-warning bag-expiry-warning--mobile" data-bind="localeText:{key: 'lang_your_items_expiry_info'}">Items are reserved for 60 minutes</p>
                  {/* /ko */}
                  <bag-recommendations-carousel params="bag: bag">{/* ko template: {afterRender: checkParentAnimation.bind($data)} */}{/* /ko */}
                    {/* ko if: (state() === 'loading' || state() === 'ready') */}{/* /ko */}
                  </bag-recommendations-carousel>
                  {/* ko if: hasExpiredItems */}{/* /ko */}
                  <bag-subscription-options params="
                                        bag: bag,
                                        subscriptionMessages: panelMessages.subscription,
                                        isMobile: isMobile
                                    ">{/* ko if: showSubscriptionDetails */}
                    <div className="bag-panel-container-wrapper--subscriptions">
                      <bag-messages className="bag-messages-panel-subscription" params="messages: subscriptionMessages"><div className="bag-messaging-looper" data-bind="foreach: messages" />
                      </bag-messages>
                      <a className="bag-panel-link bag-panel-link--subscription" data-bind="
                click: toggleSubscriptionPanel,
                css:  {
                    'loading-animation': isAddingOnMobile
                },
                style: {
                    height: getPanelLinkHeight($element)
                }
            " style={{}}>
                        <div className="bag-panel-container bag-panel-container--subscriptions" data-bind="
                    css:{
                        'bag-subscription--active': activeSubscription,
                        'bag-subscription--inBag': hasSubscriptionInBag,
                        'bag-state--active': showSubscriptionPanel
                    }
                ">
                          <h4 className="bag-panel-title" data-bind="text: panelTitleText">Premier Delivery UK</h4>
                          <p className="bag-panel-content" data-bind="html: subscriptionMessage">Get next-day delivery for a whole year for only £9.95.</p>
                          <bag-loading><div className="loading-holder">
                            <span className="loading-button loading-button-1" />
                            <span className="loading-button loading-button-2" />
                          </div>
                          </bag-loading>
                        </div>
                      </a>
                      <bag-subscription-options-panel params="content: subscriptionContent, active: showSubscriptionPanel, subscriptionMessages: subscriptionMessages, isMobile: isMobile"><div className="bag-subscription-panel" data-bind="
        css: {
            'bag-subscription-panel--visible': isActive,
            'bag-subscription-panel--iosHack': iosHack,
            'loading-animation': isAddingOnDesktop
        }
    ">
                        <div className="bag-subscription-panel-header">
                          <a className="bag-subscription-panel-header-close" data-bind="click: close" />
                        </div>
                        <div className="bag-subscription-body-wrapper" data-bind="
            css: {
                'loading-animation': isAddingOnMobile
            }
        ">
                          <div className="bag-subscription-panel-image">
                            <span className="bag-subscription-panel-image-text bag-premier-en" data-bind="css: panelImageCssClass" />
                          </div>
                          <div className="bag-subscription-panel-body">
                            <h2 className="bag-subscription-panel-body-title" data-bind="text: title">Premier Delivery UK</h2>
                            <p className="bag-subscription-panel-body-proposition" data-bind="html: proposition">Sign up to Premier Delivery UK for unlimited next-day or nominated-day delivery with no minimum order value for a whole year. Speedy, hassle-free shopping just got even better.</p>
                            <p className="bag-subscription-panel-body-price" data-bind="html: price">Only £9.95 for 12 months</p>
                          </div>
                          <div className="bag-subscription-panel-footer">
                            <p className="bag-subscription-panel-footer-terms-desktop" data-bind="
                localeText: {
                    key: 'lang_bag_subscription_add_terms',
                    html: {
                        a: {
                            href: termsAndConditionsUrl,
                            target: '_blank'
                        }
                    }
                }
            ">By signing up, you're agreeing to these <a href="https://creativeassets.asosservices.com/html/premier/?country=GB&lang=en-GB" target="_blank">terms and conditions</a></p>
                            <div className="bag-subscription-panel-footer-button-wrapper">
                              <bag-messages className="bag-messages-panel-subscription" params="messages: subscriptionMessages, isSubscription: true"><div className="bag-messaging-looper" data-bind="foreach: messages" />
                              </bag-messages>
                              <button className="bag-subscription-panel-footer-button" data-bind="
                      click: addToBag,
                      css: {
                          'bag-subscription-panel-footer-button--hasAdded': hasAdded
                      },
                      text: atbText
                ">ADD TO BAG</button>
                            </div>
                            <p className="bag-subscription-panel-footer-terms-mobile" data-bind="
                localeText: {
                    key: 'lang_bag_subscription_add_terms',
                    html: {
                        a: {
                            href: termsAndConditionsUrl,
                            target: '_blank'
                        }
                    }
                }
            ">By signing up, you're agreeing to these <a href="https://creativeassets.asosservices.com/html/premier/?country=GB&lang=en-GB" target="_blank">terms and conditions</a></p>
                          </div>
                          <bag-loading><div className="loading-holder">
                            <span className="loading-button loading-button-1" />
                            <span className="loading-button loading-button-2" />
                          </div>
                          </bag-loading>
                        </div>
                        <bag-loading><div className="loading-holder">
                          <span className="loading-button loading-button-1" />
                          <span className="loading-button loading-button-2" />
                        </div>
                        </bag-loading>
                      </div>
                      </bag-subscription-options-panel>
                    </div>
                    {/* /ko */}
                  </bag-subscription-options>
                  <bag-delivery-information params="bag: bag"><a className="
        bag-panel-link
        bag-panel-link--delivery
    " data-bind="
        attr: {
            title: translations.deliveryInfo.title,
            href: deliveryInfoLink()
        }
    " target="_blank" title="FREE* STANDARD DELIVERY" href="http://www.asos.com/customer-service/delivery/">
                    <div className="
            bag-panel-container
            bag-panel-container--delivery
        ">
                      <h4 className="bag-panel-title" data-bind="text: translations.deliveryInfo.title">FREE* STANDARD DELIVERY</h4>
                      <p className="bag-panel-content" data-bind="text: translations.deliveryInfo.text">Faster delivery options available to most countries.</p>
                      <p className="
                bag-panel-content
                bag-panel-content--underline
            " data-bind="text: translations.deliveryInfo.moreInfoBtn">More info</p>
                    </div>
                  </a>
                    <a className="
        bag-panel-link
        bag-panel-link--returns
    " data-bind="
        attr: {
            title: translations.returnsInfo.title,
            href: returnsInfoLink()
        }
    " target="_blank" title="EASY RETURNS" href="http://www.asos.com/customer-service/returns/">
                      <div className="
            bag-panel-container
            bag-panel-container--returns
        ">
                        <h4 className="bag-panel-title" data-bind="text: translations.returnsInfo.title">EASY RETURNS</h4>
                        <p className="bag-panel-content" data-bind="text: translations.returnsInfo.text">Send it back within 28 days of receiving your order.</p>
                        <p className="
                bag-panel-content
                bag-panel-content--underline
            " data-bind="text: translations.returnsInfo.moreInfoBtn">More info</p>
                      </div>
                    </a>
                    {/*
    TODO: Removed until we have the ability to localise for all countries
    <p class="bag-delivery-info-disclaimer" data-bind="text: translations.deliveryInfo.disclaimer"></p>
*/}
                  </bag-delivery-information>
                </div>
                {/* /ko */}
                {/* /ko */}
              </div><div className="bag-secondary-content-wrapper bag-secondary-content-wrapper--fixed" data-bind="
                css: {
                'bag-secondary-content-wrapper--fixed': fixSecondaryContent,
                'bag-secondary-content-wrapper--fixed--max': stopFixSecondaryContent
                },
                style: { top: secondaryContentFixedPosition }" style={{top: 10}}>
              <div className="bag-contents-holder bag-contents-holder--total">
                {/* ko if: beingEdited */}{/* /ko */}
                {/* ko ifnot: loading */}
                <bag-total className="bag-total-holder-root bag-total-holder-root--main" params="
                                    subTotal: bag.summary.totalPrice.text,
                                    delivery: bag.delivery,
                                    items: bag.items,
                                    deliveryAddress:
                                    bag.deliveryAddress,
                                    quickLink: false,
                                    canShowDelivery: canShowDelivery
                                "><div className="bag-total-wrapper">
                  <div className="bag-total-holder bag-title-holder bag-title-holder--total" data-bind="
            css: {
                'bag-total-holder--quickLink': quickLink,
                'bag-total-holder--german': displayVatMessage
            }
        ">
                      <span className="bag-title-quicklink bag-title-quicklink--meta">
                        <h2 className="bag-title bag-title--total" data-bind="text: title()">Total</h2>
                        <p className="bag-total-title-holder bag-total-title-holder--subtotal">
                          {/* ko ifnot: quickLink */}
                          <span className="bag-total-title bag-total-title--subtotal" data-bind="localeText: {key: 'lang_bag_total_subtotal'}">Sub-total</span>
                          {/* /ko */}
                          <span className="bag-total-price bag-total-price--subtotal" data-bind="html: subTotal">£15.98</span>
                          {/* ko if: displayVatMessage */}{/* /ko */}
                        </p>
                      </span>
                    {/* ko if: canShowDelivery */}
                    <bag-delivery-options params="delivery: delivery"><p className="bag-total-title-holder bag-total-title-holder--delivery">
                      <span className="bag-total-title bag-total-title--delivery" data-bind="localeText: {key: 'lang_bag_total_delivery'}">Delivery</span>
                      <a className="bag-delivery-options-link" target="_blank" data-bind="attr: { title: linkTitleTranslation, href: deliveryInformationLinkAddress }" title="Read about our delivery options by clicking here" href="http://www.asos.com/customer-service/delivery/?CTARef=Bag+Delivery+Info+Button" />
                    </p>
                      <div className="delivery-dropdown-holder">
                          <span className="bag-item-selector--desktop">
                            <select className="bag-item-selector              select2-hidden-accessible" data-bind="
                options: options,
                optionsText: optionsValue,
                optionsValue: 'deliveryOptionId',
                value: selectedDeliveryOption,
                select2: {}
            " tabIndex={-1} aria-hidden="true"><option value={1}>Standard Delivery (£3.81)</option><option value={5}>Express Delivery (£29.38)</option></select><span className="select2 select2-container select2-container--default" dir="ltr" style={{width: 300}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-labelledby="select2-muqq-container"><span className="select2-selection__rendered" id="select2-muqq-container" title="Standard Delivery (£3.81)">Standard Delivery (£3.81)</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                          </span>
                        <span className="bag-item-selector--mobile">
                            <select className="
                bag-item-selector
            " data-bind="
                options: options,
                optionsText: optionsValue,
                optionsValue: 'deliveryOptionId',
                value: selectedDeliveryOption
            "><option value={1}>Standard Delivery (£3.81)</option><option value={5}>Express Delivery (£29.38)</option></select>
                          </span>
                      </div>
                    </bag-delivery-options>
                    {/* /ko */}
                    <span className="bag-title-quicklink bag-title-quicklink--checkout">
                        <p className="bag-total-button-holder">
                          <a href="#" className="bag-total-button bag-total-button--checkout bag-total-button--checkout--total" data-bind="
                        localeText: {
                            key: 'lang_bag_total_checkout_link'
                        },
                        event: {
                            click: startCheckout
                        },
                        css: {
                            'bag-total-button--checkout--quicklink': quickLink,
                            'bag-total-button--checkout--total': !quickLink
                        }
                    ">CHECKOUT</a>
                        </p>
                      </span>
                  </div>
                </div>
                </bag-total>
                <bag-payment-options params="bag: bag"><div className="bag-payment-options">
                  <div className="bag-payment-options-title" data-bind="
            localeText: {key: 'lang_payment_options_title'}
        ">WE ACCEPT:</div>
                  {/* ko ifnot: loading */}
                  <img className="bag-payment-options-image" data-bind="attr: { src: imageUrl, alt: 'payment options' }" src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="payment options" />
                  {/* /ko */}
                </div>
                </bag-payment-options>
                <div className="bag-discount-message" data-bind="localeText: {key: 'lang_discount_code_info'}">Got a discount code? Add it in the next step.</div>
                <bag-messages className="bag-messages-panel-totals" params="messages: panelMessages.totals"><div className="bag-messaging-looper" data-bind="foreach: messages" />
                </bag-messages>
                {/* /ko */}
              </div>
            </div>
              {/* /ko */}
              {/* ko if: emptyBag */}{/* /ko */}
              {/* ko ifnot: emptyBag */}
              {/* ko ifnot: hasExpiredItems */}
              {/* ko ifnot: loading */}
              <bag-expired-items-message-block><div className="bag-view-saved-items-holder">
                <h2 className="bag-expired-items-header" data-bind="localeText: {key: 'lang_bag_expired_items_header'}">Wondering where your items have gone?</h2>
                <p className="bag-expired-items-text" data-bind="localeText: {key: 'lang_bag_expired_items_text'}">No worries – you'll find them in your Saved Items.</p>
                <a className="view-saved-items-btn" data-bind="attr:{ href: viewSavedLink }, localeText: {key: 'lang_bag_expired_items_button'}" href="http://www.asos.com/saved-items/">VIEW ALL SAVED ITEMS</a>
              </div>
              </bag-expired-items-message-block>
              {/* /ko */}
              {/* /ko */}
              {/* /ko */}
            </div>
            {/* /ko */}
            {/* ko if: bagFirstRunLoading */}{/* /ko */}
            {/* ko if: isModalOpen */}{/* /ko */}
          </div>
        </div>
      </div>
    );
  }
}

export default BagPage;
