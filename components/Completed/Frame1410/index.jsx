import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../TaskCard';
import Frame1308 from '../Frame1308';
function Frame1410(props) {
  const { id, exemplar, groups, className, setPublishActionCompleted } = props;

  const frames = Object.keys(groups).map((key) => {
    const group = groups[key];
    const tasksFrames = group.map((task) => {
      return (
        <TaskCard
          task={task}
          exemplar={exemplar}
          isSelected={task.id === id}
          setPublishActionCompleted={setPublishActionCompleted}
        />
      );
    });
    return (
      <Frame14101 className={`frame-1410 ${className || ''}`} key={key}>
        <Frame1308 date={key}></Frame1308>
        <Frame14101 className="frame-19">{tasksFrames}</Frame14101>
      </Frame14101>
    );
  });
  return <>{frames}</>;
}

const Frame14101 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;

  &.frame-1410.frame-1413-1 {
    width: fit-content;
    align-self: unset;
  }
`;

const Frame1314 = styled.div`
  .frame-1410.frame-1413-1 & {
    width: 350px;
    align-self: unset;
  }
`;

export default Frame1410;
