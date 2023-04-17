import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import { IbmplexsansNormalWhite16px } from "../styledMixins";

function Cards(props) {
  const { title, link, emptyCard } = props;

  return (
    <>
      {emptyCard ? (
        <Cards2>
          <Content>
            <DarrellInstructor>
              <span className="ibmplexsans-normal-shark-16px">
                {" "}
                No New Notifications{" "}
              </span>
            </DarrellInstructor>
          </Content>
        </Cards2>
      ) : (
        <Cards1>
          <Content>
            <DarrellInstructor>
              <span className="ibmplexsans-normal-shark-16px"> {title} </span>
            </DarrellInstructor>
            <a href={link}>
              <Buttons />
            </a>
          </Content>
        </Cards1>
      )}
    </>
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
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
  border: 1px solid;
  border-color: var(--electric-violet);
`;
const Cards2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
  border: 1px solid;
  border-color: var(--electric-violet);
  height: 100px;
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
