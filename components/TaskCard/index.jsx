import React from "react";
import StatusBubbleContainer from "../StatusBubblesContainer";
import CardContent from "../CardContent";
import styled from "styled-components";


function TaskCard(props) {
  const { task } = props;

  return (
    <StyledCard>
      <StatusBubbleContainer tags={task.tags} />
      <CardContent task={task} />
    </StyledCard>
  );
}

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;
`;

export default TaskCard;
