import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansMediumTrendyPink14px,
  IbmplexsansMediumShark36px,
} from '../styledMixins';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Frame12842(props) {
  const { title, count } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push('tasks');
  };
  return (
    <TaskAnchor href="/#/tasks" onClick={handleClick}>
      <Frame1284>
        <Drafts>{title}</Drafts>
        <Number>{count}</Number>
      </Frame1284>
    </TaskAnchor>
  );
}

const TaskAnchor = styled.a`
  color: #7f6598;

  &:hover {
    color: #7303e1;
  }
`;

const Frame1284 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  position: relative;
  cursor: pointer;
`;

const Drafts = styled.div`
  ${IbmplexsansMediumTrendyPink14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12841 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Drafts1 = styled.div`
  ${IbmplexsansMediumTrendyPink14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number1 = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12843 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Drafts2 = styled.div`
  ${IbmplexsansMediumTrendyPink14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number2 = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame12844 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
`;

const Drafts3 = styled.div`
  ${IbmplexsansMediumTrendyPink14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.4px;
  line-height: normal;
`;

const Number3 = styled.div`
  ${IbmplexsansMediumShark36px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame12842;
