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
  const { id, groups, exemplar, setPublishActionCompleted } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateSlide, setAnimateSlide] = useState(false);
  const requireAction = Object.values(groups)
    .flat()
    .filter((task) => task.status === 'AWAITING_APPROVAL');
  const mobileView = isMobileView();

  const handleSlideChange = () => {
    setAnimateSlide(true);

    setTimeout(() => {
      const nextSlideIndex = currentSlide + 1;
      if (nextSlideIndex < requireAction.length) {
        setCurrentSlide(nextSlideIndex);
      } else {
        setCurrentSlide(requireAction.length);
      }
      setAnimateSlide(false);
    }, 300);
  };

  if (requireAction.length === 0 || currentSlide >= requireAction.length) {
    return <></>;
  }

  const tasksFrames = requireAction.map((task, idx) => {
    return (
      <SlideContainer key={task.id}>
        {idx === currentSlide && idx < requireAction.length - 1 && (
          <SecondSlide key={`next_${requireAction[idx + 1].id}`}>
            <div
              style={{
                width: '100%',
                height: '100%',
                top: animateSlide && '30px',
              }}
            >
              <TaskCard
                key={requireAction[idx + 1].id}
                task={requireAction[idx + 1]}
                exemplar={exemplar}
                isSelected={requireAction[idx + 1].id === props.id}
                setPublishActionCompleted={setPublishActionCompleted}
              />
            </div>
          </SecondSlide>
        )}
        <FirstSlide
          animate={animateSlide}
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
              onSlideChange={handleSlideChange}
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
            .slice(0, -1)
            .map((task, index) => (
              <Dot key={task.id} isActive={index === currentSlide} />
            ))}
      </SlideDots>
    </SliderContainer>
  );
};

export default HelpPeerSlide;
