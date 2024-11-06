import React from 'react';
import { ButtonsContainer, ConvertingText } from './style.jsx';
import RoundedBorderSubmitBtn from '../../../components2/Buttons/RoundedBorderSubmitBtn/index.jsx';
import NoBackgroundAndBorderBtn from '../../../components2/Buttons/NoBackground&BorderBtn/index.jsx';
import arrowLeft from '../../../static/img/arrowleftgray.svg';

const PreviewButtons = ({
  handleGoBack,
  handleConvertToText,
  isUpdatingHandWrittenFiles,
}) => {
  return (
    <ButtonsContainer>
      <NoBackgroundAndBorderBtn
        text={'Go back'}
        leftIcon={arrowLeft}
        onclick={() => handleGoBack()}
        isDisabled={isUpdatingHandWrittenFiles}
      />
      {isUpdatingHandWrittenFiles ? (
        <ConvertingText>
            File is uploading
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
        </ConvertingText>
      ) : (
        <RoundedBorderSubmitBtn
          text={'Save & Convert to Text'}
          onClickFn={handleConvertToText}
        />
      )}
    </ButtonsContainer>
  );
};

export default PreviewButtons;
