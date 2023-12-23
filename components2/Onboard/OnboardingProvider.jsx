import React, { useState, useEffect, createContext } from 'react';
import OnboardingScreen from './OnboardingScreen';
import { getUserRole } from '../../service';
import Cookies from 'js-cookie';


export const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) =>{
    const [showStateYear, setShowStateYear] = useState(false)
    const role = getUserRole()

    useEffect(()=>{
       if(!Cookies.get('state') || !Cookies.get('year')){
         setShowStateYear(true)
       }
    }, [])

    return (
        <OnboardingContext.Provider value={{ showStateYear, setShowStateYear }}>
            {children}
            {role === 'STUDENT' && showStateYear && <OnboardingScreen /> }
        </OnboardingContext.Provider>
    )
}

export default OnboardingProvider