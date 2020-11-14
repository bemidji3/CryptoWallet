import React from "react";
import UserProfile from "./UserProfile";
import useUser from "../../lib/hooks/useUser"

function UserProfileWrapper() {

    const { fetchUser, getCurrentUser } = useUser();

    const currentUserEmail = getCurrentUser();


    return (
        <UserProfile
            fetchUser={fetchUser}
            currentUserEmail={currentUserEmail}
        />
    )
}

export default UserProfileWrapper;
