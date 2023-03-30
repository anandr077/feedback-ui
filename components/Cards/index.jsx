import React from "react";
import Frame6 from "../Frame6";
import Content from "../Content";
import styled from "styled-components";

function TaskCard(props) {
  const { task } = props;

  return (
    <Cards1>
      <Frame6 tags={task.tags} />
      <Content task={task} />
    </Cards1>
  );
}

const Cards1 = styled.article`
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
