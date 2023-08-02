import React from "react";
import Buttons from "../Buttons";
import styled from "styled-components";
import {
  IbmplexsansBoldShark36px,
  IbmplexsansNormalChicago13px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalElectricViolet14px,
} from "../../../styledMixins";
import "./AccountSettingsMarkingCriteriaTable.css";
import FooterSmall from "../../FooterSmall";
import HeaderSmall from "../../HeaderSmall";
import SettingsNav from "../SettingsNav";

function AccountSettingsMarkingCriteriaTable(props) {
  const {
    line14,
    buttonsProps,
    headerProps,
    markingCriteriaList,
    shortcutList,
    setShowMarkingCriteria,
    setShowShortcuts,
    setShowUserSettings,
    showMarkingCriteria,
    showShortcuts,
    showUserSettings,
    breadCrumbs
  } = props;

  
  return (
    <div className="account-settings-marking-criteria-tablet-2 screen">
      <Frame1379>
        <HeaderSmall headerProps={headerProps} />
        <Frame1376>
          <Frame1315>
            {breadCrumbs}
          </Frame1315>
        </Frame1376>
        <Frame1378>
          <Frame1372>
            <Title>Account Settings</Title>
          </Frame1372>
          <Frame1322>
          {
            showUserSettings ?(
              <ActiveSetting>
              <Frame13221>
                <SettingTitle>User Settings</SettingTitle>
                <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" onClick={()=> {setShowUserSettings(false)}} />
              </Frame13221>
              <Frame1302>
               <UserSettingLinkContainer>
                <UserSettingLink href="/#/">Edit in user profile 
                </UserSettingLink>
                <RedictIcon src="/icons/redirecticon.svg" alt="Redirect Icon" />
               </UserSettingLinkContainer> 
              </Frame1302>
              </ActiveSetting>
            ):
            (
            <InactiveSetting>
              <SettingTitle>User Settings</SettingTitle>
              <Frame1284 src="/icons/collapsed.svg"  alt="Frame 1284" onClick={()=> {setShowUserSettings(true)}} />
            </InactiveSetting>)
          }
           {
            showMarkingCriteria ? (
             <ActiveSetting>
              <Frame13221>
                <SettingTitle>MarkingCriteria</SettingTitle>
                <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" onClick={()=> {setShowMarkingCriteria(false)}} />
              </Frame13221>
              <Frame1302>
                <Title1>
                  <Buttons text="Create New" className={buttonsProps.className} link={"/#/markingCriterias/new"} mobile={true} />
                </Title1>
                <Line14 src={line14} alt="Line 14" />
                <MarkingCriteriaList>
                  {markingCriteriaList}
                </MarkingCriteriaList>
              </Frame1302>
            </ActiveSetting>
            ) :(
              <InactiveSetting>
              <SettingTitle>MarkingCriteria</SettingTitle>
              <Frame1284 src="/icons/collapsed.svg" alt="Frame 1284" onClick={()=> {setShowMarkingCriteria(true)}}/>
            </InactiveSetting>
            )
            }
            {
              showShortcuts ? (
                
                <ActiveSetting>
              <Frame13221>
                <SettingTitle>Smart Annotations</SettingTitle>
                <Frame1284 src="/icons/expanded.svg" alt="Frame 1284" onClick={()=> {setShowShortcuts(false)}} />
              </Frame13221>
              <Frame1302>
             
                <Title1>
                  <Buttons text="Create New" className={buttonsProps.className}/>
                </Title1>
                <Line14 src={line14} alt="Line 14" />
                <MarkingCriteriaList>
                {shortcutList}
                </MarkingCriteriaList>
              </Frame1302>
            </ActiveSetting>
              
              ):(
            <InactiveSetting>
              <SettingTitle>Shortcuts</SettingTitle>
              <Frame1284 src="/icons/collapsed.svg" alt="Frame 1284"  onClick={()=> {setShowShortcuts(true)}}/>
            </InactiveSetting>)
            }
          </Frame1322>
        </Frame1378>
      </Frame1379>
     <FooterSmall/>
    </div>
  );
}

const ShortcutInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 11px 18px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  border: 1px solid;
  border-color: var(--text);
`;

const ShortcutInput = styled.input`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;


const MarkingCriteriaList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }
`;

const RedictIcon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;
const UserSettingLinkContainer = styled.div`
display: flex;
height: 31px;
align-items: center;
gap: 8px;
align-self: stretch;
cursor: pointer;
`;

const UserSettingLink = styled.div`
${IbmplexsansNormalElectricViolet14px}
font-size: 14px;
`;

const Frame1379 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 223.75px;
  height: 37.4892578125px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Notifications = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1376 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Frame1378 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1372 = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1322 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const InactiveSetting = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk);
  border-radius: 16px;
`;

const SettingTitle = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ActiveSetting = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 24px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
`;

const Frame13221 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Frame1302 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
`;

const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 302px;
  height: 1px;
  object-fit: cover;
`;

const Frame1420 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default AccountSettingsMarkingCriteriaTable;
