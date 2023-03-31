import React from "react";
import styled from "styled-components";
import StyledHeaderButton from "../StyledHeaderButton";
import NavElement2 from "../NavElement2";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";

import { IbmplexsansNormalPersianIndigo20px } from "../../styledMixins";

export default function Header(props) {
  const { firstButton } = props;
  const OnfirstButtonClick = () => {
    console.log("firstButton clicked");
  };
  return (
    <Frame1344>
      <Frame1343 src="/img/frame-1343@2x.png" alt="Frame 1343" />
      <Frame5>
        <HeaderButton onClick={OnfirstButtonClick}>
          <HeaderButtonInnnerContainer className="group-1">
            <IconContainer src="/img/homeButtonIcon.png" alt="buttonIcon" />
            <ButtonText>Home</ButtonText>
          </HeaderButtonInnnerContainer>
        </HeaderButton>
        <NavElement2 />
        <HeaderButton onClick={OnfirstButtonClick}>
          <HeaderButtonInnnerContainer className="group-1">
            <IconContainer src="/img/clipboardtick@2x.png" alt="buttonIcon" />
            <ButtonText>Submissions</ButtonText>
          </HeaderButtonInnnerContainer>
        </HeaderButton>
      </Frame5>
      <Frame51>
        <Notifications src="/img/notificationbing-3@2x.png" />
        <Frame4 maskGroup="/img/mask-group-1@2x.png" />
      </Frame51>
    </Frame1344>
  );
}

const Frame1344 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 13px 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1343 = styled.img`
  position: relative;
  min-width: 241.7498779296875px;
  height: 43.499969482421875px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

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
