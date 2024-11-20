import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import SideMenuBar from '../SideMenuBar';
import TeacherOnboardingMainSection from './TeacherOnboardingMainSection';
import { MainContainer } from './style';
import OnboardingHomeSection from './OnboardingHomeSection';
import { sidebarButtonText, mainSectionContent } from './onboardingContents';
import CloseButton from '../Buttons/CloseButton';


const TeacherOnboarding = () => {
  const [currentMainSection, setCurrentMainSection] = useState(0);
  const [showOnboardingHomePage, setShowOnboardingHomePage] = useState(true);
  const handleMainSectionChange = (curr) => {
    setCurrentMainSection(curr);
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
      }}
    >
      {showOnboardingHomePage ? (
        <OnboardingHomeSection currentSlide={setShowOnboardingHomePage} />
      ) : (
        <DialogContent>
          <MainContainer>
            <CloseButton onclickFn={()=> console.log('hello')}/>
            <SideMenuBar
              menuTitle={"Starter's guide"}
              menuItems={sidebarButtonText}
              currentItem={currentMainSection}
              onClickMenuItem={handleMainSectionChange}
            />
            <TeacherOnboardingMainSection
              content={mainSectionContent[currentMainSection]}
            />
          </MainContainer>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default TeacherOnboarding;
