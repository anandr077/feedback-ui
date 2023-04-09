import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { IbmplexsansNormalWhite16px } from "../styledMixins";

function Cards(props) {
  const { title, link } = props;
  return (
    <Cards1>
      <Content>
        <DarrellInstructor>
          <span className="ibmplexsans-normal-shark-16px">
            Darrell(Instructor) from{" "}
          </span>
          <span className="ibmplexsans-normal-electric-violet-16px">
            C programming mastery
          </span>
          <span className="ibmplexsans-normal-shark-16px"> {title} </span>
        </DarrellInstructor>
        <a href={link}>
          <Buttons />
        </a>
      </Content>
    </Cards1>
  );
}

const Cards1 = styled.div`
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

const DarrellInstructor = styled.p`
  ${IbmplexsansNormalWhite16px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Cards;
