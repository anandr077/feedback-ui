import { default as React, default as React, useState } from 'react';
import OnboardingScreen from '../../components2/Onboard/OnboardingScreen';
import { getUserRole } from '../../userLocalDetails';
import { getLocalStorage } from '../../utils/function';

const withOnboarding = (WrappedComponent) => {
  const defaultShowOnboarding =
    getUserRole() === 'STUDENT' &&
    (getLocalStorage('state') === undefined ||
      getLocalStorage('state') === null);
  const [showOnboarding, setShowOnboarding] = useState(defaultShowOnboarding);

  const WithOnboarding = (props) => {
    return (
      <>
        {onboardingPopup(WrappedComponent)}
        <WrappedComponent {...props} />
      </>
    );
  };

  const closeOnboarding = () => {
    return setShowOnboarding(false);
  };

  function onboardingPopup() {
    const show =
      getUserRole() === 'STUDENT' &&
      (getLocalStorage('state') === undefined ||
        getLocalStorage('state') === null);

    if (show) {
      localStorage.setItem("onboardingShown", true)
      return <OnboardingScreen editStateYear={false} onClose={()=>closeOnboarding()} />;
    }
    
  }
  return WithOnboarding;
};
export default withOnboarding;
