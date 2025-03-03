import React, { useContext, useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import {
  MainContainer,
  WelcomeUser,
  Navbar,
  NavbarButton,
  StopShowCheckBox
} from './welcomeOnboardingStyle.js';
import CloseButton from '../Buttons/CloseButton/index.jsx';
import StartOnboarding from './StartOnboarding.jsx';
import TutorialOnboarding from './TutorialOnboarding.jsx';
import { getUserName } from '../../userLocalDetails.js';
import WhatIsJeddAi from './WhatIsJeddAi.jsx';
import Cookies from 'js-cookie';
import { AppContext } from '../../app.context.js';
import { disableOnboarding, updateLastOnboardingTime } from '../../service.js';

const WelcomeOnboarding = ({profile}) => {
  const navItems = ['Start', 'Tutorials', 'What is JeddAI?'];
  const [activeOnboarding, setActiveOnboarding] = useState('Start');
  const { setShowWelcomeOnboarding } = useContext(AppContext);

  const closeWelcomeOnboarding = async() =>{
   try {
    await updateLastOnboardingTime()
   } catch (error) {
    console.error(error);
   } finally{
    setShowWelcomeOnboarding(false);
   }
  }

  const handleActiveOnboarding = () => {
    switch (activeOnboarding) {
      case 'Tutorials':
        return <TutorialOnboarding />;
      case 'What is JeddAI?':
        return <WhatIsJeddAi />;
      case 'Start':
      default:
        return <StartOnboarding onCloseOnboarding={closeWelcomeOnboarding}/>;
    }
  };

  const handleStopWelcomeOnboardingPermanently = async() =>{
    try {
      await disableOnboarding();
    } catch (error) {
      console.error(error);
    }
  }

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
          <CloseButton onclickFn={closeWelcomeOnboarding} />
          <WelcomeUser>Welcome, {getUserName()}</WelcomeUser>
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
          <StopShowCheckBox>
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  handleStopWelcomeOnboardingPermanently();
                }
              }}
            />
            <span style={{ marginLeft: '8px' }}>Stop showing me this</span>
          </StopShowCheckBox>
        </MainContainer>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomeOnboarding;
