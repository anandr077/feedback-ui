import React from 'react';
import {
  MainContainer,
  ModalContentForFocusArea,
  OptionContainer,
  FocusAreaColorBox,
} from './style';

const FocusAreaSelection = ({ optionsToSelect, onClickOption }) => {
  return (
    <MainContainer>
      <ModalContentForFocusArea>
        {optionsToSelect?.map((focusArea, idx) => {
          return (
            <OptionContainer
              key={idx}
              onClick={() => {
                onClickOption(focusArea);
              }}
            >
              <FocusAreaColorBox
                style={{ background: focusArea.color }}
              ></FocusAreaColorBox>
              {focusArea.title}
            </OptionContainer>
          );
        })}
      </ModalContentForFocusArea>
    </MainContainer>
  );
};

export default FocusAreaSelection;
