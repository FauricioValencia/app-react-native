import { createStore } from "redux";
import getRootReducer from "./reducer/index";

export default function getStore(navReducer) {
  return (store = createStore(getRootReducer(navReducer)));
}
