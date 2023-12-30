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
  TermsText
} from './stateYearDialogueStyle';
import { profileStateYear } from '../../service';

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
  //const { setShowStateYear } = useContext(OnboardingContext);
  const [country, setCountry] = useState({})
  const [state, setState] = useState({});
  const [year, setYear] = useState({});

  const saveToCookies = () => {
    if (state.title && year.title && country.title) {
      profileStateYear({
        country: country.title,
        year: year.title,
        state: state.title,
      }).then(() => {
        Cookies.set('state', state.title);
        Cookies.set('year', year.title);
        Cookies.set('country', country.title)
        setStage(3);
        //setShowStateYear(false);
      });
    }
  };

  return (
    <DialogueBox>
      <Header>Let's Get Started - Customise Your Feedback</Header>
      <DropdownContainer>
        <DropdownItem>
          <Title>Country</Title>
          <DropdownBox>
            <DropdownMenu
              menuItems={countryOptions}
              getSelectedItem={(item) => setCountry(item)}
              fullWidth={true}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>State</Title>
          <DropdownBox>
            <DropdownMenu
              menuItems={stateOptions}
              getSelectedItem={(item) => setState(item)}
              fullWidth={true}
            />
          </DropdownBox>
        </DropdownItem>
        <DropdownItem>
          <Title>Year</Title>
          <DropdownBox>
            <DropdownMenu
              menuItems={yearOptions}
              getSelectedItem={(item) => setYear(item)}
              fullWidth={true}
            />
          </DropdownBox>
        </DropdownItem>
      </DropdownContainer>
      <TermsCondition>
         <Checkbox type='checkbox' />
         <TermsText>I agree to the <span>terms & conditions</span></TermsText>
      </TermsCondition>
      <Button onClick={saveToCookies}>Submit</Button>
    </DialogueBox>
  );
};

export default StateYearDialogue;
