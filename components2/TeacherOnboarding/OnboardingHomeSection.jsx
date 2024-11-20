import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const OnboardingHomeSection = ({currentSlide}) => {
  return (
    <DialogContent>
      Hello world
      <button onClick={() => currentSlide(false)}>Get started</button>
    </DialogContent>
  );
};

export default OnboardingHomeSection;
