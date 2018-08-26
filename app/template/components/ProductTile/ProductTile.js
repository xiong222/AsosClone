import styles from './index.css';
import stylesImage from './Image.css';
import stylesButton from './SaveForLater/index.css';
import React from 'react';

const ProductTile = () => (
  <article id="product-10013597" data-auto-id="productTile" className={styles.productTile}>
    <a className={styles.productLink} href="/women/activewear/leggings/cat/?cid=27163&nlid=ww|activewear|new+edits">
      <div className={stylesImage.container}>
        <img
          data-auto-id="productTileImage"
          src="https://images.asos-media.com/products/rare-london-zebra-choker-detail-blouse/9969132-1-blackwhite?$XL$?$XXL$&amp;wid=300&amp;fmt=jpeg&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.4,6,1&amp;iccEmbed=0&amp;printRes=72"
          sizes="(min-width: 1366px) 300px, (min-width: 768px) 220px, 142px"
          srcSet="https://images.asos-media.com/products/rare-london-zebra-choker-detail-blouse/9969132-1-blackwhite?$XL$?$XXL$&amp;wid=300&amp;fmt=jpeg&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1,0.4,6,1&amp;iccEmbed=0&amp;printRes=72 300w, https://images.asos-media.com/products/rare-london-zebra-choker-detail-blouse/9969132-1-blackwhite?$XL$?$XXL$&amp;wid=440&amp;fmt=jpeg&amp;qlt=80,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=1.5,0.5,6,1&amp;iccEmbed=0&amp;printRes=72 440w, https://images.asos-media.com/products/rare-london-zebra-choker-detail-blouse/9969132-1-blackwhite?$XL$?$XXL$&amp;wid=600&amp;fmt=jpeg&amp;qlt=70,0&amp;op_sharpen=0&amp;resMode=sharp2&amp;op_usm=2,0.3,3,1&amp;iccEmbed=0&amp;printRes=72 600w"
          alt="Rare London zebra choker detail blouse"
        />
      </div>
    </a>
    <button type="button" className={stylesButton.saveForLater}>
      <span className={stylesButton.imgBtn}>
        <svg viewBox="0 0 18 16">
          <use xlinkHref="#heart">
            <svg viewBox="0 0 18 16" id="heart" width="100%" height="100%">
              <path d="M9.01163699,14.9053769 C8.72930024,14.7740736 8.41492611,14.6176996 8.07646224,14.4366167 C7.06926649,13.897753 6.06198912,13.2561336 5.12636931,12.5170512 C2.52930452,10.4655288 1.00308384,8.09476443 1.00000218,5.44184117 C0.997549066,2.99198843 2.92175104,1.01242822 5.28303025,1.01000225 C6.41066623,1.00972036 7.49184369,1.4629765 8.28270844,2.2678673 L8.99827421,2.9961237 L9.71152148,2.26559643 C10.4995294,1.45849728 11.5791258,1.0023831 12.7071151,1.00000055 L12.7060299,1.00000225 C15.0693815,0.997574983 16.9967334,2.97018759 17.0000037,5.421337 C17.0038592,8.07662382 15.4809572,10.4530151 12.8850542,12.5121483 C11.9520963,13.2521931 10.9477036,13.8951276 9.94340074,14.4354976 C9.60619585,14.6169323 9.29297309,14.7736855 9.01163699,14.9053769 Z" stroke="#2D2D2D" strokeWidth="2"></path>
            </svg>
          </use>
        </svg>
      </span>
    </button>
  </article>
);

export default ProductTile;
