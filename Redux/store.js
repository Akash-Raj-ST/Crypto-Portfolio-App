import { createStore,combineReducers } from "redux";
import {allOrderReducer,allAssetReducer} from "./reducer";

const rootReducer = combineReducers({allOrder:allOrderReducer,allAsset:allAssetReducer});
const Store = createStore(rootReducer)

export default Store;