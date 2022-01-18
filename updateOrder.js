import Store from "./Redux/store";

export default function updateOrder(order){

    const orders= [...Store.getState().allOrder,order];
    updateData(orders);

    //processing data for allAssetStore
    const processedData = [];
    orders.forEach((order)=>{
        var element = processedData.find((el)=>el.currency===order.currency);

        if(element){
            if(order.type==="buy"){
                element.total_quantity += order.total_quantity;
                element.total_amount += order.total_amount;
                element.avg_price = element.total_amount/element.total_quantity;
                element.pl = (element.curr_price*element.total_quantity)-element.total_amount;
                element.returns = element.pl/element.total_amount*100;
            }else if(element.total_quantity>=order.total_quantity){
                element.total_quantity -= order.total_quantity;
                // element.total_amount = no changes;
                if(element.total_quantity===0){
                    element.avg_price = 0;
                }else{
                    element.avg_price = element.total_amount/element.total_quantity;
                }
                element.pl = (element.curr_price*element.total_quantity)-element.total_amount;
                element.returns = element.pl/element.total_amount*100;
                element.withdrew += order.total_amount;
                element.sold_quantity += order.total_quantity;
            }else{
                console.log("Not enough quantity to sell!!!");
            }
        }else{
            if(order.type=="buy"){
                var curr_price = 1100;
                var item = {
                    currency:order.currency,
                    total_quantity:order.total_quantity,
                    total_amount:order.total_amount,
                    avg_price:order.total_amount/order.total_quantity,
                    curr_price:curr_price,
                    pl:(curr_price*order.total_quantity)-order.total_amount,
                    returns: ((curr_price*order.total_quantity)-order.total_amount) / order.total_amount*100,
                    withdrew : 0,
                    sold_quantity:0,
                }
                processedData.push(item);
            }
            else{
                console.log("You dont have that to sell");
            }
        }
    })

    updateData2(processedData);
}

function updateData(orders){
    Store.dispatch({
        type:"ADD_ORDER",
        payload:{
            orders:orders
        }
    })
}

function updateData2(assets){
    Store.dispatch({
        type:"ADD_ASSET",
        payload:{
            assets:assets
        }
    })
}
