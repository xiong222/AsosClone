import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames/bind";
import withTranslation from "../../translation";
import DeleteItem from "./DeleteItem";
import Price from "../Price";
import styles from "./index.css";
import { withParams } from "../../../../helpers/queryString";

const cx = classnames.bind(styles);

function getProductUrl(images, size) {
  const filteredImages = images.filter(image => image.size === size);

  if (!filteredImages.length) {
    return null;
  }

  return filteredImages[0].url;
}

const containerClassNames = (itemType = "") =>
  cx("container", "item", itemType.toLowerCase());

const LineItem = ({
                    colour: color,
                    formatTranslation,
                    id,
                    images,
                    imageUrl,
                    itemType,
                    name,
                    price,
                    productUrl,
                    quantity,
                    size
                  }) => {
  let linkWithAnalytics = withParams(productUrl, {
    ctaref: "mini bag",
    featureref1: "mini bag"
  });
  return (
    <div className={containerClassNames(itemType)}>
      <a href={linkWithAnalytics} className={styles.link} tabIndex="-1">
        {imageUrl && <img src={imageUrl} alt="" className={styles.image} />}
        {images.length > 0 && (
          <img
            src={getProductUrl(images, "l")}
            srcSet={`${getProductUrl(images, "xl")} 2x`}
            alt=""
            className={styles.image}
          />
        )}
        <dl className={styles.details}>
          <div className={styles.price}>
            <dt>{formatTranslation("MiniBag.Price")}</dt>
            <dd>
              <Price {...price} />
            </dd>
          </div>
          <div className={styles.name}>
            <dt>{formatTranslation("MiniBag.Name")}</dt>
            <dd>{name}</dd>
          </div>
          <div className={styles.meta}>
            {color &&
            itemType === "Product" && (
              <div className={styles.color}>
                <dt>{formatTranslation("MiniBag.Color")}</dt>
                <dd>{color}</dd>
              </div>
            )}
            {size &&
            itemType === "Product" && (
              <div className={styles.size}>
                <dt>{formatTranslation("MiniBag.Size")}</dt>
                <dd>{size}</dd>
              </div>
            )}
            <div className={styles.quantity}>
              <dt className={styles.term}>
                <abbr title={formatTranslation("MiniBag.Quantity")}>
                  {formatTranslation("MiniBag.Qty")}
                </abbr>
              </dt>
              <dd className={styles.quantity}>{quantity}</dd>
            </div>
          </div>
        </dl>
      </a>
      <DeleteItem id={id} />
    </div>
  );
};

LineItem.propTypes = {
  colour: PropTypes.string,
  formatTranslation: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  itemType: PropTypes.oneOf(["Product", "Voucher", "Subscription"]),
  imageUrl: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.string,
      url: PropTypes.string
    })
  ),
  name: PropTypes.string,
  price: PropTypes.shape({
    current: PropTypes.shape({
      text: PropTypes.string
    }),
    isMarkedDown: PropTypes.bool,
    isOutletPrice: PropTypes.bool,
    previous: PropTypes.shape({
      text: PropTypes.string
    }),
    rrp: PropTypes.shape({
      text: PropTypes.string
    })
  }),
  productUrl: PropTypes.string,
  quantity: PropTypes.number,
  size: PropTypes.string
};

LineItem.defaultProps = {
  images: []
};

export default withTranslation(LineItem);
