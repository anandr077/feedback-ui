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
} from './stateYearDialogueStyle';

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
  const [state, setState] = useState({});
  const [year, setYear] = useState({});

  const saveToCookies = () => {
    if (state.title && year.title) {
      Cookies.set('state', state.title);
      Cookies.set('year', year.title);
      setStage(3);
      //setShowStateYear(false);
    }
  };

  return (
    <DialogueBox>
      <DropdownContainer>
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
      <Button onClick={saveToCookies}>Save</Button>
    </DialogueBox>
  );
};

export default StateYearDialogue;
