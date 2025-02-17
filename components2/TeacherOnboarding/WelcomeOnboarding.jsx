import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import {
  MainContainer,
  WelcomeUser,
  Navbar,
  NavbarButton,
} from './welcomeOnboardingStyle.js';
import CloseButton from '../Buttons/CloseButton/index.jsx';
import StartOnboarding from './StartOnboarding.jsx';
import TutorialOnboarding from './TutorialOnboarding.jsx';

const WelcomeOnboarding = ({ onCloseOnboarding }) => {
  const navItems = ['Start', 'Tutorials', 'What is JeddAI?'];
  const [activeOnboarding, setActiveOnboarding] = useState('Start');
  const handleActiveOnboarding = () => {
    switch (activeOnboarding) {
      case 'Tutorials':
        return <TutorialOnboarding />;
      case 'What is JeddAI?':
        return <h1>Hello jeddai</h1>;
      case 'Start':
      default:
        return <StartOnboarding />;
    }
  };

  return (
    <Dialog
      open={true}
      maxWidth={false}
      sx={{
        '& .MuiDialog-paper': {
          width: 922,
          maxWidth: '90%',
        },
        '& .MuiDialogContent-root': {
          padding: 0,
        },
      }}
    >
      <DialogContent>
        <MainContainer>
          <CloseButton onclickFn={onCloseOnboarding} />
          <WelcomeUser>Welcome, Username</WelcomeUser>
          <Navbar>
            {navItems.map((item) => (
              <NavbarButton
                key={item}
                isActive={activeOnboarding === item}
                onClick={() => setActiveOnboarding(item)}
              >
                {item}
              </NavbarButton>
            ))}
          </Navbar>
          <div>{handleActiveOnboarding()}</div>
        </MainContainer>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeOnboarding;
