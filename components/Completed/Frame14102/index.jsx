import React from 'react';
import Frame1308 from '../Frame1308';
import Cards8 from '../Cards8';
import Cards9 from '../Cards9';
import styled from 'styled-components';

function Frame14102(props) {
  const { frame1308Props, cards8Props } = props;

  return (
    <Frame1410>
      <Frame1308>{frame1308Props.children}</Frame1308>
      <Frame19>
        <Cards8 frame62Props={cards8Props.frame62Props} />
        <Cards9 />
      </Frame19>
    </Frame1410>
  );
}

const Frame1410 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  flex: 1;
`;

export default Frame14102;
