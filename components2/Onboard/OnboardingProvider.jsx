import React, { useState, useEffect, createContext } from 'react';
import OnboardingScreen from './OnboardingScreen';
import { getUserRole } from '../../service';
import Cookies from 'js-cookie';


export const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) =>{
    const [showStateYear, setShowStateYear] = useState(false)
    const [editStateYear, setEditStateYear] = useState(false)
    const role = getUserRole()

    useEffect(()=>{
       if(!Cookies.get('state') || !Cookies.get('year')){
         setShowStateYear(true)
       }
    }, [])

    return (
        <OnboardingContext.Provider value={{ showStateYear, setShowStateYear, editStateYear, setEditStateYear }}>
            {children}
            {(role === 'STUDENT' && (showStateYear || editStateYear)) && <OnboardingScreen /> }
        </OnboardingContext.Provider>
    )
}

export default OnboardingProvider