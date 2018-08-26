import { connect } from "react-redux";
import { getSocialLinks } from "../../../state/modules/regionalStore";
import SocialLinks from "./SocialLinks";

function mapStateToProps(state) {
  return {
    links: getSocialLinks(state)
  };
}

export default connect(mapStateToProps, null)(SocialLinks);
