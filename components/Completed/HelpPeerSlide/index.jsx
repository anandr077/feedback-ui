import React, { useState } from 'react';
import {
  SliderContainer,
  SlideContainer,
  Header,
  SliderMain,
  Slider,
  SlideDots,
  Dot,
  Title,
} from './style';
import TaskCard from '../../TaskCard';
import { isMobileView } from '../../ReactiveRender';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import questionMark from '../../../static/img/question-mark.svg';

const HelpPeerSlide = (props) => {
  const {
    id,
    groups,
    exemplar,
    setPublishActionCompleted,
    onAccept,
    onDecline,
    setShowHelpPeerSlide,
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const requireAction = Object.values(groups)
    .flat()
    .filter((task) => task.status === 'AWAITING_APPROVAL');
  const mobileView = isMobileView();

  if (requireAction.length === 0 || currentSlide >= requireAction.length) {
    setShowHelpPeerSlide(false);
    return <></>;
  }

  const tasksFrames = requireAction.map((task, idx) => {
    if (idx === 0) {
      return (
        <SlideContainer key={task.id}>
          <TaskCard
            key={task.id}
            task={task}
            exemplar={exemplar}
            isSelected={task.id === props.id}
            setPublishActionCompleted={setPublishActionCompleted}
            onExemplarAccept={onAccept}
            onExemplarDecline={onDecline}
          />
        </SlideContainer>
      );
    } else {
      return null;
    }
  });

  return (
    <SliderContainer>
      <Header>
        <img src="icons/sharePurple.png" width="24px" />
        <Title>
          Help Your Peers
          <QuestionTooltip text={''} img={questionMark} />
        </Title>
      </Header>
      <SliderMain mobileView={mobileView}>
        <Slider>{tasksFrames}</Slider>
      </SliderMain>
      <SlideDots mobileView={mobileView}>
        {currentSlide < requireAction.length - 1 &&
          requireAction
            .slice(0, 5)
            .map((task, index) => (
              <Dot key={task.id} isActive={index === currentSlide} />
            ))}
      </SlideDots>
    </SliderContainer>
  );
};

export default HelpPeerSlide;
