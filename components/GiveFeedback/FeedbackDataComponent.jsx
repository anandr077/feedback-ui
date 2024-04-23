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
import WhiteArrowRight from '../../static/img/arrowright-White.svg';
import CloseCircle from '../../static/img/closecircle.svg';
import StarFilled from '../../static/img/Star-filled.png';
import StarEmpty from '../../static/img/Star-empty.png';
import StyledButton from '../../components2/StyledButton';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { acceptFeedbackRequest, declineFeedbackRequest } from '../../service';
import arrowRight from '../../static/img/arrowright.svg';
import { requestedTime } from '../../utils/requestedTime';
import SnackbarContext from '../SnackbarContext';

function FeedbackDataComponent({ feedbackData, pathName }) {
  const { showSnackbar } = React.useContext(SnackbarContext);

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
      console.log('data', data);
      console.log('variables', variables);
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
      showSnackbar('Feedback request dismissed');
    },
  });
  return (
    <>
      {feedbackData.map((text, index) => {
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
                {requestedTime(
                  pathName.includes('/feedbackHistory')
                    ? text.reviewedAt
                    : text.requestedAt
                )}
              </RequestedText>
            </TagsAndTextContainer>
            <TextContainer>
              <DataText>{text.title}</DataText>
              <WordsCountContainer>
                <WordsCount>{text.wordCount} words</WordsCount>
              </WordsCountContainer>
            </TextContainer>
            <ButtonsContainer>
              {pathName.includes('/feedbackHistory') ? (
                <StyledButton
                  URL={text.url}
                  Text="View Feedback"
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
