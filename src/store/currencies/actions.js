import { post } from "../../lib/Api";

export const createBuySuccess = (data) => {
    console.log("data in create buy success ", data);
    return {
        type: "BUY_ORDER_PLACED",
        data,
    }
};

export const createBuyFailure = () => {
    return {
        type: "BUY_ORDER_FAILED",
    }
};

export const createBuy = (info) => dispatch => {
    return post("http://localhost:6969/new-order", info).then(result => {
        console.log("result from request ", result);
        dispatch(createBuySuccess(result))
    }).catch(error => {
        dispatch(createBuyFailure(error))
    })

};

export const createSellSuccess = (data) => {
    return {
        type: "SELL_ORDER_PLACED",
        data,
    }
};

export const createSellFailure = () => {
    return {
        type: "SELL_ORDER_FAILED",
    }
};

export const createSell = (info) => dispatch => {
    return post("http://localhost:6969/new-order", info).then(result => {
        dispatch(createSellSuccess(result))
    }).catch(error => {
        dispatch(createSellFailure(error))
    });

};

export const fetchOrders = (email) => dispatch => {
    return post("http://localhost:6969/get-orders", email).then(result => {
        dispatch(fetchOrderSuccess(result))
    }).catch(error => {
        dispatch(fetchOrderFailure(error))
    });
};

export const fetchOrderSuccess = (data) => {
    return {
        type: "RECEIVE_INITIAL_ORDERS",
        data,
    }
};

export const fetchOrderFailure = (data) => {
    return {
        type: "INITIAL_ORDERS_FAILURE",
        errors: data,
    }
};