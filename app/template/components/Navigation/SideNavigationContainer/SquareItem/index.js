import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { resolveLink } from "../../../../helpers/navigationLinkResolver";
import { getBackgroundImageUrl } from "../../../../helpers/navigationBackgroundImageResolver";

import styles from "./index.css";

const cx = classnames.bind(styles);

class SquareItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    item: PropTypes.any,
    saveNavigationItem: PropTypes.func.isRequired,
    tabIndex: PropTypes.number
  };

  constructor(props) {
    super(props);
    this.state = { link: props && props.item && props.item.link };
  }

  componentDidMount() {
    const { link, alias } = this.props.item;

    if (alias === "app_download") {
      this.setState({
        link: resolveLink(link, alias)
      });
    }
  }

  render() {
    const { className, item, saveNavigationItem, tabIndex } = this.props;

    const isExternal = item.linkType === "external";

    return (
      <li className={cx(styles.container, className)} data-testid="square-item">
        <a
          data-navid={item.id}
          className={styles.link}
          href={this.state.link}
          ref={saveNavigationItem}
          tabIndex={tabIndex}
          target={isExternal ? "_blank" : "_self"}
        >
          {item.smallAndMediumImageUrl && (
            <div
              aria-hidden="true"
              className={styles.image}
              role="presentation"
              style={{
                backgroundImage: `url(${getBackgroundImageUrl(
                  item.smallAndMediumImageUrl,
                  320
                )})`
              }}
            />
          )}
          <p
            className={cx(styles.label, {
              [styles.label__sale]: item.smallAndMediumStyleType === "sale"
            })}
          >
            {item.label}
          </p>
        </a>
      </li>
    );
  }
}

export default SquareItem;
