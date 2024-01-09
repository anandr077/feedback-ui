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
import SnackbarContext from '../../components/SnackbarContext';
import StyledDropDown from '../StyledDropDown';
import countriesData from './countries.json';

const yearOptions = [
  { title: '7' },
  { title: '8' },
  { title: '9' },
  { title: '10' },
  { title: '11' },
  { title: '12' },
];

const StateYearDialogue = ({ setStage }) => {
  const editStateYear = true;
  const { showSnackbar } = useContext(SnackbarContext);
  const defaultCountry = Object.keys(countriesData)[0] || '';
  const [country, setCountry] = useState({ title: defaultCountry });
  const [state, setState] = useState(Cookies.get('state'));
  const [year, setYear] = useState(Cookies.get('year'));
  const countryOptions = Object.keys(countriesData).map((country) => ({
    title: country,
  }));
  const stateOptions =
    country && country.title
      ? countriesData[country.title].map((state) => ({
          title: state.state,
        }))
      : [];

  console.log('countryOptions', stateOptions);

  const handleStateSelect = (selectedState) => {
    console.log('selectedState', selectedState);
    setState(selectedState);
  };

  const handleYearSelect = (selectedYear) => {
    console.log('selectedYear', selectedYear);
    setYear(selectedYear);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const cookieState = Cookies.get('state');
  const cookieYear = Cookies.get('year');

  // useEffect(() => {
  //   if (cookieState) {
  //     setState(cookieState);
  //   }
  //   if (cookieState) {
  //     setYear(cookieState);
  //   }
  // }, []);

  const saveStateYear = () => {
    console.log('the states are', state, year);
    if (state.title && year.title) {
      profileStateYear({
        year: year.title,
        state: state.title,
      }).then(() => {
        Cookies.set('state', state.title);
        Cookies.set('year', year.title);
        //Cookies.set('country', country.title);
        //{!editStateYear && setStage(3)}
        if (editStateYear) {
          showSnackbar('Setting successfully updated');
        }
      });
    }
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
            onClick={() => setEditStateYear(false)}
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
                (option) => option.title === cookieState
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
                (option) => option.title === cookieYear
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
            <Checkbox type="checkbox" />
            <TermsText>
              I agree to the <span>terms & conditions</span>
            </TermsText>
          </CheckboxContainer>
        </TermsCondition>
      )}
      <Button onClick={saveStateYear}>
        {editStateYear ? 'Update' : 'Submit'}
      </Button>
    </DialogueBox>
  );
};

export default StateYearDialogue;
