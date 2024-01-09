import Cookies from 'js-cookie';
import { default as React, default as React, useState } from 'react';
import OnboardingScreen from '../../components2/Onboard/OnboardingScreen';
import { getUserRole } from '../../service';

const withOnboarding = (WrappedComponent) => {
  const defaultShowOnboarding = getUserRole() === 'student' && !Cookies.get('state');
  const [showOnboarding, setShowOnboarding] = useState(defaultShowOnboarding);

  const WithOnboarding = (props) => {
    return (
      <>
        {onboardingPopup()}
        <WrappedComponent {...props} />
      </>
    );
  };

  const closeOnboarding = () => {
    return setShowOnboarding(false);
  };

  function onboardingPopup() {

    return showOnboarding && <OnboardingScreen editStateYear={false} onClose={()=>closeOnboarding()} />;
  }
  return WithOnboarding;
};
export default withOnboarding;
