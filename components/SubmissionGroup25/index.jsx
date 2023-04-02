import React from "react";
import Dropdown from "../Dropdown";
import styled from "styled-components";


function SubmissionGroup25(props) {
  const { dropdown1Props, dropdown2Props, dropdown3Props } = props;

  return (
    <Group251>
      <DropdownContainer>
        <Dropdown heading={dropdown1Props.heading} />
        <Dropdown heading={dropdown2Props.heading} className={dropdown2Props.className} />
        <Dropdown heading={dropdown3Props.heading} className={dropdown3Props.className} />
      </DropdownContainer>
    </Group251>
  );
}

const Group251 = styled.div`
  position: relative;
  min-width: 335px;
  height: 30px;
`;

const DropdownContainer = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
  gap: 8px;
`;

const Group252 = styled.div`
  position: relative;
  min-width: 335px;
  height: 30px;
`;

const DropdownContainer1 = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
  gap: 8px;
`;

const Group253 = styled.div`
  position: relative;
  min-width: 335px;
  height: 30px;
`;

const DropdownContainer2 = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  align-items: flex-start;
  min-width: 335px;
  gap: 8px;
`;

export default SubmissionGroup25;
