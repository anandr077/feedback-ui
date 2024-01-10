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
import WhiteArrowleft from '../../static/img/arrowright-White.svg';
import CloseCircle from '../../static/img/closecircle.svg';
import StarFilled from '../../static/img/Star-filled.png';
import StarEmpty from '../../static/img/Star-empty.png';
import StyledButton from '../../components2/StyledButton';

function FeedbackDataComponent({ feedbackData, pathName }) {
  return (
    <>
      {feedbackData.map((text, index) => {
        const requestedAtTime = new Date(text.requestedAt);
        const currentTime = new Date();
        const durationInMilliseconds = currentTime - requestedAtTime;

        // Convert the duration to days, hours, and minutes
        const days = Math.floor(durationInMilliseconds / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (durationInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (durationInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
        );

        let durationText = '';

        if (days > 0) {
          durationText = `${days} days ago`;
        } else if (hours > 0) {
          durationText = `${hours} hours ago`;
        } else if (minutes > 0) {
          durationText = `${minutes} minutes ago`;
        } else {
          durationText = 'Just now';
        }
        return (
          <CardContainer>
            <TagsAndTextContainer>
              <TagsContainer>
                {text.tags.map((tag, index) => (
                  <Tag key={index}>
                    <TagText>{tag.name}</TagText>
                  </Tag>
                ))}
              </TagsContainer>
              <RequestedText>
                {pathName.includes('/feedbackHistory')
                  ? 'Reviewed '
                  : 'Requested '}
                {durationText}
              </RequestedText>
            </TagsAndTextContainer>
            <TextContainer>
              <DataText>{text.title}</DataText>
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
                <StyledButton
                  URL={text.url}
                  Text="View Details"
                  Icon={WhiteArrowleft}
                />
              ) : (
                <StyledButton
                  URL={text.url}
                  Text="Give Feedback"
                  Icon={WhiteArrowleft}
                />
              )}
              {!pathName.includes('/feedbackHistory') && (
                <CrossButton>
                  <FeedbackButtonArrow src={CloseCircle} />
                  <DismissText>Dismiss</DismissText>
                </CrossButton>
              )}
            </ButtonsContainer>
          </CardContainer>
        );
      })}
    </>
  );
}

export default FeedbackDataComponent;
