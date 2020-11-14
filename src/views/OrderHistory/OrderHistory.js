import React from "react";
import Order from "../../components/Order";

function OrderHistory({buyOrders, sellOrders}){
    console.log("buy orders ", buyOrders, " sell order ", sellOrders);
    return (
        <div className="OrderHistory">
            {buyOrders && buyOrders.map(order => {
                return (
                    <Order
                        orderDetails={order}
                    />
                )
            })}
            {sellOrders && sellOrders.map(order => {
                return (
                    <Order
                        orderDetails={order}
                    />
                )
            })}
        </div>
    )
}

export default OrderHistory;
