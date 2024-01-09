import React from 'react';
import {
  ButtonsContainer,
  CardContainer,
  CardContainer1,
  CorrectIcon,
  CrossButton,
  CrossIcon,
  DataText,
  DismissText,
  FeedbackButton,
  FeedbackButtonArrow,
  FeedbackButtonText,
  Frame1333,
  Frame1333Para,
  Frame1333Star,
  IconContainer,
  IconsContainer,
  ParaContainer,
  RequestedText,
  Tag,
  TagText,
  TagsAndTextContainer,
  TagsContainer,
  TextContainer,
  TextContainer1,
  WordsCount,
  WordsCountContainer,
} from './style';
import WhiteArrowleft from '../../static/img/white-arrowleft.png';
import CloseCircle from '../../static/img/closecircle.png';
import StarFilled from '../../static/img/Star-filled.png';
import StarEmpty from '../../static/img/Star-empty.png';

function FeedbackDataComponent({ feedbackData, pathName }) {
  return (
    <>
      {feedbackData.map((text, index) => (
        <CardContainer>
          <TagsAndTextContainer>
            <TagsContainer>
              <Tag>
                <TagText>Year 12</TagText>
              </Tag>
              <Tag>
                <TagText>NSW</TagText>
              </Tag>
              <Tag>
                <TagText>English</TagText>
              </Tag>
              <Tag>
                <TagText>Imaginative</TagText>
              </Tag>
            </TagsContainer>
            <RequestedText>
              {pathName.includes('/feedbackHistory') ? 'Reviewed' : 'Requested'}
              1 hour ago
            </RequestedText>
          </TagsAndTextContainer>
          <TextContainer>
            <DataText>{text}</DataText>
            <WordsCountContainer>
              <WordsCount>100 words</WordsCount>
              {/* {pathName.includes('/feedbackHistory') && (
                <Frame1333>
                  <Frame1333Para>Feedback Rating:</Frame1333Para>
                  <Frame1333Star src={StarFilled} />
                  <Frame1333Star src={StarFilled} />
                  <Frame1333Star src={StarFilled} />
                  <Frame1333Star src={StarFilled} />
                  <Frame1333Star src={StarEmpty} />
                </Frame1333>
              )} */}
            </WordsCountContainer>
          </TextContainer>
          <ButtonsContainer>
            {pathName.includes('/feedbackHistory') ? (
              <FeedbackButton>
                <FeedbackButtonText>View Details</FeedbackButtonText>
                <FeedbackButtonArrow src={WhiteArrowleft} />
              </FeedbackButton>
            ) : (
              <FeedbackButton>
                <FeedbackButtonText>Give Feedback</FeedbackButtonText>
                <FeedbackButtonArrow src={WhiteArrowleft} />
              </FeedbackButton>
            )}
            {!pathName.includes('/feedbackHistory') && (
              <CrossButton>
                <FeedbackButtonArrow src={CloseCircle} />
                <DismissText>Dismiss</DismissText>
              </CrossButton>
            )}
          </ButtonsContainer>
        </CardContainer>
      ))}
    </>
  );
}

export default FeedbackDataComponent;
