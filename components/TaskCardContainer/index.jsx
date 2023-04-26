import React from "react";
import TaskCard from "../TaskCard";
import styled from "styled-components";

function TaskCardContainer(props) {
  const { allTasks, exempler } = props;
  const cards = allTasks.map((task) => {
    return (
      <a href={task.link}>
        <TaskCard task={task} exempler={exempler} />
      </a>
    );
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
  padding: 0px 0px 10px 0px;
`;
export default TaskCardContainer;
