import React, { useState, useContext, useEffect } from 'react';
import {
  OnboardingContainer,
  HeaderFlag,
  OnboardingInformationContainer,
  OnboardingInformationBox,
  OnboardingHeading,
  Frame1410,
  LocationAgeContainer,
  EditBtn,
} from './headerOnboardingMenuStyle';
import Cookies from 'js-cookie';
import OnboardingScreen from './OnboardingScreen';

const HeaderOnboardingMenu = () => {
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(false);

  return (
    <>
      {showOnboardingPopup && <OnboardingScreen editStateYear={true} onClose={()=>setShowOnboardingPopup(false)}/>}
      <OnboardingContainer>
        <HeaderFlag src=""/>
        <OnboardingInformationContainer>
          <OnboardingInformationBox>
            <OnboardingHeading>YEAR AND LOCATION</OnboardingHeading>
            <Frame1410>
              <LocationAgeContainer>
                <div>
                  Year {Cookies.get('year')}, Australia, {Cookies.get('state')}
                </div>
              </LocationAgeContainer>
              <EditBtn
                onClick={() => {
                  setShowOnboardingPopup(true);
                }}
              >
                <img src="/img/editSmall.png" />
                <p>Edit</p>
              </EditBtn>
            </Frame1410>
          </OnboardingInformationBox>
        </OnboardingInformationContainer>
      </OnboardingContainer>
    </>
  );
};

export default HeaderOnboardingMenu;
