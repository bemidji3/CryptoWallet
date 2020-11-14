import React from "react";
import OrderHistory from "./OrderHistory";
import useOrders from "../../lib/hooks/useOrders";

function OrderHistoryWrapper(){
    const {buyOrders, sellOrders } = useOrders();

    return (
        <OrderHistory
            buyOrders={buyOrders}
            sellOrders={sellOrders}
        />
    )
}

export default OrderHistoryWrapper;
