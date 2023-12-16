import React, { useContext, useState } from 'react';
import { StateYearContext } from './StateYearProvider';
import Cookies from 'js-cookie';
import {
  Screen,
  DialogueBox,
  Heading,
  DropdownContainer,
  DropdownItem,
  DropdownBox,
  Title,
  Button,
} from './stateYearDialogueStyle';
import DropdownMenu from '../../components/DropdownMenu';

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

const StateYearDialogue = () => {
  const { setShowStateYear } = useContext(StateYearContext);
  const [state, setState] = useState({});
  const [year, setYear] = useState({});

  const saveToCookies = () => {
    if (state.title && year.title) {
      Cookies.set('state', state.title);
      Cookies.set('year', year.title);
      setShowStateYear(false);
    }
  };

  return (
    <Screen>
      <DialogueBox onClick={(e) => e.stopPropagation()}>
        <Heading>Help us know you better</Heading>
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
    </Screen>
  );
};

export default StateYearDialogue;
