import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import SideMenuBar from '../SideMenuBar';
import TeacherOnboardingMainSection from './TeacherOnboardingMainSection';
import { MainContainer } from './style';
import OnboardingHomeSection from './OnboardingHomeSection';
import { sidebarButtonText, mainSectionContent } from './onboardingContents';
import CloseButton from '../Buttons/CloseButton';
import { isOnboardingHome } from './rules';
import OnboardingIntroduceSection from './OnboardingIntroduceSection';
import DummyOnboardingSetup from './DummyOnboardingSetup';

const TeacherOnboarding = ({ onCloseOnboarding }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentMainSection, setCurrentMainSection] = useState(0);
  const handleMainSectionChange = (curr) => {
    setCurrentMainSection(curr);
  };

  const lastItem = currentMainSection === sidebarButtonText.length - 1;
  const handleNextButtonClick = () => {
    if (activeSlide === 2) {
      if (lastItem) {
        setActiveSlide(3);
      } else {
        setCurrentMainSection((prevIdx) => prevIdx + 1);
      }
    }
  };


  const handlePreviousButtonClick = () => {
    if (activeSlide === 2) {
      if (currentMainSection === 0) {
        setActiveSlide(1);
      } else {
        setCurrentMainSection((prevIdx) => prevIdx - 1);
      }
    }
  };

  const handleIntroduceSlideChange = (slideNum) => {
    setActiveSlide(slideNum);
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
      {activeSlide === 0 && (
        <OnboardingHomeSection onNext={() => setActiveSlide(1)} />
      )}

      {activeSlide === 1 && (
        <OnboardingIntroduceSection onSlideChange={handleIntroduceSlideChange} onCloseOnboarding={onCloseOnboarding}/>
      )}

      {activeSlide === 2 && (
        <DialogContent>
          <MainContainer>
            <CloseButton onclickFn={onCloseOnboarding} />
            <SideMenuBar
              menuTitle="Starter's guide"
              menuItems={sidebarButtonText}
              currentItem={currentMainSection}
              onClickMenuItem={handleMainSectionChange}
              handlePreviousButtonClick={handlePreviousButtonClick}
            />
            <TeacherOnboardingMainSection
              content={mainSectionContent[currentMainSection]}
              lastItem={lastItem}
              handleNextButtonClick={handleNextButtonClick}
            />
          </MainContainer>
        </DialogContent>
      )}
      {activeSlide === 3 && (
        <DummyOnboardingSetup closeOnboarding={onCloseOnboarding}/>
      )}
    </Dialog>
  );
};

export default TeacherOnboarding;
