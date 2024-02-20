import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../TaskCard';
import Frame1308 from '../Frame1308';
function Frame1410(props) {
  const { id, exemplar, groups, className, setPublishActionCompleted, onAddToBookmark, onRemoveFromBookmark } = props;

  const frames = Object.keys(groups).map((key) => {
    const group = groups[key];
    const tasksFrames = group.filter((task) => task.status === 'PUBLISHED').map((task) => {
      return (
        <TaskCard
          task={task}
          exemplar={exemplar}
          isSelected={task.id === id}
          setPublishActionCompleted={setPublishActionCompleted}
          showAddToCard={true}
          onAddToBookmark = {onAddToBookmark}
          onRemoveFromBookmark={onRemoveFromBookmark}
        />
      );
    });
    return (
      <Frame14101 className={`frame-1410 ${className || ''}`} key={key}>
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


export default Frame1410;
