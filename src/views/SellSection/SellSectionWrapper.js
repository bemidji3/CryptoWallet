import React from "react";
import useForm from "../../lib/hooks/useForm";
import useCurrency from "../../lib/hooks/useCurrency";
import {currencyOptions, initialValues, typeOptions} from "./config";
import SellSection from "./SellSection";
import useUser from "../../lib/hooks/useUser";

function SellSectionWrapper() {

    const { submitSellOrder } = useCurrency();
    const { getCurrentUser } = useUser();

    const currentUserEmail = getCurrentUser();

    const onSubmit = (data) => {
        const wrappedData = {
            ...data,
            email: currentUserEmail,
        };
        submitSellOrder(wrappedData);
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
