import React from "react";
import styled from "styled-components";
import Notifications from "../Notifications";
import UserIcon from "../UserIcon";

import {
  IbmplexsansNormalPersianIndigo20px,
  IbmplexsansNormalWhite20px,
} from "../../styledMixins";

export default function Header(props) {
  const { headerProps } = props;
  const OnFirstButtonClick = () => {
    console.log("firstButton clicked");
    window.location.href = headerProps.firstButton.redirect;
  };
  const OnSecondButtonClick = () => {
    window.location.href = headerProps.secondButton.redirect;
  };
  const OnThirdButtonClick = () => {
    window.location.href = headerProps.thirdButton.redirect;
  };

  return (
    <Frame1344>
      <Frame1343 src="/img/frame-1343@2x.png" alt="Frame 1343" />
      <Frame5>
        {headerProps.firstButton.selected ? (
          <HeaderButtonSelected onClick={OnFirstButtonClick}>
            <HeaderButtonInnnerContainer>
              <IconContainer
                src={headerProps.firstButton.iconSelected}
                alt="buttonIcon"
              />
              <SelectedButtonText>
                {headerProps.firstButton.text}
              </SelectedButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButtonSelected>
        ) : (
          <HeaderButton onClick={OnFirstButtonClick}>
            <HeaderButtonInnnerContainer className="group-1">
              <IconContainer
                src={headerProps.firstButton.icon}
                alt="buttonIcon"
              />
              <ButtonText>{headerProps.firstButton.text}</ButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButton>
        )}
        {headerProps.secondButton.selected ? (
          <HeaderButtonSelected onClick={OnSecondButtonClick}>
            <HeaderButtonInnnerContainer>
              <IconContainer
                src={headerProps.secondButton.iconSelected}
                alt="buttonIcon"
              />
              <SelectedButtonText>
                {headerProps.secondButton.text}
              </SelectedButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButtonSelected>
        ) : (
          <HeaderButton onClick={OnSecondButtonClick}>
            <HeaderButtonInnnerContainer className="group-1">
              <IconContainer
                src={headerProps.secondButton.icon}
                alt="buttonIcon"
              />
              <ButtonText>{headerProps.secondButton.text}</ButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButton>
        )}
        {headerProps.thirdButton.selected ? (
          <HeaderButtonSelected onClick={OnThirdButtonClick}>
            <HeaderButtonInnnerContainer>
              <IconContainer
                src={headerProps.thirdButton.iconSelected}
                alt="buttonIcon"
              />
              <SelectedButtonText>
                {headerProps.thirdButton.text}
              </SelectedButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButtonSelected>
        ) : (
          <HeaderButton onClick={OnThirdButtonClick}>
            <HeaderButtonInnnerContainer className="group-1">
              <IconContainer
                src={headerProps.thirdButton.icon}
                alt="buttonIcon"
              />
              <ButtonText>{headerProps.thirdButton.text}</ButtonText>
            </HeaderButtonInnnerContainer>
          </HeaderButton>
        )}
      </Frame5>
      <Frame51>
        <Notifications src="/img/notificationbing-3@2x.png" />
        <UserIcon maskGroup="/img/mask-group-1@2x.png" />
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
  cursor: pointer;
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

const SelectedButtonText = styled.div`
  ${IbmplexsansNormalWhite20px}
  width: 54px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
  display: flex;
  align-items: center;
`;

const HeaderButtonSelected = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  border-radius: 26.5px;
  background-color: var(--royal-purple);
  cursor: pointer;
`;
