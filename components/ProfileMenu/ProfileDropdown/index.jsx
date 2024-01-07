import React, { useEffect, useState, useContext } from 'react';
import Cookies from 'js-cookie';
import ProfileDropDownElement from '../ProfileDropDownElement';
import './ProfileDropdown.css';
import styled from 'styled-components';
import { account, changePassword, logout, getUserRole } from '../../../service';
import { useQueryClient } from '@tanstack/react-query';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';
import 'react-edit-text/dist/index.css';
import { OnboardingContext } from '../../../components2/Onboard/OnboardingProvider';

function ProfileDropdown() {
  const role = getUserRole();
  const queryClient = useQueryClient();
  const [state, setState] = useState('State');
  const [year, setYear] = useState('Year');
  const { setEditStateYear } = useContext(OnboardingContext);

  useEffect(() => {
    const cookieState = Cookies.get('state');
    const cookieYear = Cookies.get('year');

    if (cookieState) {
      setState(cookieState);
    }

    if (cookieYear) {
      setYear(cookieYear);
    }
  }, []);



  return (
    <>
      {role === 'STUDENT' && (
        <>
          <StudentStateContainer>
            <div>
              {year} / {state}
            </div>
            <EditImg
              src="/icons/EditSM.png"
              alt="edit"
              onClick={() => setEditStateYear(true)}
            />
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
        </>
      )}
      <ProfileDropDownElement text="View Profile" onClick={() => account()} />
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Change Password"
        onClick={() => {
          changePassword();
        }}
      />
      {role === 'TEACHER' && (
        <>
          <Line6 src="/icons/line.png" alt="Line 6" />
          <ProfileDropDownElement
            text="Settings"
            noIcon={true}
            onClick={() => (window.location.href = '/#/settings')}
          />
        </>
      )}
      <Line6 src="/icons/line.png" alt="Line 6" />
      <ProfileDropDownElement
        text="Logout"
        noIcon={true}
        onClick={() => {
          queryClient.clear();
          logout();
        }}
      />
    </>
  );
}

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const StudentStateContainer = styled.div`
  ${IbmplexsansNormalBlack16px}
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  padding: 10px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const EditImg = styled.img`
  width: 12px;
  height: 12px;
  cursor: pointer;
  margin-right: 10px;
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
`;

export default ProfileDropdown;
