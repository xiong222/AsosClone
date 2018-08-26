import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { navigationPropType } from "../../../state/modules/navigation";
import { genderPropType, FEMALE, DEFAULT } from "../../../state/modules/layout";
import classnames from "classnames";
import styles from "./index.css";
import SideNavigationContainer from "../SideNavigationContainer";
import Spinner from "../../Spinner";

const cx = classnames.bind(styles);

class SideSecondaryNavigation extends PureComponent {
  state = { animating: "" };

  /* istanbul ignore next - dom el eventlistener is not supported in jsdom */
  componentDidMount() {
    this.secondaryPanel.addEventListener(
      "transitionend",
      ({ target, currentTarget }) => {
        if (target === currentTarget) {
          this.setState({ animating: "" });
        }
      }
    );
  }

  /* istanbul ignore next - dom el eventlistener is not supported in jsdom */
  componentWillUnmmount() {
    this.secondaryPanel.removeEventListener("transitionend");
  }

  renderNavigationPanel = ({ label, id, items }) => (
    <div
      key={id}
      className={cx(styles.item, {
        [styles.item__visible]:
        this.props.navActiveItem === id || this.state.animating === id
      })}
    >
      <section className={styles.header}>
        {this.renderCloseSecondaryButton()}
        <h3>{label}</h3>
      </section>
      <nav className={styles.secondary} ref={el => el && (el.scrollTop = 0)}>
        {!items.length ? (
          <Spinner size="x-large" position="centre" />
        ) : (
          items.map(item => (
            <SideNavigationContainer key={item.id} item={item} />
          ))
        )}
      </nav>
    </div>
  );

  clearNavActiveItem = () => {
    this.setState({ animating: this.props.navActiveItem });
    this.props.clearNavActiveItem();
  };

  renderCloseSecondaryButton = () => (
    <button className={styles.close} onClick={this.clearNavActiveItem} />
  );

  saveSecondaryPanel = component => (this.secondaryPanel = component);

  isVisible = () => {
    const { forGender, currentGender, navActiveItem } = this.props;

    return (
      !!navActiveItem &&
      (forGender === currentGender ||
        (forGender === FEMALE && currentGender === DEFAULT))
    );
  };

  render() {
    const { items: groupNavigationItems } = this.props;

    return (
      <div
        className={cx(styles.container, {
          [styles.container__visible]: this.isVisible()
        })}
        ref={this.saveSecondaryPanel}
        aria-hidden={!this.isVisible()}
        data-testid="secondary-nav"
      >
        {groupNavigationItems.map(({ items: primaryNavigationItems }) =>
          primaryNavigationItems.map(this.renderNavigationPanel)
        )}
      </div>
    );
  }

  static propTypes = {
    items: PropTypes.arrayOf(navigationPropType).isRequired,
    clearNavActiveItem: PropTypes.func.isRequired,
    navActiveItem: PropTypes.string,
    forGender: genderPropType.isRequired,
    currentGender: genderPropType.isRequired
  };
}

export default SideSecondaryNavigation;
