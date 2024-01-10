import Cookies from 'js-cookie';
import { default as React, default as React, useState } from 'react';
import OnboardingScreen from '../../components2/Onboard/OnboardingScreen';
import { getUserRole } from '../../service';

const withOnboarding = (WrappedComponent) => {
  const defaultShowOnboarding =
   getUserRole() === 'STUDENT' && (Cookies.get('state') === undefined || Cookies.get('state') === null);
  console.log("defaultShowOnboarding", defaultShowOnboarding)
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
    const onboardingShown = localStorage.getItem("onboardingShown")
    // alert("onboardingShown " + onboardingShown + "WrappedComponent " + WrappedComponent)
    if (onboardingShown === "true") {
      return <></>;
    }
    if (showOnboarding) {
      localStorage.setItem("onboardingShown", true)
      return <OnboardingScreen editStateYear={false} onClose={()=>closeOnboarding()} />;
    }
    
  }
  return WithOnboarding;
};
export default withOnboarding;
