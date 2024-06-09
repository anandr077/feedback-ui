import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../TaskCard';
import Frame1308 from '../Frame1308';

function Frame14103(props) {
  const {
    id,
    groups,
    exemplar,
    setPublishActionCompleted,
    onAddToBookmark,
    onRemoveFromBookmark,
  } = props;

  const frames = Object.keys(groups).map((key) => {
    const group = groups[key];
    const tasksFrames = group
      .filter((task) => task.status === 'PUBLISHED')
      .map((task) => {
        return (
          <TaskCard
            task={task}
            exemplar={exemplar}
            isSelected={task.id === id}
            setPublishActionCompleted={setPublishActionCompleted}
            showAddToCard={true}
            onAddToBookmark={onAddToBookmark}
            onRemoveFromBookmark={onRemoveFromBookmark}
          />
        );
      });
    return (
      <>
        {tasksFrames.length > 0 && (
          <Frame19>
            <>{tasksFrames}</>
          </Frame19>
        )}
      </>
    );
  });

  return <>{frames}</>;
}

const Frame1410 = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  position: relative;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
`;

export default Frame14103;
