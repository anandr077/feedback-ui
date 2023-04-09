import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { IbmplexsansNormalWhite16px } from "../styledMixins";


function Cards3() {
  return (
    <Cards>
      <Content>
        <YouHaveReceivedA>
          <span className="ibmplexsans-normal-shark-16px">You have received a new theory assignment on </span>
          <span className="ibmplexsans-normal-electric-violet-16px">fundamentals of thermal physics</span>
        </YouHaveReceivedA>
        <Buttons />
      </Content>
    </Cards>
  );
}

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const YouHaveReceivedA = styled.p`
  ${IbmplexsansNormalWhite16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Cards3;
