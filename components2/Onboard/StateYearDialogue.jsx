import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import {
  DialogueBox,
  DropdownContainer,
  DropdownItem,
  DropdownBox,
  Title,
  Button,
  Header,
  TermsCondition,
  CheckboxContainer,
  WarningContainer,
  Checkbox,
  TermsText,
  HeaderText,
  CloseImg,
} from './stateYearDialogueStyle';
import { profileStateYear } from '../../service';
import StyledDropDown from '../StyledDropDown';
import countriesData from './countries.json';

const yearOptions = [
  { title: '12' },
  { title: '11' },
  { title: '10' },
  { title: '9' },
  { title: '8' },
  { title: '7' },
];

const StateYearDialogue = ({ setStage, editStateYear, onClose }) => {
  const defaultCountry = Object.keys(countriesData)[0] || 'Australia';
  const [country, setCountry] = useState({ title: defaultCountry });
  const defaultState =
    Cookies.get('state') === null || Cookies.get('state') === undefined
      ? countriesData[defaultCountry][0].state
      : Cookies.get('state');
  const [state, setState] = useState(defaultState);
  const defaultYear =
    Cookies.get('year') === null || Cookies.get('year') === undefined
      ? '7'
      : Cookies.get('year');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const [year, setYear] = useState(defaultYear);
  const countryOptions = Object.keys(countriesData).map((country) => ({
    title: country,
  }));
  const stateOptions =
    country && country.title
      ? countriesData[country.title].map((s) => ({
          title: s.state,
        }))
      : [];

  const handleStateSelect = (selectedState) => {
    setState(selectedState.title);
  };

  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear.title);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const cookieState = Cookies.get('state');
  const cookieYear = Cookies.get('year');

  const saveStateYear = () => {
    if (state && year) {
      profileStateYear({
        year: year,
        state: state,
      }).then(() => {
        Cookies.set('state', state);
        Cookies.set('year', year);
        onClose();
        if (editStateYear) {
          toast(<Toast message={'Setting successfully updated'} />);
        }
      });
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const isSubmitDisabled = !editStateYear && !isCheckboxChecked;

  const handleTermsConditionClick = () => {
    window.location.href = 'https://jeddle.duxdigital.net/terms-conditions/';
  };

  return (
    <DialogueBox>
      <Header>
        <HeaderText>
          {editStateYear
            ? 'Update your Location'
            : "Let's Get Started - Customise Your Feedback"}
        </HeaderText>

        {editStateYear && (
          <CloseImg
            src="img/vector-12@2x.png"
            onClick={() => {
              onClose();
            }}
          />
        )}
      </Header>
      <DropdownContainer>
        <DropdownItem>
          <Title>Country</Title>
          <DropdownBox>
            <StyledDropDown
              menuItems={countryOptions}
              fullWidth={true}
              onItemSelected={handleCountrySelect}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>State</Title>
          <DropdownBox>
            <StyledDropDown
              menuItems={stateOptions}
              selectedIndex={stateOptions.findIndex(
                (option) => option.title === state
              )}
              fullWidth={true}
              onItemSelected={handleStateSelect}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>Year</Title>
          <DropdownBox>
            <StyledDropDown
              menuItems={yearOptions}
              selectedIndex={yearOptions.findIndex(
                (option) => option.title === year
              )}
              fullWidth={true}
              onItemSelected={handleYearSelect}
            />
          </DropdownBox>
        </DropdownItem>
      </DropdownContainer>
      {!editStateYear && (
        <TermsCondition>
          <WarningContainer>
            <h3>Anti-Bullying & Harassment Policy</h3>
            <p>
              Any instance of bullying, harassment or misconduct will result in{' '}
              <span>immediate suspension</span> from the platform.
            </p>
          </WarningContainer>
          <CheckboxContainer>
            <Checkbox type="checkbox" onChange={handleCheckboxChange} />
            <TermsText>
              I agree to the{' '}
              <span onClick={handleTermsConditionClick}>
                terms & conditions
              </span>
            </TermsText>
          </CheckboxContainer>
        </TermsCondition>
      )}
      <Button onClick={saveStateYear} disabled={isSubmitDisabled}>
        {editStateYear ? 'Update' : 'Submit'}
      </Button>
    </DialogueBox>
  );
};

export default StateYearDialogue;
