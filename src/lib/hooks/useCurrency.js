import { useDispatch } from "react-redux";
import { createBuy, createSell, fetchOrders } from "../../store/currencies/actions";

export default () => {
    const dispatch = useDispatch();

    const submitBuyOrder = (buyInfo) => {
        return dispatch(createBuy(buyInfo));
    };

    const submitSellOrder = (sellInfo) => {
        return dispatch(createSell(sellInfo));
    };

    const getOrders = (email) => {
        return dispatch(fetchOrders(email))
    };

    return { submitBuyOrder, submitSellOrder, getOrders, }
}