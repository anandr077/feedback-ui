import React from "react";
import Frame65 from "../Frame65";
import Content2 from "../Content2";
import styled from "styled-components";

function Cards10(props) {
  const { frame65Props, content2Props } = props;

  return (
    <Cards>
      <Frame65
        statusBubbles21Props={frame65Props.statusBubbles21Props}
        statusBubbles22Props={frame65Props.statusBubbles22Props}
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

export default Cards10;
