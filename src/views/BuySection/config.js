export const initialValues = {
    formData: {
        currency: "",
        amount: "",
        price: "",
        type: "",
        side: "buy",
    }
};

export const currencyOptions = [
    { text: "BTC", value: "btc" },
    { text: "ETH", value: "eth" },
    { text: "LTC", value: "ltc" },
];

export const typeOptions = [
    { text: "Market", value: "market" },
    { text: "Limit", value: "limit" },
]