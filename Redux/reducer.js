export function allOrderReducer(state=[],action){
    if(action.type=="ADD_ORDER"){
        return [...action.payload.orders];
    }
    else{
        return state;
    }
}

export function allAssetReducer(state=[],action){
    if(action.type=="ADD_ASSET"){
        return [...action.payload.assets];
    }
    else{
        return state;
    }
}
