import React from "react";
import useForm from "../../lib/hooks/useForm";
import useCurrency from "../../lib/hooks/useCurrency";
import {currencyOptions, initialValues, typeOptions} from "./config";
import SellSection from "./SellSection";

function SellSectionWrapper() {

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
        <SellSection
            formData={formData}
            handleChange={handleChange}
            onSubmit={simpleSubmit}
            currencyDropdownOptions={currencyOptions}
            typeDropdownItems={typeOptions}
        />
    )
}

export default SellSectionWrapper;
