import React from "react";
import useForm from "../../lib/hooks/useForm";
import useCurrency from "../../lib/hooks/useCurrency";
import {currencyOptions, initialValues, typeOptions} from "./config";
import BuySection from "./BuySection";

function BuySectionWrapper() {

    const { submitBuyOrder } = useCurrency();

    const onSubmit = (data) => {
        submitBuyOrder(data);
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
