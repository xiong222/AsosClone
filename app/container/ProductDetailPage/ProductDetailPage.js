import React from 'react';
import WomenPage from '../WomenPage/WomenPage';

class ProductDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const stylesheet1 = require('./product_detail.css');
    return (
      <div className="asos-product pg-in-stock" id="asos-product">
        <style dangerouslySetInnerHTML={{ __html: stylesheet1 }} />
        <nav>
          <div className="layout-width">
            <div id="breadcrumb" className="bread-crumb">
              <ul>
                <li id="bcHome">
                  <a rel="nofollow" href="http://www.asos.com/?hrd=1">Home</a>
                </li>
                <li id="bc2">
                  <a rel="nofollow" href="http://www.asos.com/women/">Women</a>
                </li>
                <li id="bc3">
                  <a rel="nofollow" href="http://www.asos.com/women/outlet/cat/?cid=27391">Outlet</a>
                </li>
                <li id="bc4">
                  <a rel="nofollow" href="http://www.asos.com/women/outlet/ctas/cat/?cid=28002">ASOS Outlet</a>
                </li>
                <li id="bc5">
                  <a rel="nofollow" href="http://www.asos.com/women/outlet/ctas/timed-sale-3/cat/?cid=28036">Up to 60%
                    off layering
                  </a>
                </li>
                <li id="bcProduct">
                  Consigned Pocket Front Backpack
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section id="core-product" className="core-product-container">
          <div className="layout-width">
            <div id="gallery-content" className="gallery-content-wrapper">
              <div className="product-gallery-static">
                <img
                  src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-1-black?$XXL$&wid=513&fit=constrain"
                  alt="image.AlternateText"
                />
              </div>
              <div
                className="product-gallery"
                data-bind="component: { name: &quot;product-gallery&quot;, params: {state: state,  data: { rootElement: $element, id: product.id, images: product.images, map: product.colourImageMap, localisedMap: product.localisedColourImageMap, defaultColour: product.defaultColour, media: product.media, playerParams: { scene7: { imageServer: &quot;https://images.asos-media.com&quot;, videoServer: &quot;https://video.asos-media.com&quot; }}}}}"
              >
                <div className="product-carousel" id="product-gallery">
                  <div
                    className="window"
                    data-bind="swipe"
                    style={{
                      touchAction: 'pan-y',
                      userSelect: 'none',
                      WebkitUserDrag: 'none',
                      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                    }}
                  >
                    <ul
                      data-bind="foreach: galleryItems, css: { animate : animate() }, style: { width : galleryWidth, marginLeft : galleryPosition }"
                      style={{
                        width: '500%',
                        marginLeft: '-100%'
                      }}
                    >
                      <li
                        data-bind="style: { width : $parent.itemWidth}, css: { 'zoomable': $parent.imageData() }, attr: { 'data-gallery-index': $index }"
                        data-gallery-index={0}
                        style={{ width: '20%' }}
                        className="zoomable"
                      >
                        <div
                          className="asos-media spinset imageviewer"
                          data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: $parent.playerParams.scene7, viewer: { showCloseButton: false, zoomFactors: $parent.zoomFactors, baseJpgQlt: 80, zoomJpgQlt: 90, handleLoadingErrors: false, showHint: false }, api: $parent.imageViewerApis()[$index()], messages: $parent.playerParams.messages } }, visible: $parent.imageViewersVisibility()[$index()]"
                          style={{
                            touchAction: 'pan-y',
                            userSelect: 'none',
                            WebkitUserDrag: 'none',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                          }}
                        >
                          <div className="asos-media-players amp-relative">
                            <div
                              className="amp-spin-viewer amp-relative"
                              data-bind="css: { &quot;pannable&quot;: isPannable() }"
                            >
                              <div className="amp-spinner amp-relative">
                                <div className="amp-page amp-spin">
                                  <div
                                    className="amp-page amp-hint"
                                    data-bind="fadeVisible: isHintVisible"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="amp-hint-container">
                                      <div className="amp-hint-gesture amp-first">
                                        <div className="amp-hint-gesture-img sprite drag" />
                                      </div>
                                      <div className="amp-clear" />
                                      <div className="amp-hint-gesture amp-first">
                                        <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                      </div>
                                      <div className="amp-clear" />
                                    </div>
                                  </div>
                                  <div className="amp-page amp-overlay" />
                                  <div className="amp-page amp-images">
                                    <div className="amp-frame">
                                      <div
                                        className="fullImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: 513,
                                          height: 654
                                        }}
                                      ><img
                                          className="img"
                                        data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                                        src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-4?$XXL$&wid=513&fit=constrain"
                                          style={{
                                            visibility: 'visible',
                                            width: '100%',
                                            height: '100%'
                                          }}
                                      />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="amp-page amp-loading"
                                  data-bind="visible: isLoadingPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-loading-img" />
                                  <span data-bind="text: loadingPercentage() + '%'">0%</span>
                                </div>
                                <div
                                  className="amp-page amp-page-message amp-error-page"
                                  data-bind="visible: isErrorPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-message-container">
                                    <div className="amp-message-box">
                                      <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                      <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong.
                                        Please check your connection and refresh the video.
                                      </p>
                                      <div
                                        className="amp-button amp-button-black"
                                        data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                      >Refresh
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amp-controls">
                                <div
                                  className="amp-button amp-wrapper"
                                  data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                                  style={{ display: 'none' }}
                                >
                                  <div className="sprite close" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() !== 1 */}
                        <img
                          className="gallery-image"
                          data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-4?$XXL$&wid=513&fit=constrain"
                          style={{ visibility: 'hidden' }}
                        />
                        {/* /ko */}
                      </li>
                      <li
                        data-bind="style: { width : $parent.itemWidth}, css: { 'zoomable': $parent.imageData() }, attr: { 'data-gallery-index': $index }"
                        data-gallery-index={1}
                        style={{ width: '20%' }}
                        className="zoomable"
                      >
                        <div
                          className="asos-media spinset imageviewer"
                          data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: $parent.playerParams.scene7, viewer: { showCloseButton: false, zoomFactors: $parent.zoomFactors, baseJpgQlt: 80, zoomJpgQlt: 90, handleLoadingErrors: false, showHint: false }, api: $parent.imageViewerApis()[$index()], messages: $parent.playerParams.messages } }, visible: $parent.imageViewersVisibility()[$index()]"
                          style={{
                            touchAction: 'pan-y',
                            userSelect: 'none',
                            WebkitUserDrag: 'none',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                          }}
                        >
                          <div className="asos-media-players amp-relative">
                            <div
                              className="amp-spin-viewer amp-relative"
                              data-bind="css: { &quot;pannable&quot;: isPannable() }"
                            >
                              <div className="amp-spinner amp-relative">
                                <div className="amp-page amp-spin">
                                  <div
                                    className="amp-page amp-hint"
                                    data-bind="fadeVisible: isHintVisible"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="amp-hint-container">
                                      <div className="amp-hint-gesture amp-first">
                                        <div className="amp-hint-gesture-img sprite drag" />
                                      </div>
                                      <div className="amp-clear" />
                                      <div className="amp-hint-gesture amp-first">
                                        <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                      </div>
                                      <div className="amp-clear" />
                                    </div>
                                  </div>
                                  <div className="amp-page amp-overlay" />
                                  <div className="amp-page amp-images">
                                    <div className="amp-frame">
                                      <div
                                        className="fullImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: 513,
                                          height: 654
                                        }}
                                      ><img
                                        className="img"
                                          data-bind="attr: { src: $parent.colourOptionImage().url + '?$XXL$&wid=513&fit=constrain' }"
                                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-1-black?$XXL$&wid=513&fit=constrain"
                                          style={{
                                            visibility: 'visible',
                                            width: '100%',
                                            height: '100%'
                                          }}
                                      />
                                      </div>
                                      <div
                                        className="partitionedImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          width: 513,
                                          height: 654,
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          display: 'none'
                                        }}
                                      >
                                        <div
                                          className="tile"
                                          data-tile-hp={0}
                                          data-tile-vp={0}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=0,0,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={1}
                                          data-tile-vp={0}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=653,0,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={2}
                                          data-tile-vp={0}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=1306,0,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={0}
                                          data-tile-vp={1}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=0,625,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={1}
                                          data-tile-vp={1}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=653,625,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={2}
                                          data-tile-vp={1}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=1306,625,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={0}
                                          data-tile-vp={2}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=0,1250,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={1}
                                          data-tile-vp={2}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=653,1250,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={2}
                                          data-tile-vp={2}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=1306,1250,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={0}
                                          data-tile-vp={3}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=0,1875,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={1}
                                          data-tile-vp={3}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=653,1875,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                        <div
                                          className="tile"
                                          data-tile-hp={2}
                                          data-tile-vp={3}
                                          style={{
                                            float: 'left',
                                            width: '33.3333%',
                                            height: '25%'
                                          }}
                                        ><img
                                          src="https://images.asos-media.com/products/asos/9432042-1-black?wid=1959&hei=2500&size=1959,2500&rect=1306,1875,653,625&qlt=90"
                                          style={{
                                              width: '100%',
                                              height: '100%'
                                            }}
                                        />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="amp-page amp-loading"
                                  data-bind="visible: isLoadingPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-loading-img" />
                                  <span data-bind="text: loadingPercentage() + '%'">0%</span>
                                </div>
                                <div
                                  className="amp-page amp-page-message amp-error-page"
                                  data-bind="visible: isErrorPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-message-container">
                                    <div className="amp-message-box">
                                      <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                      <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong.
                                        Please check your connection and refresh the video.
                                      </p>
                                      <div
                                        className="amp-button amp-button-black"
                                        data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                      >Refresh
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amp-controls">
                                <div
                                  className="amp-button amp-wrapper"
                                  data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                                  style={{ display: 'none' }}
                                >
                                  <div className="sprite close" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ko if: $index() === 1 */}
                        <img
                          className="gallery-image"
                          data-bind="attr: { src: $parent.colourOptionImage().url + '?$XXL$&wid=513&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-1-black?$XXL$&wid=513&fit=constrain"
                          style={{ visibility: 'hidden' }}
                        />
                        {/* /ko */}
                        {/* ko if: $index() !== 1 */}{/* /ko */}
                      </li>
                      <li
                        data-bind="style: { width : $parent.itemWidth}, css: { 'zoomable': $parent.imageData() }, attr: { 'data-gallery-index': $index }"
                        data-gallery-index={2}
                        style={{ width: '20%' }}
                        className="zoomable"
                      >
                        <div
                          className="asos-media spinset imageviewer"
                          data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: $parent.playerParams.scene7, viewer: { showCloseButton: false, zoomFactors: $parent.zoomFactors, baseJpgQlt: 80, zoomJpgQlt: 90, handleLoadingErrors: false, showHint: false }, api: $parent.imageViewerApis()[$index()], messages: $parent.playerParams.messages } }, visible: $parent.imageViewersVisibility()[$index()]"
                          style={{
                            touchAction: 'pan-y',
                            userSelect: 'none',
                            WebkitUserDrag: 'none',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                          }}
                        >
                          <div className="asos-media-players amp-relative">
                            <div
                              className="amp-spin-viewer amp-relative"
                              data-bind="css: { &quot;pannable&quot;: isPannable() }"
                            >
                              <div className="amp-spinner amp-relative">
                                <div className="amp-page amp-spin">
                                  <div
                                    className="amp-page amp-hint"
                                    data-bind="fadeVisible: isHintVisible"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="amp-hint-container">
                                      <div className="amp-hint-gesture amp-first">
                                        <div className="amp-hint-gesture-img sprite drag" />
                                      </div>
                                      <div className="amp-clear" />
                                      <div className="amp-hint-gesture amp-first">
                                        <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                      </div>
                                      <div className="amp-clear" />
                                    </div>
                                  </div>
                                  <div className="amp-page amp-overlay" />
                                  <div className="amp-page amp-images">
                                    <div className="amp-frame">
                                      <div
                                        className="fullImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: 513,
                                          height: 654
                                        }}
                                      ><img
                                        className="img"
                                        data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                                        src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-2?$XXL$&wid=513&fit=constrain"
                                          style={{
                                            visibility: 'visible',
                                            width: '100%',
                                            height: '100%'
                                          }}
                                      />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="amp-page amp-loading"
                                  data-bind="visible: isLoadingPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-loading-img" />
                                  <span data-bind="text: loadingPercentage() + '%'">0%</span>
                                </div>
                                <div
                                  className="amp-page amp-page-message amp-error-page"
                                  data-bind="visible: isErrorPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-message-container">
                                    <div className="amp-message-box">
                                      <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                      <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong.
                                        Please check your connection and refresh the video.
                                      </p>
                                      <div
                                        className="amp-button amp-button-black"
                                        data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                      >Refresh
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amp-controls">
                                <div
                                  className="amp-button amp-wrapper"
                                  data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                                  style={{ display: 'none' }}
                                >
                                  <div className="sprite close" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() !== 1 */}
                        <img
                          className="gallery-image"
                          data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-2?$XXL$&wid=513&fit=constrain"
                          style={{ visibility: 'hidden' }}
                        />
                        {/* /ko */}
                      </li>
                      <li
                        data-bind="style: { width : $parent.itemWidth}, css: { 'zoomable': $parent.imageData() }, attr: { 'data-gallery-index': $index }"
                        data-gallery-index={3}
                        style={{ width: '20%' }}
                        className="zoomable"
                      >
                        <div
                          className="asos-media spinset imageviewer"
                          data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: $parent.playerParams.scene7, viewer: { showCloseButton: false, zoomFactors: $parent.zoomFactors, baseJpgQlt: 80, zoomJpgQlt: 90, handleLoadingErrors: false, showHint: false }, api: $parent.imageViewerApis()[$index()], messages: $parent.playerParams.messages } }, visible: $parent.imageViewersVisibility()[$index()]"
                          style={{
                            touchAction: 'pan-y',
                            userSelect: 'none',
                            WebkitUserDrag: 'none',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                          }}
                        >
                          <div className="asos-media-players amp-relative">
                            <div
                              className="amp-spin-viewer amp-relative"
                              data-bind="css: { &quot;pannable&quot;: isPannable() }"
                            >
                              <div className="amp-spinner amp-relative">
                                <div className="amp-page amp-spin">
                                  <div
                                    className="amp-page amp-hint"
                                    data-bind="fadeVisible: isHintVisible"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="amp-hint-container">
                                      <div className="amp-hint-gesture amp-first">
                                        <div className="amp-hint-gesture-img sprite drag" />
                                      </div>
                                      <div className="amp-clear" />
                                      <div className="amp-hint-gesture amp-first">
                                        <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                      </div>
                                      <div className="amp-clear" />
                                    </div>
                                  </div>
                                  <div className="amp-page amp-overlay" />
                                  <div className="amp-page amp-images">
                                    <div className="amp-frame">
                                      <div
                                        className="fullImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: 513,
                                          height: 654
                                        }}
                                      ><img
                                          className="img"
                                        data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                                        src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-3?$XXL$&wid=513&fit=constrain"
                                        style={{
                                            visibility: 'visible',
                                            width: '100%',
                                            height: '100%'
                                          }}
                                      />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="amp-page amp-loading"
                                  data-bind="visible: isLoadingPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-loading-img" />
                                  <span data-bind="text: loadingPercentage() + '%'">0%</span>
                                </div>
                                <div
                                  className="amp-page amp-page-message amp-error-page"
                                  data-bind="visible: isErrorPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-message-container">
                                    <div className="amp-message-box">
                                      <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                      <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong.
                                        Please check your connection and refresh the video.
                                      </p>
                                      <div
                                        className="amp-button amp-button-black"
                                        data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                      >Refresh
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amp-controls">
                                <div
                                  className="amp-button amp-wrapper"
                                  data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                                  style={{ display: 'none' }}
                                >
                                  <div className="sprite close" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() !== 1 */}
                        <img
                          className="gallery-image"
                          data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-3?$XXL$&wid=513&fit=constrain"
                          style={{ visibility: 'hidden' }}
                        />
                        {/* /ko */}
                      </li>
                      <li
                        data-bind="style: { width : $parent.itemWidth}, css: { 'zoomable': $parent.imageData() }, attr: { 'data-gallery-index': $index }"
                        data-gallery-index={4}
                        style={{ width: '20%' }}
                        className="zoomable"
                      >
                        <div
                          className="asos-media spinset imageviewer"
                          data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: $parent.playerParams.scene7, viewer: { showCloseButton: false, zoomFactors: $parent.zoomFactors, baseJpgQlt: 80, zoomJpgQlt: 90, handleLoadingErrors: false, showHint: false }, api: $parent.imageViewerApis()[$index()], messages: $parent.playerParams.messages } }, visible: $parent.imageViewersVisibility()[$index()]"
                          style={{
                            touchAction: 'pan-y',
                            userSelect: 'none',
                            WebkitUserDrag: 'none',
                            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                          }}
                        >
                          <div className="asos-media-players amp-relative">
                            <div
                              className="amp-spin-viewer amp-relative"
                              data-bind="css: { &quot;pannable&quot;: isPannable() }"
                            >
                              <div className="amp-spinner amp-relative">
                                <div className="amp-page amp-spin">
                                  <div
                                    className="amp-page amp-hint"
                                    data-bind="fadeVisible: isHintVisible"
                                    style={{ display: 'none' }}
                                  >
                                    <div className="amp-hint-container">
                                      <div className="amp-hint-gesture amp-first">
                                        <div className="amp-hint-gesture-img sprite drag" />
                                      </div>
                                      <div className="amp-clear" />
                                      <div className="amp-hint-gesture amp-first">
                                        <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                      </div>
                                      <div className="amp-clear" />
                                    </div>
                                  </div>
                                  <div className="amp-page amp-overlay" />
                                  <div className="amp-page amp-images">
                                    <div className="amp-frame">
                                      <div
                                        className="fullImageContainer"
                                        data-output-width={513}
                                        data-output-height={654}
                                        style={{
                                          position: 'absolute',
                                          top: 0,
                                          left: 0,
                                          width: 513,
                                          height: 654
                                        }}
                                      ><img
                                        className="img"
                                        data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-4?$XXL$&wid=513&fit=constrain"
                                          style={{
                                            visibility: 'visible',
                                            width: '100%',
                                            height: '100%'
                                          }}
                                      />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="amp-page amp-loading"
                                  data-bind="visible: isLoadingPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-loading-img" />
                                  <span data-bind="text: loadingPercentage() + '%'">0%</span>
                                </div>
                                <div
                                  className="amp-page amp-page-message amp-error-page"
                                  data-bind="visible: isErrorPageVisible"
                                  style={{ display: 'none' }}
                                >
                                  <div className="amp-message-container">
                                    <div className="amp-message-box">
                                      <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                      <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong.
                                        Please check your connection and refresh the video.
                                      </p>
                                      <div
                                        className="amp-button amp-button-black"
                                        data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                      >Refresh
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="amp-controls">
                                <div
                                  className="amp-button amp-wrapper"
                                  data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                                  style={{ display: 'none' }}
                                >
                                  <div className="sprite close" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() !== 1 */}
                        <img
                          className="gallery-image"
                          data-bind="attr: { src: url + '?$XXL$&wid=513&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-4?$XXL$&wid=513&fit=constrain"
                          style={{ visibility: 'hidden' }}
                        />
                        {/* /ko */}
                      </li>
                    </ul>
                    <a href="#" className="arrow left-arrow active" data-bind="click:moveLeft"><span>left</span></a>
                    <a href="#" className="arrow right-arrow active" data-bind="click:moveRight"><span>right</span></a>
                    <div className="carousel-bullets">
                      <ul data-bind="foreach: galleryItems">
                        <li data-bind="if: $index() > 0, css: { active: $parent.thumbIndex() === $index() }" />
                        <li
                          data-bind="if: $index() > 0, css: { active: $parent.thumbIndex() === $index() }"
                          className="active"
                        >
                          <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())" />
                        </li>
                        <li data-bind="if: $index() > 0, css: { active: $parent.thumbIndex() === $index() }">
                          <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())" />
                        </li>
                        <li data-bind="if: $index() > 0, css: { active: $parent.thumbIndex() === $index() }">
                          <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())" />
                        </li>
                        <li data-bind="if: $index() > 0, css: { active: $parent.thumbIndex() === $index() }">
                          <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="asos-media catwalk"
                    style={{ display: 'none' }}
                    data-bind="component: { name: &quot;asos-video-player-prod&quot;, params: { scene7: playerParams.scene7, player: { startInFullScreen: startVideoInFullScreen, closeOnFullScreenExited: closeVideoOnFullScreenExited, initialLoopCount: 2 }, api: videoPlayerApi, messages: playerParams.messages } }, visible: isVideoVisible"
                  >
                    <div className="asos-media-players">
                      <div className="amp-video-player amp-relative">
                        <video className="amp-page amp-video-element" data-bind="foreach: sources" controls="controls" />
                        <div
                          className="amp-page amp-page-message amp-error-page"
                          data-bind="visible: isErrorPageVisible"
                          style={{ display: 'none' }}
                        >
                          <div className="amp-message-container">
                            <div className="amp-message-box">
                              <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                              <p data-bind="html: messages.errorMessageText">Something's gone wrong. Please check your
                                connection and refresh the video.
                              </p>
                              <div
                                className="amp-button amp-button-black"
                                data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                              >Refresh
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="amp-page amp-page-message amp-unsupported-page"
                          data-bind="visible: isUnsupportedPageVisible"
                          style={{ display: 'none' }}
                        >
                          <div className="amp-message-container">
                            <div className="amp-message-box">
                              <h2 data-bind="html: messages.unsupportedHeaderText">Your browser is not supported</h2>
                              <p data-bind="html: messages.unsupportedMessageText">Please update your browser to view
                                this video
                              </p>
                              <div
                                className="amp-button amp-button-black"
                                data-bind="html: messages.closeButtonText, click: closeButtonClicked"
                              >Close
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="asos-media spinset spinviewer"
                    style={{
                      display: 'none',
                      touchAction: 'pan-y',
                      userSelect: 'none',
                      WebkitUserDrag: 'none',
                      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
                    }}
                    data-bind="component: { name: &quot;asos-spin-viewer-prod&quot;, params: { scene7: playerParams.scene7, viewer: { spinSpeed: spinSpeed, showCloseButton: showSpinViewerCloseButton, zoomFactors: zoomFactors, reverseVerticalDirection: false, reverseHorizontalDirection: false, baseJpgQlt: 80, zoomJpgQlt: 90, showHint: showSpinViewerContainerHint, useInitialAnimation: true, animationIntervalStart: 100, animationIntervalPeak: 100, animationFramesCount: 5, preloadingTimeout: 30000 }, api: spinViewerApi, messages: playerParams.messages } }, visible: isSpinViewerVisible, css: { &quot;zoomable&quot;: isSpinViewerLoadedWithoutErrors }"
                  >
                    <div className="asos-media-players amp-relative">
                      <div
                        className="amp-spin-viewer amp-relative"
                        data-bind="css: { &quot;pannable&quot;: isPannable() }"
                      >
                        <div className="amp-spinner amp-relative">
                          <div className="amp-page amp-spin">
                            <div
                              className="amp-page amp-hint"
                              data-bind="fadeVisible: isHintVisible"
                              style={{ display: 'none' }}
                            >
                              <div className="amp-hint-container">
                                <div className="amp-hint-gesture amp-first">
                                  <div className="amp-hint-gesture-img sprite drag" />
                                </div>
                                <div className="amp-clear" />
                                <div className="amp-hint-gesture amp-first">
                                  <span data-bind="text: messages.hintDragText">Drag to view 360</span>
                                </div>
                                <div className="amp-clear" />
                              </div>
                            </div>
                            <div className="amp-page amp-overlay" />
                            <div className="amp-page amp-images" />
                          </div>
                          <div
                            className="amp-page amp-loading"
                            data-bind="visible: isLoadingPageVisible"
                            style={{ display: 'none' }}
                          >
                            <div className="amp-loading-img" />
                            <span data-bind="text: loadingPercentage() + '%'">0%</span>
                          </div>
                          <div
                            className="amp-page amp-page-message amp-error-page"
                            data-bind="visible: isErrorPageVisible"
                            style={{ display: 'none' }}
                          >
                            <div className="amp-message-container">
                              <div className="amp-message-box">
                                <h2 data-bind="html: messages.errorHeaderText">Oops!</h2>
                                <p data-bind="html: messages.spinsetErrorMessageText">Something's gone wrong. Please
                                  check your connection and refresh the video.
                                </p>
                                <div
                                  className="amp-button amp-button-black"
                                  data-bind="html: messages.refreshButtonText, click: refreshButtonClicked"
                                >Refresh
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="amp-controls">
                          <div
                            className="amp-button amp-wrapper"
                            data-bind="visible: isCloseButtonVisible, click: closeButtonClicked"
                            style={{ display: 'none' }}
                          >
                            <div className="sprite close" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="thumbnails">
                  <ul>
                    {/* ko foreach: galleryItems */}
                    {/* ko if: $index() > 0 */}{/* /ko */}
                    {/* ko if: $index() > 0 */}
                    <li
                      className="image-thumbnail mobile-hide active"
                      data-bind="css: { active: $parent.thumbIndex() === $index() }"
                    >
                      <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())">
                        {/* ko if: $index() === 1 */}
                        <img
                          data-bind="attr: { src: $parent.colourOptionImage().url + '?$S$&wid=40&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-1-black?$S$&wid=40&fit=constrain"
                        />
                        {/* /ko */}
                        {/* ko if: $index() > 1 */}{/* /ko */}
                      </a>
                    </li>
                    {/* /ko */}
                    {/* ko if: $index() > 0 */}
                    <li
                      className="image-thumbnail mobile-hide"
                      data-bind="css: { active: $parent.thumbIndex() === $index() }"
                    >
                      <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())">
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() > 1 */}
                        <img
                          data-bind="attr: { src: url + '?$S$&wid=40&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-2?$S$&wid=40&fit=constrain"
                        />
                        {/* /ko */}
                      </a>
                    </li>
                    {/* /ko */}
                    {/* ko if: $index() > 0 */}
                    <li
                      className="image-thumbnail mobile-hide"
                      data-bind="css: { active: $parent.thumbIndex() === $index() }"
                    >
                      <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())">
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() > 1 */}
                        <img
                          data-bind="attr: { src: url + '?$S$&wid=40&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-3?$S$&wid=40&fit=constrain"
                        />
                        {/* /ko */}
                      </a>
                    </li>
                    {/* /ko */}
                    {/* ko if: $index() > 0 */}
                    <li
                      className="image-thumbnail mobile-hide"
                      data-bind="css: { active: $parent.thumbIndex() === $index() }"
                    >
                      <a href="#" data-bind="click: $parent.selectThumbnail.bind($data, $index())">
                        {/* ko if: $index() === 1 */}{/* /ko */}
                        {/* ko if: $index() > 1 */}
                        <img
                          data-bind="attr: { src: url + '?$S$&wid=40&fit=constrain' }"
                          src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-4?$S$&wid=40&fit=constrain"
                        />
                        {/* /ko */}
                      </a>
                    </li>
                    {/* /ko */}
                    {/* /ko */}
                    <li
                      className="button button-catwalk"
                      style={{ display: 'none' }}
                      data-bind="visible: isVideoButtonVisible() && isInStock()"
                    >
                      <a href="#" data-bind="click: onVideoButtonActivated, css: { active: isVideoVisible }">
                        <div className="icon-container">
                          <div className="inactive sprite product-play" />
                          <div className="active sprite product-play-filled" />
                        </div>
                        <span className="text" data-bind="text: state.resources.Catwalk">Video</span>
                      </a>
                    </li>
                    <li className="button button-spinset" style={{}} data-bind="visible: isSpinViewerButtonVisible">
                      <a href="#" data-bind="click: onSpinViewerButtonActivated, css: { active: isSpinViewerVisible }">
                        <div className="icon-container">
                          <div className="inactive sprite product-360" />
                          <div
                            className="active sprite product-360-selected"
                            data-bind="css: { 'product-360-selected': !isSpinViewerButtonInClosingState(), 'product-returns': isSpinViewerButtonInClosingState() }"
                          />
                        </div>
                        <span
                          className="text"
                          data-bind="text: isSpinViewerButtonInClosingState() ? 'Gallery' : '360'"
                        >360
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="social-share-icon-desktop" data-bind="visible: isInStock" style={{}}>
                  <a href="#" data-bind="text: state.resources.SocialShare">SHARE</a>
                </div>
              </div>
            </div>
            <div className="layout-aside" id="aside-content">
              <div className="product-hero">
                {/* ko if: state.productData.isInStock */}
                <div className="social-share-icon-mobile"><a href="#" /></div>
                {/* /ko */}
                {/* ko if: !state.productData.isInStock; */}{/* /ko */}
                <h1>Consigned Pocket Front Backpack</h1>
                <div
                  className="product-price"
                  id="product-price"
                  data-bind="component: { name: &quot;product-price&quot;, params: {state: state, showGermanVatMessage: false }}"
                >
                  <div className="grid-row rendered">
                    <span
                      data-id="from-price"
                      data-bind="visible: showFromLabel, text: fromLabelText, css: { 'price-from-discounted' : isDiscountedPrice }"
                      className="price-from price-from-discounted"
                      style={{ display: 'none' }}
                    >From
                    </span>
                    <span
                      data-id="current-price"
                      data-bind="text: priceText(), css: {'product-price-discounted' : isDiscountedPrice }"
                      className="current-price product-price-discounted"
                    >¥153.15
                    </span>
                    <span
                      data-id="rrp-price"
                      data-bind="text: rrpPriceText, visible: showRrpPrice"
                      className="product-prev-price"
                    >RRP ¥342.34
                    </span>
                    <span
                      data-id="previous-price"
                      data-bind="text: prevPriceText, visible: showPrevPrice"
                      className="product-prev-price"
                      style={{ display: 'none' }}
                    />
                    <span
                      data-id="german-vat-message"
                      data-bind="text: germanVatMessage, visible: showGermanVatMessage"
                      className="product-german-vat"
                      style={{ display: 'none' }}
                    />
                  </div>
                  {/* ko if: showPrevPrice */}{/* /ko */}
                </div>
                {/* ko if: state.productData.isInStock */}
                <div
                  className="delivery-and-returns"
                  data-bind="component: { name: &quot;delivery-and-returns&quot;, params: {state: state, hideDeliveryLink: false}}"
                >{/* ko if : !hideDeliveryLink */}
                  {/* ko if : features.deliveryAndReturnsModalEnabled */}
                  <span><a
                    href="#"
                    className="product-delivery"
                    target="_blank"
                    data-bind="text: deliveryReturnsLink, click: deliveryAndReturnsClicked"
                  >Free Delivery &amp; Returns*
                  </a>
                  </span>
                  {/* /ko */}
                  {/* ko if : !features.deliveryAndReturnsModalEnabled */}{/* /ko */}
                  {/* /ko */}
                </div>
                {/* /ko */}
              </div>
              <div
                className="out-of-stock"
                data-bind="component: { name: &quot;out-of-stock&quot;, params: {state: state, data: product}}"
              >{/* ko if: !inStock */}{/* /ko */}
              </div>
              <div
                id="product-colour"
                data-bind="component:{
                            name: &quot;product-colour&quot;,
                            params: {
                                hideLabels: false,
                                useShortSelectColourLabel: false,
                                state: state,
                                data: product,
                                hideOnOutOfStock : true}
                            }"
              >{/* ko if: render */}
                <section>
                  <div className="colour-size colour-component">
                    <div className="grid-row colour-section">
                      <label className="disabled" data-bind="text: colourLabel, visible: !hideLabels">COLOUR:</label>
                      <span
                        className="product-colour"
                        data-bind="visible: colourLabelVisible(), text: selectedColourLabel(), css: { disabled: isDisabled }"
                      >Black
                      </span>
                      <div
                        className="colour-size-select"
                        data-bind="visible: colourDropdownVisible()"
                        style={{ display: 'none' }}
                      >
                        <select
                          data-id="colourSelect"
                          data-bind="optionsCaption: selectColourText,
                        disable: isDisabled,
                        options: data,
                        optionsAfterRender: setColourOptionText,
                        value: colour,
                        css:{ required : noColourSelected()}"
                        >
                          <option value>Please select from 1 colours</option>
                          <option value>Black</option>
                        </select>
                        {/* ko if: noColourSelected() */}{/* /ko */}
                      </div>
                    </div>
                  </div>
                </section>
                {/* /ko */}
              </div>
              <div
                className="component fit-analytics"
                data-bind="component: {
                        name: &quot;fit-analytics&quot;,
                        params: {
                            state: state,
                            data: product
                        }
                     }"
              >
                <div
                  id="product-size"
                  data-bind="component:{
    name: &quot;product-size&quot;,
    params: {
        hideLabels: false,
        hideLowInStock: false,
        showSizeGuide: true,
        state: state,
        data: product,
        useFitAnalytics: isMobile,
        hideOnOutOfStock : true}
    }"
                >{/* ko if: render */}
                  <section>
                    <div className="colour-size size-component">
                      <div
                        className="size-section"
                        data-bind="visible: sizeSectionVisible()"
                        style={{ display: 'none' }}
                      >
                        <div
                          style={{
                            display: 'table',
                            width: '100%'
                          }}
                        >
                          <label
                            style={{
                              display: 'table-cell',
                              verticalAlign: 'top'
                            }}
                            data-bind="text: sizeLabel, visible: !hideLabels, disable: isDisabled"
                          >SIZE:
                          </label>
                          <div
                            style={{
                              display: 'table-cell',
                              verticalAlign: 'top',
                              width: '100%'
                            }}
                          >
                            {/* ko if: !showFitAnalyticsSection() */}
                            <div
                              id="size-guide"
                              className="size-guide"
                              style={{ float: 'right' }}
                              data-bind="component: { name: &quot;size-guide&quot;, params: {dictionary: sizeGuideDictionary , url: sizeGuideLink, visible: state.showSizeGuide, id:id}}"
                            >{/* ko if: render() */}{/* /ko */}
                            </div>
                            {/* /ko */}
                            {/* ko if: showFitAnalyticsSection() */}{/* /ko */}
                          </div>
                        </div>
                        <span
                          className="product-size"
                          data-bind="visible: sizeLabelVisible(), text: selectedSizeLabel(), css: { disabled: isDisabled }"
                          style={{ display: 'none' }}
                        >No Size
                        </span>
                        <div
                          className="colour-size-select"
                          data-bind="visible: sizeDropdownVisible()"
                          style={{ display: 'none' }}
                        >
                          <select
                            data-id="sizeSelect"
                            data-bind="options: variants,
                    optionsAfterRender: disableSizeIfOutOfStock,
                    optionsText: &quot;Size&quot;,
                    optionsCaption: selectSizeText,
                    value: size,
                    disable: isDisabled || sizeDropdownDisabled(),
                    css:{ required : noSizeSelected()}"
                          >
                            <option value>Please select</option>
                            <option value>No Size</option>
                          </select>
                          {/* ko if: noSizeSelected() */}{/* /ko */}
                        </div>
                      </div>
                      <div
                        className="grid-row low-in-stock"
                        data-bind="visible: isLowInStock() && !hideLowInStock"
                        style={{ display: 'none' }}
                      >
                        <span className="clock" /><span data-bind="text:lowInStockText">LOW IN STOCK</span>
                      </div>
                    </div>
                  </section>
                  {/* /ko */}
                </div>
                {/* ko if : showMainSection() */}{/* /ko */}
                <div className="aside-action">
                  <div
                    id="product-add"
                    data-bind="component:{name: &quot;add-item&quot;,
                     params:{
                         productId: product.id,
                         productImage : product.images[0].url,
                         scrollToTop: true,
                         state: state,
                         initiator : &quot;main&quot;
                     }}"
                  >
                    <div className="add-item" data-bind="visible: isVisible">
                      <div className="is-add-item-saving" data-bind="visible: isBusy" style={{ display: 'none' }} />
                      <span
                        className="aria-live"
                        aria-role="status"
                        aria-live="polite"
                        data-bind="{ text: ariaLiveText, attr: { 'aria-label': ariaLiveText }}"
                        aria-label
                      />
                      <a
                        href="#"
                        className="add-button"
                        data-bind="click: addToBag, css : buttonCss, attr: { 'aria-label': resources.AddToBag }"
                        aria-label="Add to bag"
                      >
                        <span
                          className="product-tick"
                          data-bind="visible: addedToBag, text: iconText"
                          style={{ display: 'none' }}
                        >add to basket
                        </span>
                        <span data-bind="text: buttonText">Add to bag</span>
                      </a>
                    </div>
                  </div>
                  <div
                    id="product-save"
                    data-bind="component:{name: &quot;save-button&quot;,
                     params:{
                         productId: product.id,
                         productImage : product.images[0].url,
                         state: state
                     }
                     }"
                  >
                    <div className="save-button" data-bind="click: componentClicked">
                      <a
                        className="save-button-link"
                        href="#"
                        data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                      >
                        <span className="heartPrimary" />
                        <span className="heartSecondary" />
                      </a>
                      <span
                        className="toolTip fade nonError"
                        data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                        style={{ display: 'none' }}
                      />
                    </div>
                  </div>
                  <div
                    className="add-item-error error-message"
                    data-bind="visible: state.showAddToBagError, html: state.addToBagErrorMessage"
                    style={{ display: 'none' }}
                  />
                </div>
                {/* ko if: showLowerSection */}{/* /ko */}
              </div>
              <div
                id="shipping-restrictions"
                data-bind="component:{
                            name: &quot;shipping-restrictions&quot;,
                            params: { state: state, data: product}
                            }"
              >
                <div
                  className="shipping-restrictions"
                  data-bind="visible: showShippingRestrictions"
                  style={{ display: 'none' }}
                >
                  <span><a href="#" data-bind="text:shippingRestrictionsLabel, click:openShippingRestrictions" /></span>
                </div>
              </div>
            </div>
            <div className="stock-price-retry-oos layout-aside" id="aside-content-oos">
              <div
                className="out-of-stock"
                data-bind="component: { name: &quot;out-of-stock&quot;, params: {state: state, data: product}}"
              />
            </div>
            <div className="stock-price-retry layout-aside" id="aside-content-retry">
              <div
                data-bind="component: { name: &quot;stock-price-retry&quot;, params: {state: state }}"
              >{/* ko if : state.showStockPriceRetry */}{/* /ko */}
              </div>
            </div>
          </div>
        </section>
        <section className="product-description">
          <div className="layout-width">
            <div className="product-details" id="product-details">
              <div
                className="overflow-container"
                data-bind="css: { open: isOpen()}, style: {'max-height':containerHeight()}"
              >
                <div className="col">
                  <div className="product-description">
                    <h4>Product Details</h4>
                    <span><ul><li><a
                      href="http://www.asos.com/women/sale/bags-purses/cat/?cid=9714"
                    ><strong>Bag</strong>
                    </a> by Consigned<ul>    <li>For those must-carry essentials</li>    <li>Grab handle</li><li>Padded straps</li><li>Zip fastening</li><li>External pocket</li><li>Compression straps</li><li>Internal padded sleeve</li><li>Inner zip pocket</li></ul>
                    </li>
                    </ul>
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div className="product-code">
                    <h4>PRODUCT CODE</h4>
                    <span>1246980</span>
                  </div>
                </div>
                <div className="col">
                  <div className="care-info">
                    <h4>LOOK AFTER ME</h4>
                    <span>Just give it a quick wipe with a damp cloth to clean<br />For all-day-everyday ease</span>
                  </div>
                  <div className="about-me">
                    <h4>ABOUT ME</h4>
                    <span>Smooth nylon outer<br />It's tougher than it looks<br /><br />Outer: 100% Nylon, Lining: 100% Nylon, Trim: 100% Rubber</span>
                  </div>
                </div>
                <div className="show-more" data-bind="click:toggle">
                  <div className="fade">
                    <a href="#" data-bind="css: { show: isOpen() === false}" className="show">SHOW MORE</a>
                    <a href="#" data-bind="css: { show: isOpen()}">SHOW LESS</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="lower-content">
          {/* ko if: product.isInStock */}
          <div
            className="component buy-the-look"
            data-bind="component: { name: &quot;buy-the-look&quot;, params: {state: state, data: product, render: product.isInStock, showGermanVatMessage: false}}"
          >
            <section data-bind="visible: isVisible" className="buy-the-look" style={{}}>
              <div className="layout-width">
                <div className="layout-module">
                  <h2 data-bind="text: state.resources.BuyTheLook">BUY THE LOOK</h2>
                  <div className="carousel">
                    <div className="row">
                      <div className="arrows">
                        <a
                          className="arrow left-arrow"
                          data-bind="click:carousel.moveLeft, css: {active : carousel.hasPreviousPanel }, visible: carousel.hasOtherPanels"
                          style={{ display: 'none' }}
                        ><span />
                        </a>
                      </div>
                      <div className="window" data-bind="swipe">
                        <ul
                          data-bind="foreach: {data: carousel.visibleItems, afterRender: renderedHandler}, style: { height: uniformHeight, width: carousel.width(), marginLeft:carousel.slidePosition()},css: { suppressSlide : !carousel.animate() }, afterRender: postRender "
                          style={{
                            width: '100%',
                            marginLeft: '0%',
                            height: 429
                          }}
                        >
                          <li
                            data-bind="style: { width: $parent.carousel.itemWidth() }, css : { 'out-of-stock' : !isInStock, 'in-stock' : isInStock}"
                            className="in-stock"
                            style={{ width: '25%' }}
                          >
                            <div className="item card-container">
                              <div className="card" data-bind="css : { 'flipped' : state.showAddToBagError() }">
                                <div className="front">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                    >
                                    </a>
                                    <div
                                      className="product-image"
                                      data-bind="component: { name: &quot;product-image&quot;, params: {imgUrl: imgUrl, state:state, productId: product.id, context:&quot;buythelook&quot; } }"
                                    >
                                      <a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                      />
                                      <div className="grid-row"><a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                      >
                                        <img
                                          data-bind="attr: { src: imgUrl }"
                                          src="//images.asos-media.com/products/asos-design-t-shirt-in-boyfriend-fit-with-rolled-sleeve-and-curved-hem-in-white/8950592-1-white?$L$&wid=190&fit=constrain"
                                        />
                                      </a>
                                        <div
                                        data-bind="component:{
            name: &quot;save-button&quot;,
            params:{
                productId: productId,
                state: state,
                productImage : imgUrl,
                context : context
                  }
           }"
                                      ><a
                                          data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                          href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                        />
                                        <div className="save-button" data-bind="click: componentClicked"><a
                                            data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                            href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                          >
                                        </a><a
                                                                                                           className="save-button-link"
                                                                                                           href="#"
                                                                                                           data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                                                                                                         >
                                                                                                           <span className="heartPrimary" />
                                                                                                           <span className="heartSecondary" />
                                        </a>
                                            <span
                                            className="toolTip fade nonError"
                                            data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                            style={{ display: 'none' }}
                                          />
                                          </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div
                                      className="product-title"
                                      data-bind="text:$parent.formatTitle(product.name)"
                                    >ASOS DESIGN t-shirt in
                                      boyfri...
                                    </div>
                                  </div>
                                  <div className="btl-options">
                                    <div
                                      className="product-price"
                                      data-bind="component: { name: &quot;product-price&quot;, params: {state: state, hideDeliveryLink: true, showGermanVatMessage: showGermanVatMessage}}"
                                    >
                                      <div className="grid-row rendered">
                                        <span
                                          data-id="from-price"
                                          data-bind="visible: showFromLabel, text: fromLabelText, css: { 'price-from-discounted' : isDiscountedPrice }"
                                          className="price-from"
                                          style={{ display: 'none' }}
                                        >From
                                        </span>
                                        <span
                                          data-id="current-price"
                                          data-bind="text: priceText(), css: {'product-price-discounted' : isDiscountedPrice }"
                                          className="current-price"
                                        >¥108.11
                                        </span>
                                        <span
                                          data-id="rrp-price"
                                          data-bind="text: rrpPriceText, visible: showRrpPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="previous-price"
                                          data-bind="text: prevPriceText, visible: showPrevPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="german-vat-message"
                                          data-bind="text: germanVatMessage, visible: showGermanVatMessage"
                                          className="product-german-vat"
                                          style={{ display: 'none' }}
                                        />
                                      </div>
                                      {/* ko if: showPrevPrice */}{/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: 'product-colour',
                                        params: {
                                            hideLabels: true,
                                            useShortSelectColourLabel: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size colour-component">
                                          <div className="grid-row colour-section">
                                            <label
                                              className="disabled"
                                              data-bind="text: colourLabel, visible: !hideLabels"
                                              style={{ display: 'none' }}
                                            >COLOUR:
                                            </label>
                                            <span
                                              className="product-colour"
                                              data-bind="visible: colourLabelVisible(), text: selectedColourLabel(), css: { disabled: isDisabled }"
                                            >White
                                            </span>
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: colourDropdownVisible()"
                                              style={{ display: 'none' }}
                                            >
                                              <select
                                                data-id="colourSelect"
                                                data-bind="optionsCaption: selectColourText,
                        disable: isDisabled,
                        options: data,
                        optionsAfterRender: setColourOptionText,
                        value: colour,
                        css:{ required : noColourSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>White</option>
                                              </select>
                                              {/* ko if: noColourSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: &quot;product-size&quot;,
                                        params: {
                                            hideLabels: true,
                                            hideLowInStock: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size size-component">
                                          <div className="size-section" data-bind="visible: sizeSectionVisible()">
                                            <div
                                              style={{
                                                display: 'table',
                                                width: '100%'
                                              }}
                                            >
                                              <label
                                                style={{
                                                  display: 'none',
                                                  verticalAlign: 'top'
                                                }}
                                                data-bind="text: sizeLabel, visible: !hideLabels, disable: isDisabled"
                                              >SIZE:
                                              </label>
                                              <div
                                                style={{
                                                  display: 'table-cell',
                                                  verticalAlign: 'top',
                                                  width: '100%'
                                                }}
                                              >
                                                {/* ko if: !showFitAnalyticsSection() */}
                                                <div
                                                  id="size-guide"
                                                  className="size-guide"
                                                  style={{ float: 'right' }}
                                                  data-bind="component: { name: &quot;size-guide&quot;, params: {dictionary: sizeGuideDictionary , url: sizeGuideLink, visible: state.showSizeGuide, id:id}}"
                                                >{/* ko if: render() */}{/* /ko */}
                                                </div>
                                                {/* /ko */}
                                                {/* ko if: showFitAnalyticsSection() */}{/* /ko */}
                                              </div>
                                            </div>
                                            <span
                                              className="product-size"
                                              data-bind="visible: sizeLabelVisible(), text: selectedSizeLabel(), css: { disabled: isDisabled }"
                                              style={{ display: 'none' }}
                                            />
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: sizeDropdownVisible()"
                                            >
                                              <select
                                                data-id="sizeSelect"
                                                data-bind="options: variants,
                    optionsAfterRender: disableSizeIfOutOfStock,
                    optionsText: &quot;Size&quot;,
                    optionsCaption: selectSizeText,
                    value: size,
                    disable: isDisabled || sizeDropdownDisabled(),
                    css:{ required : noSizeSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>UK 4</option>
                                                <option value>UK 6</option>
                                                <option value>UK 8</option>
                                                <option value>UK 10</option>
                                                <option value>UK 12</option>
                                                <option value disabled>UK 14 - Not available</option>
                                                <option value>UK 16</option>
                                                <option value>UK 18</option>
                                              </select>
                                              {/* ko if: noSizeSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                          <div
                                            className="grid-row low-in-stock"
                                            data-bind="visible: isLowInStock() && !hideLowInStock"
                                            style={{ display: 'none' }}
                                          >
                                            <span className="clock" /><span
                                              data-bind="text:lowInStockText"
                                            >LOW IN STOCK
                                            </span>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    {/* ko if: isInStock */}
                                    <div className="add-status">
                                      <div
                                        data-component-id="add-item"
                                        data-bind="component: { name: &quot;add-item&quot;,
                                             params:{
                                                 productId: product.id,
                                                 showTryAgain: false,
                                                 productImage : product.images[0].url,
                                                 state: state,
                                                 initiator : &quot;buyTheLook&quot;
                                             }}"
                                      >
                                        <div className="add-item" data-bind="visible: isVisible">
                                          <div
                                            className="is-add-item-saving"
                                            data-bind="visible: isBusy"
                                            style={{ display: 'none' }}
                                          />
                                          <span
                                            className="aria-live"
                                            aria-role="status"
                                            aria-live="polite"
                                            data-bind="{ text: ariaLiveText, attr: { 'aria-label': ariaLiveText }}"
                                            aria-label
                                          />
                                          <a
                                            href="#"
                                            className="add-button"
                                            data-bind="click: addToBag, css : buttonCss, attr: { 'aria-label': resources.AddToBag }"
                                            aria-label="Add to bag"
                                          >
                                            <span
                                              className="product-tick"
                                              data-bind="visible: addedToBag, text: iconText"
                                              style={{ display: 'none' }}
                                            >add to basket
                                            </span>
                                            <span data-bind="text: buttonText">Add to bag</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {/* /ko */}
                                    <div
                                      className="out-of-stock-button"
                                      data-bind="visible: !isInStock"
                                      style={{ display: 'none' }}
                                    >
                                      <span data-bind="text: state.resources.OutOfStockBuyTheLook">OUT OF STOCK</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="back">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="8950592?CTAref=Complete+the+Look+Carousel_1&featureref1=complete+the+look"
                                    >
                                      <img
                                        className="product-image"
                                        data-bind="attr: { src: imgUrl }"
                                        alt
                                        src="//images.asos-media.com/products/asos-design-t-shirt-in-boyfriend-fit-with-rolled-sleeve-and-curved-hem-in-white/8950592-1-white?$L$&wid=190&fit=constrain"
                                      />
                                    </a>
                                  </div>
                                  <div className="add-failed">
                                    <div className="add-to-bag-error" data-bind="html: state.addToBagErrorMessage" />
                                    <div className="retry-add">
                                      <a className="failed" data-bind="click: $parent.tryAgain($index())">
                                        <span data-bind="text: state.resources.AddToBagTryAgain">TRY AGAIN</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            data-bind="style: { width: $parent.carousel.itemWidth() }, css : { 'out-of-stock' : !isInStock, 'in-stock' : isInStock}"
                            className="in-stock"
                            style={{ width: '25%' }}
                          >
                            <div className="item card-container">
                              <div className="card" data-bind="css : { 'flipped' : state.showAddToBagError() }">
                                <div className="front">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                    >
                                    </a>
                                    <div
                                      className="product-image"
                                      data-bind="component: { name: &quot;product-image&quot;, params: {imgUrl: imgUrl, state:state, productId: product.id, context:&quot;buythelook&quot; } }"
                                    >
                                      <a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                      />
                                      <div className="grid-row"><a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                      >
                                        <img
                                          data-bind="attr: { src: imgUrl }"
                                          src="//images.asos-media.com/products/asos-design-two-pack-simple-hoop-earrings/5648529-1-mixedmetal?$L$&wid=190&fit=constrain"
                                        />
                                      </a>
                                        <div
                                        data-bind="component:{
            name: &quot;save-button&quot;,
            params:{
                productId: productId,
                state: state,
                productImage : imgUrl,
                context : context
                  }
           }"
                                      ><a
                                          data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                          href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                        />
                                        <div className="save-button" data-bind="click: componentClicked"><a
                                            data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                            href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                          >
                                                                                                           </a><a
                                                                                                           className="save-button-link"
                                          href="#"
                                          data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                                                                                                         >
                                          <span className="heartPrimary" />
                                          <span className="heartSecondary" />
                                                                                                         </a>
                                            <span
                                            className="toolTip fade nonError"
                                            data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                            style={{ display: 'none' }}
                                          />
                                          </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div
                                      className="product-title"
                                      data-bind="text:$parent.formatTitle(product.name)"
                                    >ASOS DESIGN two pack simple
                                      h...
                                    </div>
                                  </div>
                                  <div className="btl-options">
                                    <div
                                      className="product-price"
                                      data-bind="component: { name: &quot;product-price&quot;, params: {state: state, hideDeliveryLink: true, showGermanVatMessage: showGermanVatMessage}}"
                                    >
                                      <div className="grid-row rendered">
                                        <span
                                          data-id="from-price"
                                          data-bind="visible: showFromLabel, text: fromLabelText, css: { 'price-from-discounted' : isDiscountedPrice }"
                                          className="price-from"
                                          style={{ display: 'none' }}
                                        >From
                                        </span>
                                        <span
                                          data-id="current-price"
                                          data-bind="text: priceText(), css: {'product-price-discounted' : isDiscountedPrice }"
                                          className="current-price"
                                        >¥27.03
                                        </span>
                                        <span
                                          data-id="rrp-price"
                                          data-bind="text: rrpPriceText, visible: showRrpPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="previous-price"
                                          data-bind="text: prevPriceText, visible: showPrevPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="german-vat-message"
                                          data-bind="text: germanVatMessage, visible: showGermanVatMessage"
                                          className="product-german-vat"
                                          style={{ display: 'none' }}
                                        />
                                      </div>
                                      {/* ko if: showPrevPrice */}{/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: 'product-colour',
                                        params: {
                                            hideLabels: true,
                                            useShortSelectColourLabel: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size colour-component">
                                          <div className="grid-row colour-section">
                                            <label
                                              className="disabled"
                                              data-bind="text: colourLabel, visible: !hideLabels"
                                              style={{ display: 'none' }}
                                            >COLOUR:
                                            </label>
                                            <span
                                              className="product-colour"
                                              data-bind="visible: colourLabelVisible(), text: selectedColourLabel(), css: { disabled: isDisabled }"
                                            >Mixed metal
                                            </span>
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: colourDropdownVisible()"
                                              style={{ display: 'none' }}
                                            >
                                              <select
                                                data-id="colourSelect"
                                                data-bind="optionsCaption: selectColourText,
                        disable: isDisabled,
                        options: data,
                        optionsAfterRender: setColourOptionText,
                        value: colour,
                        css:{ required : noColourSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>Mixed metal</option>
                                              </select>
                                              {/* ko if: noColourSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: &quot;product-size&quot;,
                                        params: {
                                            hideLabels: true,
                                            hideLowInStock: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size size-component">
                                          <div
                                            className="size-section"
                                            data-bind="visible: sizeSectionVisible()"
                                            style={{ display: 'none' }}
                                          >
                                            <div
                                              style={{
                                                display: 'table',
                                                width: '100%'
                                              }}
                                            >
                                              <label
                                                style={{
                                                  display: 'none',
                                                  verticalAlign: 'top'
                                                }}
                                                data-bind="text: sizeLabel, visible: !hideLabels, disable: isDisabled"
                                              >SIZE:
                                              </label>
                                              <div
                                                style={{
                                                  display: 'table-cell',
                                                  verticalAlign: 'top',
                                                  width: '100%'
                                                }}
                                              >
                                                {/* ko if: !showFitAnalyticsSection() */}
                                                <div
                                                  id="size-guide"
                                                  className="size-guide"
                                                  style={{ float: 'right' }}
                                                  data-bind="component: { name: &quot;size-guide&quot;, params: {dictionary: sizeGuideDictionary , url: sizeGuideLink, visible: state.showSizeGuide, id:id}}"
                                                >{/* ko if: render() */}{/* /ko */}
                                                </div>
                                                {/* /ko */}
                                                {/* ko if: showFitAnalyticsSection() */}{/* /ko */}
                                              </div>
                                            </div>
                                            <span
                                              className="product-size"
                                              data-bind="visible: sizeLabelVisible(), text: selectedSizeLabel(), css: { disabled: isDisabled }"
                                              style={{ display: 'none' }}
                                            >No Size
                                            </span>
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: sizeDropdownVisible()"
                                              style={{ display: 'none' }}
                                            >
                                              <select
                                                data-id="sizeSelect"
                                                data-bind="options: variants,
                    optionsAfterRender: disableSizeIfOutOfStock,
                    optionsText: &quot;Size&quot;,
                    optionsCaption: selectSizeText,
                    value: size,
                    disable: isDisabled || sizeDropdownDisabled(),
                    css:{ required : noSizeSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>No Size</option>
                                              </select>
                                              {/* ko if: noSizeSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                          <div
                                            className="grid-row low-in-stock"
                                            data-bind="visible: isLowInStock() && !hideLowInStock"
                                            style={{ display: 'none' }}
                                          >
                                            <span className="clock" /><span
                                              data-bind="text:lowInStockText"
                                            >LOW IN STOCK
                                            </span>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    {/* ko if: isInStock */}
                                    <div className="add-status">
                                      <div
                                        data-component-id="add-item"
                                        data-bind="component: { name: &quot;add-item&quot;,
                                             params:{
                                                 productId: product.id,
                                                 showTryAgain: false,
                                                 productImage : product.images[0].url,
                                                 state: state,
                                                 initiator : &quot;buyTheLook&quot;
                                             }}"
                                      >
                                        <div className="add-item" data-bind="visible: isVisible">
                                          <div
                                            className="is-add-item-saving"
                                            data-bind="visible: isBusy"
                                            style={{ display: 'none' }}
                                          />
                                          <span
                                            className="aria-live"
                                            aria-role="status"
                                            aria-live="polite"
                                            data-bind="{ text: ariaLiveText, attr: { 'aria-label': ariaLiveText }}"
                                            aria-label
                                          />
                                          <a
                                            href="#"
                                            className="add-button"
                                            data-bind="click: addToBag, css : buttonCss, attr: { 'aria-label': resources.AddToBag }"
                                            aria-label="Add to bag"
                                          >
                                            <span
                                              className="product-tick"
                                              data-bind="visible: addedToBag, text: iconText"
                                              style={{ display: 'none' }}
                                            >add to basket
                                            </span>
                                            <span data-bind="text: buttonText">Add to bag</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {/* /ko */}
                                    <div
                                      className="out-of-stock-button"
                                      data-bind="visible: !isInStock"
                                      style={{ display: 'none' }}
                                    >
                                      <span data-bind="text: state.resources.OutOfStockBuyTheLook">OUT OF STOCK</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="back">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="5648529?CTAref=Complete+the+Look+Carousel_2&featureref1=complete+the+look"
                                    >
                                      <img
                                        className="product-image"
                                        data-bind="attr: { src: imgUrl }"
                                        alt
                                        src="//images.asos-media.com/products/asos-design-two-pack-simple-hoop-earrings/5648529-1-mixedmetal?$L$&wid=190&fit=constrain"
                                      />
                                    </a>
                                  </div>
                                  <div className="add-failed">
                                    <div className="add-to-bag-error" data-bind="html: state.addToBagErrorMessage" />
                                    <div className="retry-add">
                                      <a className="failed" data-bind="click: $parent.tryAgain($index())">
                                        <span data-bind="text: state.resources.AddToBagTryAgain">TRY AGAIN</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li
                            data-bind="style: { width: $parent.carousel.itemWidth() }, css : { 'out-of-stock' : !isInStock, 'in-stock' : isInStock}"
                            className="in-stock"
                            style={{ width: '25%' }}
                          >
                            <div className="item card-container">
                              <div className="card" data-bind="css : { 'flipped' : state.showAddToBagError() }">
                                <div className="front">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                    >
                                    </a>
                                    <div
                                      className="product-image"
                                      data-bind="component: { name: &quot;product-image&quot;, params: {imgUrl: imgUrl, state:state, productId: product.id, context:&quot;buythelook&quot; } }"
                                    >
                                      <a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                      />
                                      <div className="grid-row"><a
                                        data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                        href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                      >
                                        <img
                                          data-bind="attr: { src: imgUrl }"
                                          src="//images.asos-media.com/products/asos-design-3-pack-trainer-socks-white/8113051-1-white?$L$&wid=190&fit=constrain"
                                        />
                                      </a>
                                        <div
                                        data-bind="component:{
            name: &quot;save-button&quot;,
            params:{
                productId: productId,
                state: state,
                productImage : imgUrl,
                context : context
                  }
           }"
                                      ><a
                                          data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                          href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                        />
                                        <div className="save-button" data-bind="click: componentClicked"><a
                                            data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                            href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                          >
                                        </a><a
                                                                                                           className="save-button-link" href="#"
                                          data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                                                                                                         >
                                          <span className="heartPrimary" />
                                          <span className="heartSecondary" />
                                        </a>
                                            <span
                                            className="toolTip fade nonError"
                                            data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                            style={{ display: 'none' }}
                                          />
                                          </div>
                                      </div>
                                      </div>
                                    </div>
                                    <div
                                      className="product-title"
                                      data-bind="text:$parent.formatTitle(product.name)"
                                    >ASOS DESIGN 3 pack trainer
                                      so...
                                    </div>
                                  </div>
                                  <div className="btl-options">
                                    <div
                                      className="product-price"
                                      data-bind="component: { name: &quot;product-price&quot;, params: {state: state, hideDeliveryLink: true, showGermanVatMessage: showGermanVatMessage}}"
                                    >
                                      <div className="grid-row rendered">
                                        <span
                                          data-id="from-price"
                                          data-bind="visible: showFromLabel, text: fromLabelText, css: { 'price-from-discounted' : isDiscountedPrice }"
                                          className="price-from"
                                          style={{ display: 'none' }}
                                        >From
                                        </span>
                                        <span
                                          data-id="current-price"
                                          data-bind="text: priceText(), css: {'product-price-discounted' : isDiscountedPrice }"
                                          className="current-price"
                                        >¥45.04
                                        </span>
                                        <span
                                          data-id="rrp-price"
                                          data-bind="text: rrpPriceText, visible: showRrpPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="previous-price"
                                          data-bind="text: prevPriceText, visible: showPrevPrice"
                                          className="product-prev-price"
                                          style={{ display: 'none' }}
                                        />
                                        <span
                                          data-id="german-vat-message"
                                          data-bind="text: germanVatMessage, visible: showGermanVatMessage"
                                          className="product-german-vat"
                                          style={{ display: 'none' }}
                                        />
                                      </div>
                                      {/* ko if: showPrevPrice */}{/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: 'product-colour',
                                        params: {
                                            hideLabels: true,
                                            useShortSelectColourLabel: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size colour-component">
                                          <div className="grid-row colour-section">
                                            <label
                                              className="disabled"
                                              data-bind="text: colourLabel, visible: !hideLabels"
                                              style={{ display: 'none' }}
                                            >COLOUR:
                                            </label>
                                            <span
                                              className="product-colour"
                                              data-bind="visible: colourLabelVisible(), text: selectedColourLabel(), css: { disabled: isDisabled }"
                                            >White
                                            </span>
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: colourDropdownVisible()"
                                              style={{ display: 'none' }}
                                            >
                                              <select
                                                data-id="colourSelect"
                                                data-bind="optionsCaption: selectColourText,
                        disable: isDisabled,
                        options: data,
                        optionsAfterRender: setColourOptionText,
                        value: colour,
                        css:{ required : noColourSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>White</option>
                                              </select>
                                              {/* ko if: noColourSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    <div className="separator" />
                                    <div
                                      data-bind="component:{
                                        name: &quot;product-size&quot;,
                                        params: {
                                            hideLabels: true,
                                            hideLowInStock: true,
                                            state: state,
                                            data: product}
                                        }"
                                    >{/* ko if: render */}
                                      <section>
                                        <div className="colour-size size-component">
                                          <div className="size-section" data-bind="visible: sizeSectionVisible()">
                                            <div
                                              style={{
                                                display: 'table',
                                                width: '100%'
                                              }}
                                            >
                                              <label
                                                style={{
                                                  display: 'none',
                                                  verticalAlign: 'top'
                                                }}
                                                data-bind="text: sizeLabel, visible: !hideLabels, disable: isDisabled"
                                              >SIZE:
                                              </label>
                                              <div
                                                style={{
                                                  display: 'table-cell',
                                                  verticalAlign: 'top',
                                                  width: '100%'
                                                }}
                                              >
                                                {/* ko if: !showFitAnalyticsSection() */}
                                                <div
                                                  id="size-guide"
                                                  className="size-guide"
                                                  style={{ float: 'right' }}
                                                  data-bind="component: { name: &quot;size-guide&quot;, params: {dictionary: sizeGuideDictionary , url: sizeGuideLink, visible: state.showSizeGuide, id:id}}"
                                                >{/* ko if: render() */}{/* /ko */}
                                                </div>
                                                {/* /ko */}
                                                {/* ko if: showFitAnalyticsSection() */}{/* /ko */}
                                              </div>
                                            </div>
                                            <span
                                              className="product-size"
                                              data-bind="visible: sizeLabelVisible(), text: selectedSizeLabel(), css: { disabled: isDisabled }"
                                            >One Size
                                            </span>
                                            <div
                                              className="colour-size-select"
                                              data-bind="visible: sizeDropdownVisible()"
                                              style={{ display: 'none' }}
                                            >
                                              <select
                                                data-id="sizeSelect"
                                                data-bind="options: variants,
                    optionsAfterRender: disableSizeIfOutOfStock,
                    optionsText: &quot;Size&quot;,
                    optionsCaption: selectSizeText,
                    value: size,
                    disable: isDisabled || sizeDropdownDisabled(),
                    css:{ required : noSizeSelected()}"
                                              >
                                                <option value>Please select</option>
                                                <option value>One Size</option>
                                              </select>
                                              {/* ko if: noSizeSelected() */}{/* /ko */}
                                            </div>
                                          </div>
                                          <div
                                            className="grid-row low-in-stock"
                                            data-bind="visible: isLowInStock() && !hideLowInStock"
                                            style={{ display: 'none' }}
                                          >
                                            <span className="clock" /><span
                                              data-bind="text:lowInStockText"
                                            >LOW IN STOCK
                                            </span>
                                          </div>
                                        </div>
                                      </section>
                                      {/* /ko */}
                                    </div>
                                    {/* ko if: isInStock */}
                                    <div className="add-status">
                                      <div
                                        data-component-id="add-item"
                                        data-bind="component: { name: &quot;add-item&quot;,
                                             params:{
                                                 productId: product.id,
                                                 showTryAgain: false,
                                                 productImage : product.images[0].url,
                                                 state: state,
                                                 initiator : &quot;buyTheLook&quot;
                                             }}"
                                      >
                                        <div className="add-item" data-bind="visible: isVisible">
                                          <div
                                            className="is-add-item-saving"
                                            data-bind="visible: isBusy"
                                            style={{ display: 'none' }}
                                          />
                                          <span
                                            className="aria-live"
                                            aria-role="status"
                                            aria-live="polite"
                                            data-bind="{ text: ariaLiveText, attr: { 'aria-label': ariaLiveText }}"
                                            aria-label
                                          />
                                          <a
                                            href="#"
                                            className="add-button"
                                            data-bind="click: addToBag, css : buttonCss, attr: { 'aria-label': resources.AddToBag }"
                                            aria-label="Add to bag"
                                          >
                                            <span
                                              className="product-tick"
                                              data-bind="visible: addedToBag, text: iconText"
                                              style={{ display: 'none' }}
                                            >add to basket
                                            </span>
                                            <span data-bind="text: buttonText">Add to bag</span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    {/* /ko */}
                                    <div
                                      className="out-of-stock-button"
                                      data-bind="visible: !isInStock"
                                      style={{ display: 'none' }}
                                    >
                                      <span data-bind="text: state.resources.OutOfStockBuyTheLook">OUT OF STOCK</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="back">
                                  <div className="btl-product-details">
                                    <a
                                      data-bind="attr: { href: $parent.getProductLink(product.id, $index()) }"
                                      href="8113051?CTAref=Complete+the+Look+Carousel_3&featureref1=complete+the+look"
                                    >
                                      <img
                                        className="product-image"
                                        data-bind="attr: { src: imgUrl }"
                                        alt
                                        src="//images.asos-media.com/products/asos-design-3-pack-trainer-socks-white/8113051-1-white?$L$&wid=190&fit=constrain"
                                      />
                                    </a>
                                  </div>
                                  <div className="add-failed">
                                    <div className="add-to-bag-error" data-bind="html: state.addToBagErrorMessage" />
                                    <div className="retry-add">
                                      <a className="failed" data-bind="click: $parent.tryAgain($index())">
                                        <span data-bind="text: state.resources.AddToBagTryAgain">TRY AGAIN</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="arrows">
                        <a
                          className="arrow right-arrow"
                          data-bind="click:carousel.moveRight, css: {active : carousel.hasNextPanel }, visible: carousel.hasOtherPanels"
                          style={{ display: 'none' }}
                        ><span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  className="nav"
                  data-bind="foreach: carousel.panels, visible: carousel.hasOtherPanels"
                  style={{ display: 'none' }}
                >
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" className="active" />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          {/* /ko */}
          <div
            className="component might-like"
            data-bind="component: { name: &quot;might-like&quot;, params: {state: state, data: product}}"
          >
            <section>
              <div
                className="layout-width you-might-also-like"
                data-bind="visible: carousel.items().length > 0"
                style={{}}
              >
                <div className="layout-module">
                  <h2 data-bind="text: title">YOU MIGHT ALSO LIKE</h2>
                  <div className="carousel">
                    <div className="row">
                      <div className="arrows">
                        <a
                          className="arrow left-arrow"
                          data-bind="click:carousel.moveLeft, css: {active : carousel.hasPreviousPanel }, visible: carousel.hasOtherPanels"
                          style={{}}
                        ><span />
                        </a>
                      </div>
                      <div className="window" data-bind="swipe">
                        <ul
                          className="slide-panel"
                          data-bind="foreach: carousel.visibleItems, style: { width: carousel.width(), marginLeft:carousel.slidePosition()},css: { suppressSlide : !carousel.animate() }"
                          style={{
                            width: '400%',
                            marginLeft: '0%'
                          }}
                        >
                          <li data-bind="style: { width: $parent.carousel.itemWidth()}" style={{ width: '6.25%' }}>
                            <a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/9432032?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers"
                            >
                            </a>
                            <div className="product-tile"><a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/9432032?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers"
                            >
                              <img
                                data-bind="attr: { src: $parent.getImageSrc(images)}"
                                src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432032-1-white?$XL$&wid=200&fit=constrain"
                              />
                            </a>
                              <div
                              data-bind="component:{
                                            name: &quot;save-button&quot;,
                                            params:{
                                                productId: id,
                                                productImage : $parent.getImageSrc(images),
                                                context : &quot;youMightLike&quot;
                                                  }
                                           }"
                            ><a
                                data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                href="http://www.asos.com/prd/9432032?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers"
                              />
                              <div className="save-button" data-bind="click: componentClicked"><a
                                  data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                  href="http://www.asos.com/prd/9432032?CTAref=We+Recommend+Carousel_1&featureref1=we+recommend+pers"
                                >
                                </a><a
                                className="save-button-link"
                                href="#"
                                data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                              >
                                <span className="heartPrimary" />
                                <span className="heartSecondary" />
                                  </a>
                                  <span
                                  className="toolTip fade nonError"
                                  data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                  style={{ display: 'none' }}
                                />
                                </div>
                            </div>
                              <div className="tile-info">
                              <h1 data-bind="text:$parent.formatTitle(name)">Consigned Pocket Front Backpack</h1>
                              <div className="price-container">
                                  <span
                                  className="price price-highlighed"
                                  data-bind="text:$parent.getPriceText(price), css: { 'price-highlighed' : $parent.isPriceDiscounted(price) }"
                                >¥198.20
                                </span>
                                  <span
                                  className="discounted-price"
                                  data-bind="visible: $parent.isPriceDiscounted(price), text:$parent.getDiscountedPriceText(price)"
                                >RRP¥342.34
                                </span>
                                </div>
                            </div>
                            </div>
                          </li>
                          <li data-bind="style: { width: $parent.carousel.itemWidth()}" style={{ width: '6.25%' }}>
                            <a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/8069861?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers"
                            >
                            </a>
                            <div className="product-tile"><a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/8069861?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers"
                            >
                              <img
                                data-bind="attr: { src: $parent.getImageSrc(images)}"
                                src="//images.asos-media.com/products/hype-exclusive-backpack-in-black-with-teal-pom/8069861-1-black?$XL$&wid=200&fit=constrain"
                              />
                            </a>
                              <div
                              data-bind="component:{
                                            name: &quot;save-button&quot;,
                                            params:{
                                                productId: id,
                                                productImage : $parent.getImageSrc(images),
                                                context : &quot;youMightLike&quot;
                                                  }
                                           }"
                            ><a
                                data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                href="http://www.asos.com/prd/8069861?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers"
                              />
                              <div className="save-button" data-bind="click: componentClicked"><a
                                  data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                  href="http://www.asos.com/prd/8069861?CTAref=We+Recommend+Carousel_2&featureref1=we+recommend+pers"
                                >
                                </a><a
                                className="save-button-link"
                                href="#"
                                data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                              >
                                <span className="heartPrimary" />
                                <span className="heartSecondary" />
                              </a>
                                  <span
                                className="toolTip fade nonError"
                                data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                style={{ display: 'none' }}
                              />
                                </div>
                            </div>
                              <div className="tile-info">
                              <h1 data-bind="text:$parent.formatTitle(name)">Hype Exclusive Backpack in Black With
                                  Teal Pom
                                </h1>
                              <div className="price-container">
                                  <span
                                  className="price"
                                  data-bind="text:$parent.getPriceText(price), css: { 'price-highlighed' : $parent.isPriceDiscounted(price) }"
                                >¥270.27
                                </span>
                                  <span
                                  className="discounted-price"
                                  data-bind="visible: $parent.isPriceDiscounted(price), text:$parent.getDiscountedPriceText(price)"
                                  style={{ display: 'none' }}
                                />
                                </div>
                            </div>
                            </div>
                          </li>
                          <li data-bind="style: { width: $parent.carousel.itemWidth()}" style={{ width: '6.25%' }}>
                            <a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/8573670?CTAref=We+Recommend+Carousel_3&featureref1=we+recommend+pers"
                            >
                            </a>
                            <div className="product-tile"><a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/8573670?CTAref=We+Recommend+Carousel_3&featureref1=we+recommend+pers"
                            >
                              <img
                                data-bind="attr: { src: $parent.getImageSrc(images)}"
                                src="//images.asos-media.com/products/liquorish-backpack-with-front-pocket-detail/8573670-1-black?$XL$&wid=200&fit=constrain"
                              />
                            </a>
                              <div
                              data-bind="component:{
                                            name: &quot;save-button&quot;,
                                            params:{
                                                productId: id,
                                                productImage : $parent.getImageSrc(images),
                                                context : &quot;youMightLike&quot;
                                                  }
                                           }"
                            ><a
                                data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                href="http://www.asos.com/prd/8573670?CTAref=We+Recommend+Carousel_3&featureref1=we+recommend+pers"
                              />
                              <div className="save-button" data-bind="click: componentClicked"><a
                                  data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                  href="http://www.asos.com/prd/8573670?CTAref=We+Recommend+Carousel_3&featureref1=we+recommend+pers"
                                >
                                </a><a
                                className="save-button-link"
                                href="#"
                                data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                              >
                                <span className="heartPrimary" />
                                <span className="heartSecondary" />
                                  </a>
                                  <span
                                className="toolTip fade nonError"
                                data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                style={{ display: 'none' }}
                              />
                                </div>
                            </div>
                              <div className="tile-info">
                              <h1 data-bind="text:$parent.formatTitle(name)">Liquorish Backpack With Front Pocket
                                  Detail
                                </h1>
                              <div className="price-container">
                                  <span
                                  className="price price-highlighed"
                                  data-bind="text:$parent.getPriceText(price), css: { 'price-highlighed' : $parent.isPriceDiscounted(price) }"
                                >¥315.31
                                </span>
                                  <span
                                  className="discounted-price"
                                  data-bind="visible: $parent.isPriceDiscounted(price), text:$parent.getDiscountedPriceText(price)"
                                >RRP¥612.61
                                </span>
                                </div>
                            </div>
                            </div>
                          </li>
                          <li data-bind="style: { width: $parent.carousel.itemWidth()}" style={{ width: '6.25%' }}>
                            <a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/7926413?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers"
                            >
                            </a>
                            <div className="product-tile"><a
                              data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                              href="http://www.asos.com/prd/7926413?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers"
                            >
                              <img
                                data-bind="attr: { src: $parent.getImageSrc(images)}"
                                src="//images.asos-media.com/products/mi-pac-cloud-backpack-multi/7926413-1-greycosmos?$XL$&wid=200&fit=constrain"
                              />
                            </a>
                              <div
                              data-bind="component:{
                                            name: &quot;save-button&quot;,
                                            params:{
                                                productId: id,
                                                productImage : $parent.getImageSrc(images),
                                                context : &quot;youMightLike&quot;
                                                  }
                                           }"
                            ><a
                                data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                href="http://www.asos.com/prd/7926413?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers"
                              />
                              <div className="save-button" data-bind="click: componentClicked"><a
                                  data-bind="attr: { href: $parent.getProductLink(id, $index())}"
                                  href="http://www.asos.com/prd/7926413?CTAref=We+Recommend+Carousel_4&featureref1=we+recommend+pers"
                                >
                                                                                                 </a><a
                                className="save-button-link" href="#"
                                data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                              >
                                <span className="heartPrimary" />
                                <span className="heartSecondary" />
                              </a>
                                  <span
                                className="toolTip fade nonError"
                                data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                style={{ display: 'none' }}
                              />
                                </div>
                            </div>
                              <div className="tile-info">
                              <h1 data-bind="text:$parent.formatTitle(name)">Mi Pac Cloud Backpack Multi</h1>
                              <div className="price-container">
                                  <span
                                  className="price price-highlighed"
                                  data-bind="text:$parent.getPriceText(price), css: { 'price-highlighed' : $parent.isPriceDiscounted(price) }"
                                >¥162.16
                                </span>
                                  <span
                                  className="discounted-price"
                                  data-bind="visible: $parent.isPriceDiscounted(price), text:$parent.getDiscountedPriceText(price)"
                                >RRP¥225.13
                                </span>
                                </div>
                            </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="arrows">
                        <a
                          className="arrow right-arrow active"
                          data-bind="click:carousel.moveRight, css: {active : carousel.hasNextPanel }, visible: carousel.hasOtherPanels"
                          style={{}}
                        ><span />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="nav" data-bind="foreach: carousel.panels, visible: carousel.hasOtherPanels" style={{}}>
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" className="active" />
                  </li>
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" />
                  </li>
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" />
                  </li>
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" />
                  </li>
                </ul>
              </div>
            </section>
          </div>
          <section>
            <div id="product-more-from" className="layout-width">
            </div>
          </section>
          {/* ko if: !product.isInStock */}{/* /ko */}
          <div
            className="component social-share"
            id="social-share"
            data-bind="component: { name: &quot;social-share&quot;, params: {state: state,data: product}}"
          >
            <div
              className="share-bar-wrap"
              data-bind="visible:visible, style: { left: x, top:y}"
              style={{
                display: 'none',
                left: 0,
                top: 0
              }}
            >
              <div className="triangle-up" />
              <div id="share-bar">
                <div id="gigya-share" gigid="showShareBarUI" style={{ visibility: 'visible' }}>
                  <div className="gig-bar-container gig-share-bar-container">
                    <table cellSpacing={0} cellPadding={0} role="presentation">
                      <tbody>
                        <tr>
                          <td
                            style={{
                              verticalAlign: 'middle',
                              whiteSpace: 'nowrap',
                              zoom: 1
                            }}
                          >
                            <div
                              className="gig-button-container gig-button-container-count-right gig-button-container-pinterest gig-button-container-pinterest-count-right gig-share-button-container gig-button-container-horizontal"
                            >
                              <table cellSpacing={0} cellPadding={0} role="presentation">
                                <tbody>
                                  <tr>
                                    <td className="gig-button-td">
                                      <div
                                        className="gig-button gig-share-button gig-button-up gig-button-count-right"
                                        id="gigya-share-reaction0"
                                        title
                                        alt
                                        onClick="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction0'].onClick()"
                                        onMouseOver="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction0'].changeState('over')"
                                        onMouseOut="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction0'].changeState('up')"
                                      >
                                        <table cellPadding={0} cellSpacing={0} role="presentation">
                                          <tbody>
                                            <tr>
                                              <td id="gigya-share-reaction0-left" aria-hidden="true" />
                                              <td
                                                id="gigya-share-reaction0-icon"
                                                style={{
                                                  zoom: 1,
                                                  verticalAlign: 'middle',
                                                  textAlign: 'left',
                                                  backgroundRepeat: 'repeat-x'
                                                }}
                                              >
                                                <button
                                                  aria-label
                                                  type="button"
                                                  className="tabbing-button"
                                                  tabIndex={0}
                                                  style={{ height: 16 }}
                                                >
                                                  <div
                                                    aria-hidden="true"
                                                    style={{
                                                      backgroundImage: 'url("https://cdns1.gigya.com/gs/GetSprite.ashx?path=%2FshareBar%2Fbutton%2Fbutton%5Bleft%2Cright%5DImg%5Bup%2Cover%5D.png%7C2%2C20%5E%2FshareBar%2Fbutton%2FrightCountImg.png%7C38%2C20%5E%2Fsharebar%2Ficons%2F%5Bpinterest%2Cfacebook%5D.png%7C16%2C16")',
                                                      backgroundPosition: '-46px 0px',
                                                      width: 16,
                                                      height: 16,
                                                      lineHeight: 16,
                                                      backgroundRepeat: 'no-repeat',
                                                      position: 'static'
                                                    }}
                                                    id="gigya-share-reaction0-pinterest_img"
                                                  />
                                                </button>
                                              </td>
                                              <td id="gigya-share-reaction0-right" aria-hidden="true" />
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="gig-counter gig-share-counter gig-counter-$rid gig-counter-right"
                                        id="gigya-share-reaction0-count"
                                        style={{
                                          backgroundImage: 'url("https://cdns1.gigya.com/gs/GetSprite.ashx?path=%2FshareBar%2Fbutton%2Fbutton%5Bleft%2Cright%5DImg%5Bup%2Cover%5D.png%7C2%2C20%5E%2FshareBar%2Fbutton%2FrightCountImg.png%7C38%2C20%5E%2Fsharebar%2Ficons%2F%5Bpinterest%2Cfacebook%5D.png%7C16%2C16")',
                                          backgroundPosition: '-8px 0px',
                                          width: 38,
                                          height: 20,
                                          lineHeight: 20,
                                          backgroundRepeat: 'no-repeat',
                                          position: 'static',
                                          textAlign: 'center',
                                          verticalAlign: 'middle'
                                        }}
                                      ><span
                                          className="gig-counter-text gig-share-counter-text gig-counter-text-right gig-share-counter-text-right"
                                        id="gigya-share-reaction0-count-value"
                                      >0
                                       </span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                          <td
                            style={{
                              verticalAlign: 'middle',
                              whiteSpace: 'nowrap',
                              zoom: 1
                            }}
                          >
                            <div
                              className="gig-button-container gig-button-container-count-right gig-button-container-facebook gig-button-container-facebook-count-right gig-share-button-container gig-button-container-horizontal"
                            >
                              <table cellSpacing={0} cellPadding={0} role="presentation">
                                <tbody>
                                  <tr>
                                    <td className="gig-button-td">
                                      <div
                                        className="gig-button gig-share-button gig-button-up gig-button-count-right"
                                        id="gigya-share-reaction1"
                                        title
                                        alt
                                        onClick="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction1'].onClick()"
                                        onMouseOver="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction1'].changeState('over')"
                                        onMouseOut="gigya.services.socialize.plugins.reactions.instances['gigya-share'].buttonInstances['gigya-share-reaction1'].changeState('up')"
                                      >
                                        <table cellPadding={0} cellSpacing={0} role="presentation">
                                          <tbody>
                                            <tr>
                                              <td id="gigya-share-reaction1-left" aria-hidden="true" />
                                              <td
                                                id="gigya-share-reaction1-icon"
                                                style={{
                                                  zoom: 1,
                                                  verticalAlign: 'middle',
                                                  textAlign: 'left',
                                                  backgroundRepeat: 'repeat-x'
                                                }}
                                              >
                                                <button
                                                  aria-label
                                                  type="button"
                                                  className="tabbing-button"
                                                  tabIndex={0}
                                                  style={{ height: 16 }}
                                                >
                                                  <div
                                                    aria-hidden="true"
                                                    style={{
                                                      backgroundImage: 'url("https://cdns1.gigya.com/gs/GetSprite.ashx?path=%2FshareBar%2Fbutton%2Fbutton%5Bleft%2Cright%5DImg%5Bup%2Cover%5D.png%7C2%2C20%5E%2FshareBar%2Fbutton%2FrightCountImg.png%7C38%2C20%5E%2Fsharebar%2Ficons%2F%5Bpinterest%2Cfacebook%5D.png%7C16%2C16")',
                                                      backgroundPosition: '-62px 0px',
                                                      width: 16,
                                                      height: 16,
                                                      lineHeight: 16,
                                                      backgroundRepeat: 'no-repeat',
                                                      position: 'static'
                                                    }}
                                                    id="gigya-share-reaction1-facebook_img"
                                                  />
                                                </button>
                                              </td>
                                              <td id="gigya-share-reaction1-right" aria-hidden="true" />
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="gig-counter gig-share-counter gig-counter-$rid gig-counter-right"
                                        id="gigya-share-reaction1-count"
                                        style={{
                                          backgroundImage: 'url("https://cdns1.gigya.com/gs/GetSprite.ashx?path=%2FshareBar%2Fbutton%2Fbutton%5Bleft%2Cright%5DImg%5Bup%2Cover%5D.png%7C2%2C20%5E%2FshareBar%2Fbutton%2FrightCountImg.png%7C38%2C20%5E%2Fsharebar%2Ficons%2F%5Bpinterest%2Cfacebook%5D.png%7C16%2C16")',
                                          backgroundPosition: '-8px 0px',
                                          width: 38,
                                          height: 20,
                                          lineHeight: 20,
                                          backgroundRepeat: 'no-repeat',
                                          position: 'static',
                                          textAlign: 'center',
                                          verticalAlign: 'middle'
                                        }}
                                      ><span
                                        className="gig-counter-text gig-share-counter-text gig-counter-text-right gig-share-counter-text-right"
                                        id="gigya-share-reaction1-count-value"
                                        >0
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="component"
            data-bind="component: { name: &quot;recently-viewed&quot;, params: {state: state, data: product,expiryInDays: 30}}"
          >{/* ko if: render */}
            <section>
              <div className="layout-width recently-viewed" data-bind="visible: carousel.items().length > 0">
                <div className="layout-module">
                  <h2 data-bind="text: title">RECENTLY VIEWED</h2>
                  <div className="carousel">
                    <div className="row">
                      <div className="arrows">
                        <a
                          className="arrow left-arrow"
                          data-bind="click:carousel.moveLeft, css: {active : carousel.hasPreviousPanel }, visible: carousel.hasOtherPanels"
                          style={{ display: 'none' }}
                        ><span />
                        </a>
                      </div>
                      <div className="window" data-bind="swipe">
                        <ul
                          className="slide-panel"
                          data-bind="foreach: carousel.visibleItems, style: { width: carousel.width(), marginLeft:carousel.slidePosition()},css: { suppressSlide : !carousel.animate() }"
                          style={{
                            width: '100%',
                            marginLeft: '0%'
                          }}
                        >
                          <li data-bind="style: { width: $parent.carousel.itemWidth()}" style={{ width: '20%' }}>
                            <a
                              data-bind="attr: { href: url }"
                              href="http://www.asos.com/angel-eye/angel-eye-floral-long-sleeve-top/prd/10012553?CTAref=Recently+Viewed&clr=black"
                            ><img
                                data-bind="attr: { src: img }"
                                src="//images.asos-media.com/products/angel-eye-floral-long-sleeve-top/10012553-1-black?$L$&wid=168&fit=constrain"
                            />
                            </a>
                            {/* ko if: !$parent.isMobile */}
                            <a data-bind="click: $parent.removeItem.bind($data, id)" className="remove"><span
                              className="product-closesmall"
                            >Remove
                            </span>
                            </a>
                            {/* /ko */}
                            <div
                              data-bind="visible: $parent.showMixMatch($data), component:{name: &quot;save-button&quot;,
                                 params:{
                                     productId: id,
                                     productImage : img,
                                     context:&quot;recentlyviewed&quot;
                                 }
                                 }"
                            >
                              <div className="save-button" data-bind="click: componentClicked">
                                <a
                                  className="save-button-link"
                                  href="#"
                                  data-bind="click:saveProduct, clickBubble:false, css: { 'animate' : isSaved, 'active': active, 'out-of-stock-save-button': !inStock }"
                                >
                                  <span className="heartPrimary" />
                                  <span className="heartSecondary" />
                                </a>
                                <span
                                  className="toolTip fade nonError"
                                  data-bind="html:message,visible:displayMessage,css: { 'fade' : fade , 'error':isError , 'nonError':!isError()}"
                                  style={{ display: 'none' }}
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="arrows">
                        <a
                          className="arrow right-arrow"
                          data-bind="click:carousel.moveRight, css: {active : carousel.hasNextPanel }, visible: carousel.hasOtherPanels"
                          style={{ display: 'none' }}
                        ><span />
                        </a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="clear" data-bind="click: clear, text: clearText">CLEAR</a>
                </div>
                <ul
                  className="nav"
                  data-bind="foreach: carousel.panels, visible: carousel.hasOtherPanels"
                  style={{ display: 'none' }}
                >
                  <li data-bind="click: $parent.carousel.currentPanel.bind($data)">
                    <a data-bind="css:{active:$parent.carousel.currentPanel() == $data}" href="#" className="active" />
                  </li>
                </ul>
              </div>
            </section>
            {/* /ko */}
          </div>
          <div data-bind="component: { name: &quot;toast&quot;, params: {state: state}}"><span
            className="toast"
            data-bind="html: message, visible: displayMessage, css: { 'fade': fade }"
            style={{ display: 'none' }}
          />
          </div>
          <a className="component back-to-top" data-bind="scrollToTop"><span
            className="product-forward"
          >Back to top
          </span>
          </a>
        </div>
        <div id="modal">
          <div className="modal-window">
            <div className="modal-title">
              <h1 />
              <div className="modal-close">
                <a href="#"><span className="product-close">close</span></a>
              </div>
            </div>
            <div className="modal-scroll">
              <div className="modal-content">
                <div className="loader">
                </div>
              </div>
            </div>
            <iframe className="modal-iframe" />
          </div>
        </div>
        <div className="schema-org">
          <div itemScope itemType="https://schema.org/Product">
            <img
              itemProp="image"
              src="//images.asos-media.com/products/consigned-pocket-front-backpack/9432042-1-black"
              alt="Image 1 of Consigned Pocket Front Backpack"
            />
            <link itemProp="itemCondition" href="https://schema.org/NewCondition" />
            <span itemProp="productID">9432042</span>
            <span itemProp="sku">9432042</span>
            <span itemProp="brand" itemScope itemType="https://schema.org/Brand">
              <span itemProp="name">Consigned</span>
            </span>
            <span itemProp="name">Consigned Pocket Front Backpack</span>
            <span itemProp="description">Shop Consigned Pocket Front Backpack at ASOS. Discover fashion online.</span>
            <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <link itemProp="availability" href="https://schema.org/InStock" />
              <meta itemProp="priceCurrency" content="CNY" />
              <span itemProp="price">153.15</span>
              <span itemProp="eligibleRegion">CN</span>
              <span itemProp="seller" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">ASOS</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductDetailPage;
