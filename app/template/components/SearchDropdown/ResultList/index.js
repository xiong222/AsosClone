import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setSearchTerm, getSearchTerm } from "../../../state/modules/search";
import ResultList from "./ResultList";

function mapStateToProps(state) {
  return {
    term: getSearchTerm(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setSearchTerm: setSearchTerm
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
