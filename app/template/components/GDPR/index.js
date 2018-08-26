import { connect } from "react-redux";
import {
  getFeature,
  getFeaturesLoaded,
  setGlobalFeatureName
} from "../../state/modules/features";
import {
  getCustomerGuid,
  getHasErrors,
  getHasReconsented,
  getIsOptInLoading,
  getIsOptOutLoading,
  getIsReconsentRequired,
  getPreferences,
  getPrivacyUrlSegment,
  getTermsUrlSegment,
  optIn,
  optOut,
  setUserPreferences
} from "../../state/modules/user";
import { getPlatform } from "../../state/modules/layout";
import { getPageInfo } from "../../helpers/pageInfoProvider";

import GDPR from "./GDPR";

const getMvtContent = state => {
  const gdprFeature = getFeature(state, "t1161-gdpr-test-web");

  if (gdprFeature && gdprFeature.content) {
    setGlobalFeatureName(gdprFeature.mvtTestName);
    const content = gdprFeature.content;
    return {
      greeting: content.bubbleText,
      title: content.modalTitle,
      subtitle: content.modalSubtitle
    };
  }
  return undefined;
};

const mapStateToProps = state => {
  const { section } = getPageInfo();
  const platform = getPlatform(state);
  const ctaRef = `${platform}|${section}|control my content`;

  return {
    ctaRef: ctaRef,
    customerGuid: getCustomerGuid(state),
    gdprPhaseTwoFeature: getFeature(state, "stc-gdpr-phase-two"),
    hasError: getHasErrors(state),
    hasReconsented: getHasReconsented(state),
    isOptInLoading: getIsOptInLoading(state),
    isOptOutLoading: getIsOptOutLoading(state),
    isReconsentRequired: getIsReconsentRequired(state),
    preferences: getPreferences(state),
    privacyUrlSegment: getPrivacyUrlSegment(state),
    termsUrlSegment: getTermsUrlSegment(state),
    testContent: getMvtContent(state),
    testIsLoaded: getFeaturesLoaded(state)
  };
};

const mapDispatchToProps = {
  optIn,
  optOut,
  setUserPreferences
};

export default connect(mapStateToProps, mapDispatchToProps)(GDPR);
