import React from 'react';
import Buttons from '../Buttons';
import Buttons2 from '../Buttons2';
import styled from 'styled-components';

function ReviewsFrame1317(props) {
  const { buttonsProps, buttons2Props } = props;

  return (
    <Frame13171>
      <Buttons2
        button={buttons2Props.button}
        arrowright={buttons2Props.arrowright}
      />
    </Frame13171>
  );
}

const Frame13171 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame13172 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame13173 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame13174 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

export default ReviewsFrame1317;
