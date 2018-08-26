import { connect } from "react-redux";
import CarouselContainer from "./CarouselContainer";
import { getViewport } from "../../../../state/modules/layout";

function mapStateToProps(state) {
  return {
    viewportCategory: getViewport(state)
  };
}

export default connect(mapStateToProps)(CarouselContainer);
