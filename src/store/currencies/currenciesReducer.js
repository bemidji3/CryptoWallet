import {partition} from "lodash";
const initialState = {
    sellOrders: [],
    buyOrders: [],
};

export default function currenciesReducer(state = initialState, action) {
    switch(action.type) {
        case "SELL_ORDER_PLACED":
            return {
                ...state,
                sellOrders: [action.data.order, ...state.sellOrders]
            };
        case "BUY_ORDER_PLACED":
            return {
                ...state,
                buyOrders: [action.data.order, ...state.buyOrders]
            };
        case "RECEIVE_INITIAL_ORDERS":
            const [buyOrders, sellOrders] = partition(
                action.data,
                ["side", "buy"],
            );
            return {
                ...state,
                buyOrders: [...buyOrders, ...state.buyOrders],
                sellOrders: [...sellOrders, ...state.sellOrders],
            };
        default:
            return state
    }

}