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
import StarFilled from '../../static/img/Star-filled.png';
import StarEmpty from '../../static/img/Star-empty.png';
import Liked from '../../static/img/like.svg';
import StyledButton from '../../components2/StyledButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { acceptFeedbackRequest, declineFeedbackRequest } from '../../service';
import arrowRight from '../../static/img/arrowright.svg';
import { requestedTime } from '../../utils/requestedTime';
import { toast } from 'react-toastify';
import Toast from '../Toast';

function FeedbackDataComponent({ feedbackData, pathName }) {
  const [showFullText, setShowFullText] = useState(false);

  const queryClient = useQueryClient();
  const acceptMutation = useMutation({
    mutationFn: acceptFeedbackRequest,

    onSuccess: (data, variables) => {
      queryClient.refetchQueries({ queryKey: ['communityTasks'] });
      queryClient.refetchQueries({
        queryKey: ['GiveFeedbackCompletedTasks'],
      });
    },
    onSettled: () => {},
  });

  const declineMutation = useMutation({
    mutationFn: declineFeedbackRequest,

    onSuccess: (data, variables) => {
      const submissionId = variables;

      const previousCommunityTasks = queryClient.getQueryData([
        'communityTasks',
      ]);
      const updatedCommunityTasks = previousCommunityTasks.filter(
        (n) => n.submissionId !== submissionId
      );
      queryClient.setQueryData(['communityTasks'], updatedCommunityTasks);
    },

    onSettled: () => {
      queryClient.refetchQueries({ queryKey: ['communityTasks'] });
      
        toast(
          <Toast
            message={'Feedback request dismissed'}
           
          />
        );
    },
  });

  const showMoreText = (title) => {
    if (showFullText) {
      return title;
    } else {
      return title.length > 120 ? title.slice(0, 120) + '...' : title;
    }
  };

  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <>
      {feedbackData.map((text, index) => {
        return (
          <CardContainer>
            <TagsAndTextContainer>
              <UserNameBox>
                <UserImage></UserImage>
                Username
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
                {showMoreText(text.title)} {' '} 
                <span onClick={toggleShowText}>
                  {text.title.length > 120 && (!showFullText ? 'Show more' : 'Show less')}
                </span>
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
                {/* <MarkedLiked>
                  <img src={Liked} />
                  You marked this feedback as helpful
                </MarkedLiked> */}
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
