import React from 'react';
import { MainContainer, TopSection, Button } from './style';
import ExclamationIcon from '../../../static/img/exclamation.svg';
import PurpleExclamationIcon from '../../../static/img/purpleExclamationIcon.svg';
import CommentsIcon from '../../../static/img/gray_message_2.svg';
import PurpleCommentsIcon from '../../../static/img/purplemessage.svg';
import ClockIcon from '../../../static/img/clock_2.svg';

const FeedbackRightSidebar = ({ handleClick, openRightPanel }) => {
  return (
    <MainContainer>
      <TopSection>
        <Button isActive={openRightPanel === 'tab1'} onClick={() => handleClick('tab1')}>
          <img src={openRightPanel === 'tab1' ? PurpleExclamationIcon : ExclamationIcon} />
        </Button>
        <Button isActive={openRightPanel === 'tab2'} onClick={() => handleClick('tab2')}>
          <img src={openRightPanel === 'tab2' ? PurpleCommentsIcon : CommentsIcon} />
        </Button>
        <Button isActive={openRightPanel === 'tab3'} onClick={() => handleClick('tab3')}>
          <img src={ClockIcon} />
        </Button>
      </TopSection>
    </MainContainer>
  );
};

export default FeedbackRightSidebar;
