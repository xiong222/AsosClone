import { combineReducers } from "redux";
import layout from "./layout";
import navigation from "./navigation";
import regionalStore from "./regionalStore";
import search from "./search";
import savedItems from "./savedItems";
import bag from "./bag";
import countrySelector from "./countrySelector";
import version from "./version";
import welcomeMessage from "./welcomeMessage";
import welcomeMat from "./welcomeMat";
import user from "./user";
import dropdown from "./dropdown";
import features from "./features";

export default combineReducers({
  layout,
  navigation,
  regionalStore,
  search,
  savedItems,
  bag,
  countrySelector,
  version,
  welcomeMessage,
  welcomeMat,
  user,
  dropdown,
  features
});
