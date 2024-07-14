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
import countriesData from './countries.json';
import { getLocalStorage } from '../../utils/function';

const HeaderOnboardingMenu = () => {
  const [showOnboardingPopup, setShowOnboardingPopup] = useState(false);
  const state = getLocalStorage('state');
  const defaultCountry = Object.keys(countriesData)[0] || 'Australia';
  const [country, setCountry] = useState(defaultCountry);

  const findFlagIcon = (state = defaultCountry.state) => {
    const matchingState = countriesData[country].find(
      (cntry) => cntry.state === state
    );

    return matchingState
      ? matchingState.flagIcon
      : countriesData[country][0].flagIcon;
  };

  const flagIcon = findFlagIcon(state);

  return (
    <>
      {showOnboardingPopup && (
        <OnboardingScreen
          editStateYear={true}
          onClose={() => setShowOnboardingPopup(false)}
        />
      )}
      <OnboardingContainer>
        <HeaderFlag src={flagIcon} />
        <OnboardingInformationContainer>
          <OnboardingInformationBox>
            <OnboardingHeading>YEAR AND LOCATION</OnboardingHeading>
            <Frame1410>
              <LocationAgeContainer>
                <div>
                  Year {getLocalStorage('year')}, {country},{' '}
                  {getLocalStorage('state')}
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
