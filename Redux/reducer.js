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

function ascSort(a,b){
    return (a > b) ? 1 : ((b > a) ? -1 : 0);
}

function desSort(a,b){
    return (a < b) ? 1 : ((b < a) ? -1 : 0);
}

export function searchReducer(state=[],action){
    switch(action.type){
        case "ADD":
            return [...action.payload.orders]

        case "filter":
            const query = action.payload.query;
            const load = action.payload.data;
            return load.filter((order)=>order.currency.includes(query));

        case "SORT":
            switch(action.by){

                case "INVESTED":
                    if(action.ascOrder)
                        return state.sort((a,b)=>ascSort(a.invested,b.invested));
                    return state.sort((a,b)=>desSort(a.invested,b.invested));


                case "PL":
                    if(action.ascOrder)
                        return state.sort((a,b)=>ascSort(a.pl,b.pl));
                    return state.sort((a,b)=>desSort(a.pl,b.pl));

                case "RETURN":
                    if(action.ascOrder)
                        return state.sort((a,b)=>ascSort(a.return,b.return));
                    return state.sort((a,b)=>desSort(a.return,b.return));

            }
        default:
            return state;
    }
}

