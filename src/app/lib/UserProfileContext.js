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
        setUserProfileContext: info => setUserProfile(prevState => {
            console.log([Object.keys(info)][0]);
            console.log(Object.keys(info));
            return {
            ...prevState,
            [Object.keys(info)]: Object.values(info)[0]
        }})
    }
    const [userProfile, setUserProfile] = useState(userProfileState);
    return (<UserProfileContext.Provider value={userProfile}>{children}</UserProfileContext.Provider>)
}

export default UserProfileContextProvider


