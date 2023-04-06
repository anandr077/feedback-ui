import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalBlack16px } from "../../../styledMixins";

function ReviewsFrame1331(props) {
  const { iconsaxLinearMagicpen, shortcuts } = props;

  return (
    <Frame13311>
      <IconsaxLinearmagicpen
        src={iconsaxLinearMagicpen}
        alt="Iconsax/Linear/magicpen"
      />
      <Shortcuts>{shortcuts}</Shortcuts>
    </Frame13311>
  );
}

const Frame13311 = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const IconsaxLinearmagicpen = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Shortcuts = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default ReviewsFrame1331;
