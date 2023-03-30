import React from "react";
import Frame6 from "../Frame6";
import Content2 from "../Content2";
import styled from "styled-components";

function Cards6(props) {
  const { frame6Props, content2Props } = props;

  return (
    <Cards>
      <Frame6
        statusBubbles2Props={frame6Props.statusBubbles2Props}
        statusBubbles3Props={frame6Props.statusBubbles3Props}
      />
      <Content2 dueOn2April2023={content2Props.dueOn2April2023} />
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
  border-color: var(--corn);
  box-shadow: 0px 4px 16px #f4bf061a;
`;

export default Cards6;
