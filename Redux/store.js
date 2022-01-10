import { createStore,combineReducers } from "redux";
import {allOrderReducer,searchReducer,allAssetReducer} from "./reducer";

const rootReducer = combineReducers({allOrder:allOrderReducer,search:searchReducer,allAsset:allAssetReducer});
const Store = createStore(rootReducer)

export default Store;