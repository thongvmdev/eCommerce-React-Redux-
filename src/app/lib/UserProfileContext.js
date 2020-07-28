import React from 'react'
import { createContext, useState } from 'react';

export const UserProfileContext = createContext({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: info => {}
});

const UserProfileContextProvider = ({children}) => {
    const userProfileState = {
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        city: "",
        setUserProfileContext: info => setUserProfile(prevState => ({
            ...prevState,
            firstName: info.firstName,
            lastName: info.lastName,
            email: info.email,
            address: info.address,
            zipCode: info.zipCode,
            city: info.city
        }))
    }
    const [userProfile, setUserProfile] = useState(userProfileState);
    return (<UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider


