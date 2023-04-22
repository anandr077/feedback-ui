import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumElectricViolet16px } from "../styledMixins";

function Frame14072(props) {
  const { showCreateNew, iconsaxLinearAdd, line17, arrowright } = props;

  return (
    <Frame1407>
      {createNewFrame(showCreateNew, iconsaxLinearAdd)}

      <Line17 src={line17} alt="Line 17" />
      <a href="/assignments">
        <Frame1205>
          <CreateNew>VIEW ALL</CreateNew>
          <IconsaxLinearadd src={arrowright} alt="arrowright" />
        </Frame1205>
      </a>
    </Frame1407>
  );
}
function createNewFrame(showCreateNew, iconsaxLinearAdd) {
  if (showCreateNew) {
    return <a href="/assignments/new">
      <Frame1205>
        <IconsaxLinearadd src={iconsaxLinearAdd} alt="Iconsax/Linear/add" />
        <CreateNew>CREATE NEW</CreateNew>
      </Frame1205>
    </a>;
  }
  return <></>;
}
const Frame1407 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame1205 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const IconsaxLinearadd = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CreateNew = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 21px;
  object-fit: cover;
`;

const Frame14071 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame12051 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const IconsaxLinearadd1 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CreateNew1 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Line171 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 21px;
  object-fit: cover;
`;

const Frame14073 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame12052 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const IconsaxLinearadd2 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CreateNew2 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Line172 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 21px;
  object-fit: cover;
`;

const Frame14074 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame12053 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const IconsaxLinearadd3 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CreateNew3 = styled.div`
  ${IbmplexsansMediumElectricViolet16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 1.84px;
  line-height: normal;
`;

const Line173 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 1px;
  height: 21px;
  object-fit: cover;
`;

export default Frame14072;
