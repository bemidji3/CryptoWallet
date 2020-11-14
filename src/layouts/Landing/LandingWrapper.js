import React, { useCallback } from "react";
import Landing from "./Landing";
import useUser from "../../lib/hooks/useUser"
import {useHistory} from "react-router-dom";
import useCurrency from "../../lib/hooks/useCurrency";


function LandingWrapper() {
    const { logoutUser } = useUser();
    const history = useHistory();

    const { getOrders } = useCurrency();
    const { getCurrentUser } = useUser();

    const currentUserEmail = getCurrentUser();

    const onLogout = useCallback(() => {
        console.log("trying to logout user");
        logoutUser().then(() => {
            history.push("/");
        });
    }, []);

    return (
        <Landing
            onLogout={onLogout}
            getOrders={getOrders}
            email={currentUserEmail}
        />
    )
}

export default LandingWrapper;
