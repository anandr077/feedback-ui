import React, { useContext, useState } from 'react';
import { OnboardingContext } from './OnboardingProvider';
import Cookies from 'js-cookie';
import DropdownMenu from '../../components/DropdownMenu';
import {
  DialogueBox,
  DropdownContainer,
  DropdownItem,
  DropdownBox,
  Title,
  Button,
  Header,
  TermsCondition,
  Checkbox,
  TermsText,
  HeaderText,
  CloseImg,
} from './stateYearDialogueStyle';
import { profileStateYear, getStateYear } from '../../service';
import { OnboardingContext } from './OnboardingProvider';
import StyledDropDown from '../StyledDropDown';

const countryOptions = [{ title: 'Australia' }];

const stateOptions = [
  { title: 'New South Wales' },
  { title: 'Queensland' },
  { title: 'South Australia' },
  { title: 'Tasmania' },
  { title: 'Victoria' },
  { title: 'Western Australia' },
];

const yearOptions = [
  { title: '7' },
  { title: '8' },
  { title: '9' },
  { title: '10' },
  { title: '11' },
  { title: '12' },
];

const StateYearDialogue = ({ setStage }) => {
  const { setShowStateYear, setEditStateYear } = useContext(OnboardingContext);
  const [country, setCountry] = useState({});
  const [state, setState] = useState({});
  const [year, setYear] = useState({});
  const [selectedStateIndex, setSelectedStateIndex] = useState();
  const [selectedYearIndex, setSelectedYearIndex] = useState();
  const { editStateYear } = useContext(OnboardingContext);

  const handleStateSelect = (selectedState) => {
    setState(selectedState);
  };
  
  const handleYearSelect = (selectedYear) => {
    setYear(selectedYear);
  };

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry)
  }

  React.useEffect(() => {
    Promise.all([getStateYear()]).then(([profile]) => {
      setState(profile.state);
      setYear(profile.year);

      const stateIndex = stateOptions.findIndex(
        (option) => option.title === profile.state
      );
      setSelectedStateIndex(stateIndex >= 0 ? stateIndex : stateOptions[0]);

      const yearIndex = yearOptions.findIndex(
        (option) => option.title === profile.year
      );
      setSelectedYearIndex(yearIndex >= 0 ? yearIndex : yearOptions[0]);
    });
  }, []);

  const saveToCookies = () => {
    if (state.title && year.title) {
      profileStateYear({
        year: year.title,
        state: state.title,
      }).then(() => {
        Cookies.set('state', state.title);
        Cookies.set('year', year.title);
        Cookies.set('country', country.title);
        //{!editStateYear && setStage(3)}
        setShowStateYear(false);
        setEditStateYear(false);
      });
    }
  };

  return (
    <DialogueBox>
      <Header>
        <HeaderText>
          {editStateYear
            ? 'Update your settings'
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
              fullWidth = {true}
              onItemSelected={handleCountrySelect}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>State</Title>
          <DropdownBox>
            <StyledDropDown
              menuItems={stateOptions}
              selectedIndex={selectedStateIndex}
              fullWidth = {true}
              onItemSelected={handleStateSelect}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>Year</Title>
          <DropdownBox>
            <StyledDropDown
              menuItems={yearOptions}
              selectedIndex={selectedYearIndex}
              fullWidth = {true}
              onItemSelected={handleYearSelect}
            />
          </DropdownBox>
        </DropdownItem>
      </DropdownContainer>
      {!editStateYear && (
        <TermsCondition>
          <Checkbox type="checkbox" />
          <TermsText>
            I agree to the <span>terms & conditions</span>
          </TermsText>
        </TermsCondition>
      )}
      <Button onClick={saveToCookies}>
        {editStateYear ? 'Update' : 'Submit'}
      </Button>
    </DialogueBox>
  );
};

export default StateYearDialogue;
