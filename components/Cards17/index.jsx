import React from "react";
import Frame6 from "../Frame6";
import Content4 from "../Content4";
import styled from "styled-components";


function Cards17(props) {
  const { frame6Props, content4Props } = props;

  return (
    <Cards>
      <Frame6
        statusBubbles2Props={frame6Props.statusBubbles2Props}
        statusBubbles3Props={frame6Props.statusBubbles3Props}
      />
      <Content4 clock={content4Props.clock} dueOn2April2023={content4Props.dueOn2April2023} />
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

export default Cards17;
