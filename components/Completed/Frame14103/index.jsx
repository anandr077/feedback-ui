import React from 'react';
import styled from 'styled-components';
import TaskCard from '../../TaskCard';
import Frame1308 from '../Frame1308';

function Frame14103(props) {
  const { id, groups, exemplar, setPublishActionCompleted } = props;

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
      <Frame1410>
        <Frame1308 date={key}></Frame1308>
        <Frame19>
          <>{tasksFrames}</>
        </Frame19>
      </Frame1410>
    );
  });

  return <>{frames}</>;
}

const Frame1410 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame14101 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame191 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

export default Frame14103;
