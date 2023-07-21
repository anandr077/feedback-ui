import React from "react";
import Buttons2 from "../Buttons2";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../../styledMixins";


function MarkingCriteriaCard(props) {
  const { title, markingCriteriaId,  deleteMarkingCriteriaHandler} = props;
 

  return (
    <MarkingCriteriaEntry>
      <Title>{title}</Title>
      <Buttons2 markingCriteriaId={markingCriteriaId} deleteMarkingCriteriaHandler={deleteMarkingCriteriaHandler}/>
    </MarkingCriteriaEntry>
  );
}

const MarkingCriteriaEntry = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
border: 1px solid #F3F3F3;
  background: #FFF;
  box-shadow: 0px 4px 22px #2f1a720a;
  border-radius: 16px;
`;

const Title = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default MarkingCriteriaCard;
