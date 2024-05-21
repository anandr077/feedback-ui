import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
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
  const location = useLocation();

  const cards = allTasks.map((task) => {
    const link = location.pathname.includes('classes') ? null : task.link;
    return (
      <a href={link} style={{ width: '100%' }}>
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
  width: 100%;
  align-items: center;
  gap: 11px;
  padding: 0px 0px 10px 0px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
  @media (max-width: 1024px) {
    max-height: 480px;
  }
  padding: 20px;
`;
const ExemplerCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
  padding: 0px 0px 10px 0px;
`;
export default TaskCardContainer;
