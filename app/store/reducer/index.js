import { combineReducer } from "redux";

export default function getRootReducer(navReducer) {
  return combineReducer({
    nav: navReducer
  });
}
