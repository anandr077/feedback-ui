import React from 'react';
import Frame1208 from '../Frame1208';
import styled from 'styled-components';

function Frame1407(props) {
  const { frame1208Props } = props;

  return (
    <Frame14071>
      <Frame1208 down={frame1208Props.down} />
    </Frame14071>
  );
}

const Frame14071 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame14072 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame14073 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

export default Frame1407;
