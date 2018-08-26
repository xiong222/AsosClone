import { connect } from "react-redux";
import DeleteItem from "./DeleteItem";
import { deleteBagItem } from "../../../../state/modules/bag";

const mapDispatchToProps = {
  deleteBagItem
};

export default connect(null, mapDispatchToProps)(DeleteItem);
