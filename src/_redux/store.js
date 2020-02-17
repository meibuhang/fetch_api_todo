import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";

//from reducers rooms
import { todo } from "../_reducers/todo";

//from orders and payment


//combine the reducers :
const rootReducers = combineReducers({
 todo
});

const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store;
