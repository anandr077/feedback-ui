import React from "react";
import Buttons from "../Buttons";
import Buttons2 from "../Buttons2";
import styled from "styled-components";

function ReviewsFrame131722(props) {
  const { buttonsProps, buttons2Props } = props;

  return (
    <Frame1317>
      <Buttons arrowleft={buttonsProps.arrowleft} />
      <Buttons2
        button={buttons2Props.button}
        arrowright={buttons2Props.arrowright}
        className={buttons2Props.className}
      />
    </Frame1317>
  );
}

const Frame1317 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

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

export default ReviewsFrame131722;
