import React, {useState} from "react";
import Modal from "../Modal";
import Button from "../Button";
import {Modal as SemanticModal} from "semantic-ui-react";
import "./Order.scss";

function Order({orderDetails}){
    const { amount, id, price, symbol, timestamp } = orderDetails;
    const [open, setOpen] = useState(false);
    const parsedDate = parseInt(timestamp);
    return (
        <div className="Order">
            <Modal
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<div>Click to view this order</div>}
            >
                <SemanticModal.Header>
                    Order Details
                </SemanticModal.Header>
                <SemanticModal.Content>
                    <p>Amount: {amount}</p>
                    <p>ID: {id}</p>
                    <p>Price: {price}</p>
                    <p>Symbol: {symbol}</p>
                    <p>Date: {Date.parse(parsedDate.toString())}</p>
                </SemanticModal.Content>
                <SemanticModal.Actions>
                    <Button
                        content="Close"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setOpen(false)}
                        positive
                    />
                </SemanticModal.Actions>
            </Modal>
        </div>
    )
}

export default Order;
