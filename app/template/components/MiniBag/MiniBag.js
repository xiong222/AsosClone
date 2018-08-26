import React from 'react';
import PropTypes from 'prop-types';
import LineItem from './LineItem';
import Notification from '../../components/Notification';
import Spinner from '../Spinner';
import withTranslation from '../translation';
import ReservationMessage from './ReservationMessage';
import TransitionList from '../TransitionList';

import styles from './index.css';

export const firstTwentyItems = (items) => items.slice(0, 20);

const MiniBag = ({
  defaultStoreUrl,
  bagItemDeleteTransitionEnd,
  formatTranslation,
  items,
  loading
}) => {
  const moreThanTwentyItems = items.length > 20;
  const loaded = items.length && !loading;
  const itemsToRender = firstTwentyItems(items);

  return loaded ? (
    <React.Fragment>
      <ReservationMessage />
      <div className={styles.miniBag}>
        <TransitionList
          onTransitionEnd={bagItemDeleteTransitionEnd}
          itemDeletedLabel={formatTranslation('MiniBag.ItemDeleted')}
        >
          {itemsToRender.map((item) => <LineItem key={item.id} {...item} />)}
        </TransitionList>
        {moreThanTwentyItems && (
          <Notification
            type="alert"
            withClose
            closeLabel={formatTranslation('MiniBag.DismissNotificationBtnText')}
          >
            <div className={styles.notification}>
              <span>
                {formatTranslation('MiniBag.Footer.MaximumItemsMessage')}
              </span>
              <span>
                {formatTranslation('MiniBag.Footer.ViewBagMessage.PartOne')}
                <a
                  className={styles.link}
                  href={defaultStoreUrl.concat(formatTranslation('Bag.Link'))}
                >
                  {formatTranslation('MiniBag.Footer.ViewBagMessage.Link')}
                </a>
                {formatTranslation('MiniBag.Footer.ViewBagMessage.PartTwo')}
              </span>
            </div>
          </Notification>
        )}
      </div>
    </React.Fragment>
  ) : (
    <div className={styles.spinnerContainer}>
      <Spinner size="large" />
    </div>
  );
};

MiniBag.propTypes = {
  defaultStoreUrl: PropTypes.string.isRequired,
  bagItemDeleteTransitionEnd: PropTypes.func.isRequired,
  formatTranslation: PropTypes.func.isRequired,
  items: PropTypes.array,
  loading: PropTypes.bool
};

MiniBag.defaultProps = {
  items: [],
  loading: false
};

export default withTranslation(MiniBag);
