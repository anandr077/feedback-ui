import React, { useState } from 'react';
import { SliderContainer, Header, SliderMain, Slider, Slides } from './style';
import TaskCard from '../../TaskCard';

const HelpPeerSlide = (props) => {
  const { id, groups, exemplar, setPublishActionCompleted } = props;

  const requireAction = Object.values(groups)
    .flat()
    .filter((task) => task.status === 'AWAITING_APPROVAL');

  const tasksFrames = requireAction.map((task, idx) => (
    <Slides>
      <TaskCard
        key={task.id}
        task={task}
        exemplar={exemplar}
        isSelected={task.id === props.id}
        setPublishActionCompleted={setPublishActionCompleted}
      />
    </Slides>
  ));

  return (
    <SliderContainer>
      <Header>
        <img src="icons/sharePurple.png" />
        <p>Help Your Peers</p>
        <img src="icons/help.png" />
      </Header>
      <SliderMain>
        <Slider>{tasksFrames}</Slider>
      </SliderMain>
    </SliderContainer>
  );
};

export default HelpPeerSlide;
