import React, { useState } from 'react';
import {
  SliderContainer,
  SlideContainer,
  Header,
  SliderMain,
  Slider,
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  SlideDots,
  Dot,
} from './style';
import TaskCard from '../../TaskCard';
import { isMobileView } from '../../ReactiveRender';

const HelpPeerSlide = (props) => {
  const { id, groups, exemplar, setPublishActionCompleted, onAccept, onDecline } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const requireAction = Object.values(groups)
    .flat()
    .filter((task) => task.status === 'AWAITING_APPROVAL');
  const mobileView = isMobileView();

  

  if (requireAction.length === 0 || currentSlide >= requireAction.length) {
    return <></>;
  }

  const nextTask = requireAction.length > currentSlide + 1 ? requireAction[currentSlide + 1] : null;

  const tasksFrames = requireAction.map((task, idx) => {
    return (
      <SlideContainer key={task.id}>
        {nextTask  && (
          <SecondSlide key={`${nextTask.id}`}>
            <div
              style={{
                width: '100%',
                height: '100%'
              }}
            >
              <TaskCard
                key={nextTask.id}
                task={nextTask}
                exemplar={exemplar}
                isSelected={nextTask.id === props.id}
                setPublishActionCompleted={setPublishActionCompleted}
                onAccept={onAccept}
                onDecline={onDecline}
              />
            </div>
          </SecondSlide>
        )}
        <FirstSlide
          style={{
            visibility: 'visible',
          }}
        >
          <div style={{ width: '100%', height: '100%' }}>
            <TaskCard
              key={task.id}
              task={task}
              exemplar={exemplar}
              isSelected={task.id === props.id}
              setPublishActionCompleted={setPublishActionCompleted}
              onAccept={onAccept}
              onDecline={onDecline}
            />
          </div>
        </FirstSlide>
        <ThirdSlide></ThirdSlide>
      </SlideContainer>
    );
  });

  return (
    <SliderContainer>
      <Header>
        <img src="icons/sharePurple.png" />
        <p>Help Your Peers</p>
        <img src="icons/help.png" />
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
