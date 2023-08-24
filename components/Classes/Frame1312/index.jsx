import React from 'react';
import styled from 'styled-components';
import { IbmplexsansMediumShark20px } from '../styledMixins';

function Frame1312(props) {
  const { boyleJonny, arrowdown2 } = props;

  return (
    <Frame13121>
      <BoyleJonny>{boyleJonny}</BoyleJonny>
      <Arrowdown2 src={arrowdown2} alt="arrowdown2" />
    </Frame13121>
  );
}

const Frame13121 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const BoyleJonny = styled.div`
  ${IbmplexsansMediumShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.5px;
  line-height: normal;
`;

const Arrowdown2 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default Frame1312;
