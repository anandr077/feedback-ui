import React from 'react';
import Frame1407 from '../Frame1407';
import Frame1284 from '../Frame1284';
import Frame1283 from '../Frame1283';
import Frame1282 from '../Frame1282';
import styled from 'styled-components';
import { IbmplexsansMediumShark20px } from '../styledMixins';

function Frame13124(props) {
  const { clazz } = props;

  return (
    <a href={'#classes/' + clazz.id}>
      <Frame1312>
        <Frame13121>
          <Frame13122>
            <X12ENGADV3>{clazz.title}</X12ENGADV3>
          </Frame13122>
          <Line17 src={'/img/line-17-22@2x.png'} alt="Line 17" />
          <Frame1307>
            <Frame1284 number={clazz.students?.length} />
            <Frame1283 number="-" />
            <Frame1282 number="-" />
          </Frame1307>
        </Frame13121>
      </Frame1312>
    </a>
  );
}

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
  &:hover {
    background: #f9f5ff;
    border: 1px solid #7200e0;
    box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  }
`;

const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame13122 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const X12ENGADV3 = styled.div`
  ${IbmplexsansMediumShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const Frame1307 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  position: relative;
  align-self: stretch;
  padding: 0px 20px;
`;

export default Frame13124;
