import React, { useState, useEffect, createContext } from 'react';
import StateYearDialogue from './StateYearDialogue';
import { getUserRole } from '../../service';
import Cookies from 'js-cookie';


export const StateYearContext = createContext();

const StateYearProvider = ({ children }) =>{
    const [showStateYear, setShowStateYear] = useState(false)
    const role = getUserRole()

    useEffect(()=>{
       if(!Cookies.get('state') && !Cookies.get('year')){
         setShowStateYear(true)
       }
    }, [])

    return (
        <StateYearContext.Provider value={{ showStateYear, setShowStateYear }}>
            {children}
            {role === 'STUDENT' && showStateYear && <StateYearDialogue /> }
        </StateYearContext.Provider>
    )
}

export default StateYearProvider