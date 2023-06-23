import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px, IbmplexsansNormalPersianIndigo20px } from "../../../styledMixins";


function SettingsNav(props) {
  const { userSettings, accountSettings, shortcuts } = props;

  return (<Frame13221>
  {userSettings &&
    (<>
      <SelectedContainer> <SelectedLabel> User Settings</SelectedLabel> </SelectedContainer>
      <UnselectedContainer> <UnselectedLabel> Account Settings</UnselectedLabel> </UnselectedContainer>
      <UnselectedContainer> <UnselectedLabel> Shortcuts</UnselectedLabel> </UnselectedContainer>
      </>
    )
    }
    {accountSettings && (
      <>
      <UnselectedContainer> <UnselectedLabel> User Settings</UnselectedLabel> </UnselectedContainer>
      <SelectedContainer> <SelectedLabel> Account Settings</SelectedLabel> </SelectedContainer>
      <UnselectedContainer> <UnselectedLabel> Shortcuts</UnselectedLabel> </UnselectedContainer>
      </>
    )}
    {
      shortcuts && (  <>
      <UnselectedContainer> <UnselectedLabel> User Settings</UnselectedLabel> </UnselectedContainer>
      <UnselectedContainer> <UnselectedLabel> Account Settings</UnselectedLabel> </UnselectedContainer>
      <SelectedContainer> <SelectedLabel> Shortcuts</SelectedLabel> </SelectedContainer>
      </>
      )
    }
    </Frame13221>
  );
}

const Frame13221 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const UnselectedContainer = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--white-pointer);
  border-radius: 38px;
  cursor: pointer;
`;

const UnselectedLabel = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;


const SelectedContainer = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 38px;
  cursor: pointer;
`;

const SelectedLabel = styled.div`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default SettingsNav;
