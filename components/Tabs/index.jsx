import React from "react";
import styled from "styled-components";
import { IbmplexsansSemiBoldWhite16px } from "../../styledMixins";


function Tabs() {
  return (
    <Tabs1>
      <ToDo>Outstanding</ToDo>
    </Tabs1>
  );
}

const Tabs1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 16px 5px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 16px;
`;

const ToDo = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Tabs2 = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 16px 5px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 16px;
`;

const ToDo1 = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Tabs3 = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 16px 5px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 16px;
`;

const ToDo2 = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Tabs;
