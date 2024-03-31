import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalWhite20px,
  IbmplexsansNormalPersianIndigo20px,
} from '../../../styledMixins';

function SettingsNav(props) {
  const {
    setShowMarkingCriteria,
    setShowShortcuts,
    setShowUserSettings,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
  } = props;

  if (!showMarkingCriteria && !showShortcuts && !showUserSettings) {
    setShowMarkingCriteria(true);
    setShowShortcuts(false);
    setShowUserSettings(false);
  }

  const selectUserSettings = () => {
    setShowMarkingCriteria(false);
    setShowShortcuts(false);
    setShowUserSettings(true);
  };

  const selectMarkingCriteria = () => {
    setShowMarkingCriteria(true);
    setShowShortcuts(false);
    setShowUserSettings(false);
  };

  const selectShortcuts = () => {
    setShowMarkingCriteria(false);
    setShowShortcuts(true);
    setShowUserSettings(false);
  };

  return (
    <Frame13221>
      {showUserSettings ? (
        <SelectedContainer onClick={selectUserSettings}>
          <SelectedLabel> User Settings</SelectedLabel>
        </SelectedContainer>
      ) : (
        <UnselectedContainer onClick={selectUserSettings}>
          <UnselectedLabel> User Settings</UnselectedLabel>
        </UnselectedContainer>
      )}
      {showMarkingCriteria ? (
        <SelectedContainer onClick={selectMarkingCriteria}>
          <SelectedLabel> Marking Templates</SelectedLabel>
        </SelectedContainer>
      ) : (
        <UnselectedContainer onClick={selectMarkingCriteria}>
          <UnselectedLabel> Marking Templates</UnselectedLabel>
        </UnselectedContainer>
      )}
      {showShortcuts ? (
        <SelectedContainer onClick={selectShortcuts}>
          {' '}
          <SelectedLabel> Feedback Banks</SelectedLabel>{' '}
        </SelectedContainer>
      ) : (
        <UnselectedContainer onClick={selectShortcuts}>
          {' '}
          <UnselectedLabel> Feedback Banks</UnselectedLabel>{' '}
        </UnselectedContainer>
      )}
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
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #301b72;
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
  font-family: IBM Plex Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;

export default SettingsNav;
