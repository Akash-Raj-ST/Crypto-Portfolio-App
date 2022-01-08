

export function allDataReducer(state=[],action){
    if(action.type=="ADD"){
        return [...state,...action.payload.orders];
    }
    else{
        return state;
    }
}

export function searchReducer(state=[],action){
    switch(action.type){
        case "ADD":
            return [...action.payload.orders]

        case "filter":
            const query = action.payload.query;
            const load = action.payload.data
            return load.filter((order)=>order.token.includes(query));

        case "sort":
            switch(action.type.by){
                case "price":
                    return state.sort((a,b)=>{a.price-b.price});

                case "amount":
                    return state.sort((a,b)=>{a.amount-b.amount});

                case "time":
                    return state.sort((a,b)=>{a.time-b.time});

                case "pl":
                    return state.sort((a,b)=>{a.pl-b.pl});

                case "return":
                    return state.sort((a,b)=>{a.return-b.return});

            }
        default:
            return state;
    }
}

