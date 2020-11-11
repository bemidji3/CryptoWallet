import { post } from "../../lib/Api";

export const createBuySuccess = (data) => {
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

    return post("http://localhost:6969/new-buy-request", info).then(result => {
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