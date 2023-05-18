import React from "react";
import Frame62 from "../Frame62";
import Content4 from "../Content4";
import styled from "styled-components";

function Cards10(props) {
  const { task } = props;
  const tagFrames = task.tags.map((tag) => {
    <Frame62 statusBubblesProps={tag} />;
  });
  return (
    <Cards>
      {tagFrames}
      <a href={task.link}>
        <Content4 assignmentTitle={task.title} classTitle={task.classTitle} />
      </a>
    </Cards>
  );
}

const Cards = styled.article`
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
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

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
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

export default Cards10;
