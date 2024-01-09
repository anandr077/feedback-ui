import { Route, Switch, useHistory } from 'react-router-dom';
import {
  exchangeCodeForToken,
  getAuthToken,
  getState,
  getUserId,
  getUserName,
  getUserRole,
  redirectToExternalIDP,
  setProfileCookies,
} from '../../service';
import { useLocation } from 'react-router-dom';
import { default as React, default as React, useEffect, useState } from 'react';
import Loader from '../Loader';
import OnboardingScreen from '../../components2/Onboard/OnboardingScreen';

const withOnboarding = (WrappedComponent) => {
  const WithOnboarding = (props) => {
    return (
      <>
        {onboardingPopup()}
        <WrappedComponent {...props} />
      </>
    );
  };

  return WithOnboarding;
};
export default withOnboarding;
function onboardingPopup() {
  const state = getState();
  console.log('state', state);
  if (state === undefined || state === null) {
    return (
      <OnboardingScreen />
    );
  }
  return <></>;
}
