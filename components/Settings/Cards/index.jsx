import React from "react";
import Buttons2 from "../Buttons2";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../../styledMixins";


function Cards(props) {
  const { systemDefault } = props;

  return (
    <Cards1>
      <SystemDefault>{systemDefault}</SystemDefault>
      <Buttons2 />
    </Cards1>
  );
}

const Cards1 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--wild-sand);
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const SystemDefault = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Cards;
