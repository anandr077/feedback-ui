import React, { useState } from 'react';
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
  MarkedLiked,
  Tag,
  TagText,
  TagsAndTextContainer,
  UserNameBox,
  UserImage,
  TagsContainer,
  TextContainer,
  TextContainer1,
  WordsCount,
  WordsCountContainer,
} from './style';
import WhiteArrowRight from '../../static/img/Arrow-right-purple-24.svg';
import CloseCircle from '../../static/img/closecircle.svg';
import StyledButton from '../../components2/StyledButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { acceptFeedbackRequest, declineFeedbackRequest } from '../../service';
import arrowRight from '../../static/img/arrowright.svg';
import { requestedTime } from '../../utils/requestedTime';
import { toast } from 'react-toastify';
import Toast from '../Toast';
import { Avatar } from '@boringer-avatars/react';
import { useCommunityTasks } from '../state/hooks';

function FeedbackDataComponent({ feedbackData, pathName }) {

  const {
    data: communityTasksData,
    isLoadingdata: isLoadingCommunityTasksData,
    setData: setCommunityTasksData,
    resetData: resetCommunityTasksData,
  } = useCommunityTasks();



  const acceptMutation = useMutation({
    mutationFn: acceptFeedbackRequest,

    onSuccess: (data, variables) => {
      resetCommunityTasksData();
    },
    onSettled: () => {},
  });

  const declineMutation = useMutation({
    mutationFn: declineFeedbackRequest,

    onSuccess: (data, variables) => {
      const submissionId = variables;

     
      const updatedCommunityTasks = communityTasksData.filter(
        (n) => n.submissionId !== submissionId
      );
      setCommunityTasksData(updatedCommunityTasks);
    },

    onSettled: () => {
      toast(<Toast message={'Feedback request dismissed'} />);
    },
  });


  return (
    <>
      {feedbackData.map((text, index) => {
        return (
          <CardContainer>
            <TagsAndTextContainer>
              <UserNameBox>
                <UserImage>
                  <Avatar
                    title={false}
                    size={24}
                    variant="beam"
                    name={text?.authorName}
                    square={false}
                  />
                </UserImage>
                {text?.authorName}
              </UserNameBox>
              <RequestedText>
                {pathName.includes('/feedbackHistory')
                  ? 'Reviewed '
                  : 'Requested '}
                {requestedTime(
                  pathName.includes('/feedbackHistory')
                    ? text.reviewedAt
                    : text.requestedAt
                )}
              </RequestedText>
            </TagsAndTextContainer>
            <TextContainer>
              <DataText>
                {text.title}
              </DataText>
              <WordsCountContainer>
                <TagsContainer>
                  {text.tags.map((tag, index) => (
                    <Tag key={index}>
                      <TagText>{tag.name}</TagText>
                    </Tag>
                  ))}
                </TagsContainer>
                <WordsCount>{text.wordCount} words</WordsCount>
              </WordsCountContainer>
            </TextContainer>
            <ButtonsContainer>
              {pathName.includes('/feedbackHistory') ? (
                <StyledButton
                  URL={text.url}
                  Text="Open"
                  Icon={WhiteArrowRight}
                  ColoredIcon={arrowRight}
                />
              ) : (
                <StyledButton
                  URL={text.url}
                  Text="Give Feedback"
                  Icon={WhiteArrowRight}
                  onAccept={() => acceptMutation.mutate(text.id)}
                  ColoredIcon={arrowRight}
                />
              )}
              {!pathName.includes('/feedbackHistory') && (
                <CrossButton onClick={() => declineMutation.mutate(text.id)}>
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
