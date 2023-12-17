import React from 'react';
import TaskCard from '../TaskCard';
import styled from 'styled-components';

function TaskCardContainer(props) {
  const {
    allTasks,
    exemplar,
    setPublishActionCompleted,
    showDeletePopuphandler,
    showDateExtendPopuphandler,
  } = props;
  const cards = allTasks.map((task) => {
    return (
      <a href={task.link}>
        <TaskCard
          task={task}
          exemplar={exemplar}
          setPublishActionCompleted={setPublishActionCompleted}
          showDeletePopuphandler={showDeletePopuphandler}
          showDateExtendPopuphandler={showDateExtendPopuphandler}
        />
      </a>
    );
  });
  return exemplar ? (
    <ExemplerCardContainer>{cards}</ExemplerCardContainer>
  ) : (
    <CardContainer>{cards}</CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  padding: 0px 0px 10px 0px;
  // background-color: red;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  @media (max-width: 1024px) {
    max-height: 480px;
  }
`;
const ExemplerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  max-height: 615px;
  padding: 0px 0px 10px 0px;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  // background-color: red;
`;
export default TaskCardContainer;
