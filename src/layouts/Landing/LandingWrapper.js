import React, { useCallback } from "react";
import Landing from "./Landing";
import useUser from "../../lib/hooks/useUser"
import {useHistory} from "react-router-dom";

function LandingWrapper() {
    const { logoutUser } = useUser();
    const history = useHistory();

    const onLogout = useCallback(() => {
        console.log("trying to logout user");
        logoutUser().then(() => {
            history.push("/");
        });
    }, []);

    return (
        <Landing
            onLogout={onLogout}
        />
    )
}

export default LandingWrapper;
