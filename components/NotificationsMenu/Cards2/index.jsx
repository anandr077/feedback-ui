import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../styledMixins";

function Cards2() {
  return (
    <Cards>
      <Content>
        <YouHaveReceivedSo>
          You have received some feedback on quiz assignment from Theresa.
        </YouHaveReceivedSo>
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

const YouHaveReceivedSo = styled.p`
  ${IbmplexsansNormalShark16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Cards2;
