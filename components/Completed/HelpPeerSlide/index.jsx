import React, { useState } from 'react';
import {
  SliderContainer,
  SlideContainer,
  Header,
  SliderMain,
  Slider,
  SlideDots,
  Dot,
} from './style';
import TaskCard from '../../TaskCard';
import { isMobileView } from '../../ReactiveRender';

const HelpPeerSlide = (props) => {
  const {
    id,
    groups,
    exemplar,
    setPublishActionCompleted,
    onAccept,
    onDecline,
  } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const requireAction = Object.values(groups)
    .flat()
    .filter((task) => task.status === 'AWAITING_APPROVAL');
  const mobileView = isMobileView();

  if (requireAction.length === 0 || currentSlide >= requireAction.length) {
    return <></>;
  }

  const tasksFrames = requireAction.map((task, idx) => {
    if(idx === 0){
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
      )
    } else{
      return null;
    }
  });

  return (
    <SliderContainer>
      <Header>
        <img src="icons/sharePurple.png" />
        <p>Help Your Peers</p>
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
