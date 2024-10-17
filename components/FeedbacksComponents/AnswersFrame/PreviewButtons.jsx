import React from 'react';
import {} from './previewButtonsStyle.js';
import { ButtonsContainer } from './style.jsx';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn/index.jsx';
import NoBackgroundAndBorderBtn from '../../../components2/Buttons/NoBackground&BorderBtn/index.jsx';
import arrowLeft from '../../../static/img/arrowleftgray.svg'


const PreviewButtons = ({handleGoBack, onclick}) => {
  return (
    <ButtonsContainer>
      <NoBackgroundAndBorderBtn text={'Go back'} leftIcon={arrowLeft} onclick={()=>handleGoBack("2")}/>
      <RoundedBorderSubmitBtn text={'Save & Convert to Text'} onClickFn={onclick}/>
    </ButtonsContainer>
  );
};

export default PreviewButtons;
