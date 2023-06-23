import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px, IbmplexsansNormalPersianIndigo20px } from "../../../styledMixins";


function SettingsNav(props) {
  const { setShowMarkingCriteria,setShowShortcuts,setShowUserSettings,showMarkingCriteria,showShortcuts,showUserSettings } = props;

  if(!showMarkingCriteria && !showShortcuts && !showUserSettings) {
    setShowMarkingCriteria(true);
    setShowShortcuts(false);
    setShowUserSettings(false);
  }

  const selectUserSettings = () => {
    setShowMarkingCriteria(false);
    setShowShortcuts(false);
    setShowUserSettings(true);
  }

  const selectMarkingCriteria = () => {
    setShowMarkingCriteria(true);
    setShowShortcuts(false);
    setShowUserSettings(false);
  }

  const selectShortcuts = () => {
    setShowMarkingCriteria(false);
    setShowShortcuts(true);
    setShowUserSettings(false);
  }

  return (<Frame13221>
  {showUserSettings &&
    (<>
      <SelectedContainer onClick={selectUserSettings}> <SelectedLabel> User Settings</SelectedLabel> </SelectedContainer>
      <UnselectedContainer  onClick={selectMarkingCriteria}> <UnselectedLabel> Marking Criteria</UnselectedLabel> </UnselectedContainer>
      <UnselectedContainer onClick={selectShortcuts}> <UnselectedLabel> Shortcuts</UnselectedLabel> </UnselectedContainer>
      </>
    )
    }
    {showMarkingCriteria && (
      <>
      <UnselectedContainer onClick={selectUserSettings}> <UnselectedLabel> User Settings</UnselectedLabel> </UnselectedContainer>
      <SelectedContainer onClick={selectMarkingCriteria}> <SelectedLabel> Marking Criteria</SelectedLabel> </SelectedContainer>
      <UnselectedContainer onClick={selectShortcuts} > <UnselectedLabel> Shortcuts</UnselectedLabel> </UnselectedContainer>
      </>
    )}
    {
      showShortcuts && (  <>
      <UnselectedContainer onClick={selectUserSettings}> <UnselectedLabel> User Settings</UnselectedLabel> </UnselectedContainer>
      <UnselectedContainer onClick={selectMarkingCriteria}> <UnselectedLabel> Marking Criteria</UnselectedLabel> </UnselectedContainer>
      <SelectedContainer onClick={selectShortcuts}> <SelectedLabel> Shortcuts</SelectedLabel> </SelectedContainer>
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
