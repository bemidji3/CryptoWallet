import { useDispatch } from "react-redux";
import { createBuy } from "../../store/currencies/actions";

export default () => {
    const dispatch = useDispatch();

    const submitBuyOrder = (buyInfo) => {
        return dispatch(createBuy(buyInfo));
    };

    const submitSellOrder = (sellInfo) => {
        return dispatch();
    }

    return { submitBuyOrder }
}