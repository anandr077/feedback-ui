import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../../styledMixins";

function StyledHeaderButton(props) {
  const { iconsrc, text, className } = props;

  return (
    <HeaderButton>
      <HeaderButtonInnnerContainer className="group-1">
        <IconContainer src={iconsrc} alt="buttonIcon" />
        <ButtonText className="place">{text}</ButtonText>
      </HeaderButtonInnnerContainer>
    </HeaderButton>
  );
}

const HeaderButton = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  border-radius: 26.5px;
`;

const HeaderButtonInnnerContainer = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 88px;
  height: 26px;
  margin-right: -2px;
`;

const IconContainer = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const ButtonText = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 54px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export default StyledHeaderButton;
