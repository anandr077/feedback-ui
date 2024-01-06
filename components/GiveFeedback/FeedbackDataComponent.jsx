import React from 'react';
import {
  CardContainer,
  CardContainer1,
  CorrectIcon,
  CrossIcon,
  Frame1333,
  Frame1333Para,
  Frame1333Star,
  IconContainer,
  IconsContainer,
  ParaContainer,
  TextContainer,
  TextContainer1,
} from './style';

function FeedbackDataComponent({ feedbackData, pathName }) {
  return (
    <>
      {feedbackData.map((text, index) =>
        pathName.includes('/feedbackHistory') ? (
          <CardContainer>
            <TextContainer>{text}</TextContainer>
            <ParaContainer>
              Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. ...
            </ParaContainer>
            {/* <Frame1333>
              <Frame1333Para>Feedback Rating:</Frame1333Para>
              <Frame1333Star src="/img/Star-filled.png" />
              <Frame1333Star src="/img/Star-filled.png" />
              <Frame1333Star src="/img/Star-filled.png" />
              <Frame1333Star src="/img/Star-filled.png" />
              <Frame1333Star src="/img/Star-empty.png" />
            </Frame1333> */}
          </CardContainer>
        ) : (
          <CardContainer1>
            <TextContainer1>{text}</TextContainer1>
            <IconsContainer>
              <IconContainer>
                <CorrectIcon src="/icons/correct.svg" alt="" />
              </IconContainer>
              <IconContainer>
                <CrossIcon src="/icons/wrong.svg" alt="" />
              </IconContainer>
            </IconsContainer>
          </CardContainer1>
        )
      )}
    </>
  );
}

export default FeedbackDataComponent;
