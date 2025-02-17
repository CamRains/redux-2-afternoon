import { createStore, combineReducers, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import budgetReducer from "../src/ducks/budgetReducer";
import userReducer from "../src/ducks/userReducer";

const rootReducer = combineReducers({
  budget: budgetReducer,
  user: userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));
