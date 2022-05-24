import { createStore  , applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Components/Context/Index";

const store = createStore(rootReducer , applyMiddleware(thunk));

export default store;