import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import SideMenuBar from '../SideMenuBar';
import TeacherOnboardingMainSection from './TeacherOnboardingMainSection';
import { MainContainer } from './style';
import OnboardingHomeSection from './OnboardingHomeSection';
import { sidebarButtonText, mainSectionContent } from './onboardingContents';
import CloseButton from '../Buttons/CloseButton';
import { isOnboardingHome } from './rules';

const TeacherOnboarding = ({ onCloseOnboarding }) => {
  const [currentMainSection, setCurrentMainSection] = useState(0);
  const [showOnboardingHomePage, setShowOnboardingHomePage] = useState(true);
  const handleMainSectionChange = (curr) => {
    setCurrentMainSection(curr);
  };

  const lastItem = currentMainSection === sidebarButtonText.length - 1;
  const handleNextButtonClick = () => {
    if (lastItem) {
      onCloseOnboarding(); 
    } else {
      handleMainSectionChange((prevIdx) => prevIdx + 1); 
    }
  };


  const handlePreviousButtonClick = () => {
    handleMainSectionChange((prevIdx) => {
      if (currentMainSection === 0) {
        setShowOnboardingHomePage(true);
        return prevIdx;
      } 
      return prevIdx - 1;
    });
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
      {isOnboardingHome(showOnboardingHomePage) ? (
        <OnboardingHomeSection
          currentSlide={setShowOnboardingHomePage}
        />
      ) : (
        <DialogContent>
          <MainContainer>
            <CloseButton onclickFn={onCloseOnboarding} />
            <SideMenuBar
              menuTitle={"Starter's guide"}
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
    </Dialog>
  );
};

export default TeacherOnboarding;
