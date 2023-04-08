import React from "react";
import TaskCard from "../TaskCard";
import styled from "styled-components";

function TaskCardContainer(props) {
  
  const { allTasks } = props;
  console.log(allTasks)
  const cards = allTasks.map((task) => {
    return <TaskCard task={task} />;
  });
  return <CardContainer>{cards}</CardContainer>;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 20px;
  overflow-y: scroll;
  max-height: 480px;
`;

export default TaskCardContainer;
