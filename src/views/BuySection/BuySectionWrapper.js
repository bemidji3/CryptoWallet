import React from "react";
import useForm from "../../lib/hooks/useForm";
import useCurrency from "../../lib/hooks/useCurrency";
import {currencyOptions, initialValues, typeOptions} from "./config";
import BuySection from "./BuySection";
import useUser from "../../lib/hooks/useUser";

function BuySectionWrapper() {

    const { submitBuyOrder } = useCurrency();
    const { getCurrentUser } = useUser();

    const currentUserEmail = getCurrentUser();

    const onSubmit = (data) => {
        console.log("submitting buy order")
        const wrappedData = {
            ...data,
            email: currentUserEmail,
        };
        submitBuyOrder(wrappedData);
    };
    const {
        formData,
        handleChange,
        simpleSubmit,
    } = useForm(initialValues, onSubmit);


    return (
        <BuySection
            formData={formData}
            handleChange={handleChange}
            onSubmit={simpleSubmit}
            currencyDropdownOptions={currencyOptions}
            typeDropdownItems={typeOptions}
        />
    )
}

export default BuySectionWrapper;
