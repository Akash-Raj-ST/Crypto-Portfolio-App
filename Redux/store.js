import { createStore,combineReducers } from "redux";
import {allDataReducer,searchReducer} from "./reducer";

const rootReducer = combineReducers({allData:allDataReducer,search:searchReducer});
const Store = createStore(rootReducer)

export default Store;