import React, { useState, useEffect, createContext } from 'react';
import OnboardingScreen from './OnboardingScreen';
import { getUserRole, getStateYear } from '../../service';
import Cookies from 'js-cookie';

export const OnboardingContext = createContext();

const OnboardingProvider = ({ children }) => {
  const [showStateYear, setShowStateYear] = useState(false);
  const [editStateYear, setEditStateYear] = useState(false);
  const role = getUserRole();

  useEffect(() => {
    Promise.all([getStateYear()]).then(([profile]) => {
      if (!profile.state || !profile.year) {
        setShowStateYear(true);
      }
      Cookies.set('state', profile.state);
      Cookies.set('year', profile.year);
    });
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
