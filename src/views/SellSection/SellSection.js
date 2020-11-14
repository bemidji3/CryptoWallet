import React from "react";
import Card from "../../components/Card";
import {Card as SemanticCard} from "semantic-ui-react";
import FormField from "../../components/FormField";
import Input from "../../components/Input";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";
import Form from "../../components/Form";
import "./SellSection.scss";
import "semantic-ui-css/components/card.css";


function SellSection({ formData, handleChange, onSubmit, currencyDropdownOptions, typeDropdownItems }) {
    const { amount, currency, price, type } = formData;

    return (
        <div className="BuySection">
            <Form>
                <Card>
                    <SemanticCard.Content>
                        <SemanticCard.Header>Sell Actions</SemanticCard.Header>
                        <SemanticCard.Meta>Place a Sell Order</SemanticCard.Meta>
                        <FormField>
                            <Input
                                label="Amount"
                                value={amount}
                                onChange={(_, { value }) => {
                                    handleChange("amount", value);
                                }}
                            />
                        </FormField>
                        <FormField>
                            <Input
                                label="Sell Price (USD)"
                                value={price}
                                onChange={(_, { value }) => {
                                    handleChange("price", value);
                                }}
                            />
                        </FormField>
                        <FormField>
                            <Dropdown
                                label="Currency"
                                value={currency}
                                items={currencyDropdownOptions}
                                onChange={(_, { value }) => handleChange("currency", value)}
                                selection
                            />
                        </FormField>
                        <FormField>
                            <Dropdown
                                label="Type"
                                value={type}
                                items={typeDropdownItems}
                                onChange={(_, { value }) => handleChange("type", value)}
                                selection
                            />
                        </FormField>
                        <Button
                            onClick={() => {
                                onSubmit(formData)
                            }}
                        >
                            Submit Sell Request
                        </Button>
                    </SemanticCard.Content>
                </Card>
            </Form>
        </div>
    )
}

export default SellSection;
