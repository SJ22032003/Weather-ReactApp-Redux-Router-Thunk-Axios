import { combineReducers } from "redux";
import userData from "./Reducers/Reducer";
import FavReducer from "./Reducers/FavReducer";

const rootReducer = combineReducers({
    userData,
    FavReducer,
})

export default rootReducer;