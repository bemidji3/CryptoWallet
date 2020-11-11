import React, {useEffect, useState} from "react";
import Card from "../../components/Card";
import { Card as SemanticCard } from "semantic-ui-react";
import { Loader } from "semantic-ui-react";
import "semantic-ui-css/components/loader.css";
import "semantic-ui-css/components/card.css";
import Image from "../../components/Image";
import "./UserProfile.scss"

function UserProfile({ fetchUser, currentUserEmail }){
    const [userData, setUserData] = useState({});

    useEffect(()=> {
        const fetchUserData = async () => {
            const response = await fetchUser(currentUserEmail.email);
            setUserData(response)
        };
        fetchUserData();
    }, []);

    const { firstName, lastName, userName, dateOfBirth, memberSince } = userData;

    const wrappedMemberSince = memberSince ? memberSince.split("T")[0] : "";
    const memberDate = wrappedMemberSince.split("-")[0];

    const fullMemberName = (firstName && lastName) ? firstName + " " + lastName  : (<Loader />);
    const memberDescription = firstName ? firstName + " is a new user of the app who is testing stuff out" : (<Loader />)

    return (
        <div className="UserProfile">
            <Card>
                <Image src="https://www.trolleytours.com/wp-content/uploads/2016/06/stop-2-white-house-visitors-center.jpg" wrapped ui={false}/>
                <SemanticCard.Content>
                    <div className="TopSection">
                        <SemanticCard.Header>{fullMemberName}</SemanticCard.Header>
                        <SemanticCard.Meta>Joined {memberDate ? memberDate : (<Loader />)}</SemanticCard.Meta>
                        <SemanticCard.Description>
                            {memberDescription}
                        </SemanticCard.Description>
                    </div>
                    <div className="UserStats">
                        <p>Username: {userName ? userName : (<Loader />)}</p>
                        <p>First Name:  {firstName ? firstName : (<Loader />)}</p>
                        <p>Last Name: {lastName ? lastName : (<Loader />)}</p>
                        <p>Birthday: {dateOfBirth ? dateOfBirth : (<Loader />)} </p>
                        <p>Member Since: {wrappedMemberSince ? wrappedMemberSince : (<Loader />)}</p>
                    </div>
                </SemanticCard.Content>
            </Card>
        </div>
    );
}

export default UserProfile;
