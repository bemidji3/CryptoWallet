import {useSelector} from "react-redux";

export default () => {
    const buyOrders = useSelector((state) => state.currenciesReducer.buyOrders);
    const sellOrders = useSelector((state) => state.currenciesReducer.sellOrders);

    return {
        buyOrders,
        sellOrders,
    }

}