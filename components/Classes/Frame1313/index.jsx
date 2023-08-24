import React from 'react';
import Frame1312 from '../Frame1312';
import styled from 'styled-components';

function Frame1313(props) {
  const { frame1312Props } = props;

  return (
    <Frame13131>
      <Frame13121>
        <Frame1312
          boyleJonny={frame1312Props.boyleJonny}
          arrowdown2={frame1312Props.arrowdown2}
        />
      </Frame13121>
    </Frame13131>
  );
}

const Frame13131 = styled.div`
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
`;

const Frame13121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

export default Frame1313;
