import React, { useState, useEffect, createContext } from 'react';
import OnboardingScreen from './OnboardingScreen';
import { getUserRole, getStateYear } from '../../service';
import Cookies from 'js-cookie';
import { result } from 'lodash';

export const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) => {
  const [showStateYear, setShowStateYear] = useState(false);
  const [editStateYear, setEditStateYear] = useState(false);
  const role = getUserRole();

  useEffect(() => {
    const state = Cookies.get('state');
    const year = Cookies.get('year');

    if (state && year) {
      setShowStateYear(false);
    } else {
      setShowStateYear(true);
    }
    // Promise.all([getStateYear()]).then(([result]) => {
    //   if (!result.state || !result.year) {
    //     setShowStateYear(true);
    //   }
    //   Cookies.set('state', result.state);
    //   Cookies.set('year', result.year);
    // });
  }, []);

  return (
    <OnboardingContext.Provider
      value={{
        showStateYear,
        setShowStateYear,
        editStateYear,
        setEditStateYear,
      }}
    >
      {children}
      {role === 'STUDENT' && (showStateYear || editStateYear) && (
        <OnboardingScreen />
      )}
    </OnboardingContext.Provider>
  );
};

export default OnboardingProvider;
