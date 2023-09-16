import React from 'react';
import styled from 'styled-components';
import { IbmplexsansSemiBoldWhite16px } from '../../styledMixins';
import styled from 'styled-components';
import { IbmplexsansSemiBoldBlack16px } from '../../styledMixins';

function Tabs(props) {
  const { text, isSelected, onClickFn } = props;
  if (isSelected) {
    return (
      <Tabs1 onClick={onClickFn}>
        <ToDo>{text}</ToDo>
      </Tabs1>
    );
  }
  return (
    <UnselectedTabs onClick={onClickFn}>
      <UnselectedToDo>{text}</UnselectedToDo>
    </UnselectedTabs>
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
  cursor: pointer;
`;

const UnselectedTabs = styled.article`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 16px 5px;
  position: relative;
  border-radius: 16px;
  cursor: pointer;

  &.tabs-1.tabs-3 {
    margin-left: -1px;
  }

  &.tabs-1.tabs-4 {
    margin-left: -1px;
  }
`;
const ToDo = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const UnselectedToDo = styled.div`
  ${IbmplexsansSemiBoldBlack16px}
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
