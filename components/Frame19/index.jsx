import React from "react";
import TaskCard from "../Cards";
import Cards2 from "../Cards2";
import Cards3 from "../Cards3";
import Cards4 from "../Cards4";
import Cards5 from "../Cards5";
import styled from "styled-components";


function TaskCardContainer(props) {
  const { allTasks, className, cardsProps } = props;
  const cards = allTasks.map((task) => {
    console.log(task)
    return <TaskCard task = {task}  />
  });
  return (
    <Frame191 className={`frame-19 ${className || ""}`}>
      {cards}
    </Frame191>
  );
}

const Frame191 = styled.div`
  display: flex;
  position: relative;
  margin-top: 21px;
  flex-direction: column;
  width: 350px;
  align-items: flex-start;
  gap: 20px;

  &.frame-19.frame-19-1 {
    align-self: stretch;
    margin-top: unset;
    width: unset;
  }
`;

export default TaskCardContainer;
