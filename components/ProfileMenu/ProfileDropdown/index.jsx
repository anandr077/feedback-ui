import React, { useEffect, useState } from 'react';
import ProfileDropDownElement from '../ProfileDropDownElement';
import './ProfileDropdown.css';
import styled from 'styled-components';
import { account, changePassword, logout, getUserRole } from '../../../service';
import { useQueryClient } from '@tanstack/react-query';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import Cookies from 'js-cookie';

function ProfileDropdown() {
  const role = getUserRole();
  const queryClient = useQueryClient();
  const [state, setState] = useState('State');
  const [year, setYear] = useState('Year');

  const handleStateChange = (e) => {
    const newState = e.target.value;
    setState(newState);
    Cookies.set('state', newState)
  };

  const handleYearChange = (e) => {
    const newYear = e.target.value;
    setYear(newYear);
    Cookies.set('year', newYear)
  };

  const handlePropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(()=>{
     const savedState = Cookies.get('state');
     const savedYear = Cookies.get('year');

     savedState && setState(savedState);
     savedYear && setYear(savedYear);
  }, [])

  return (
    <>
      {role === 'STUDENT' && (
        <>
          <StudentStateContainer onClick={handlePropagation}>
            <StyledEditText value={state} onChange={handleStateChange} />
            <EditImg src="/icons/EditSM.png" alt="edit" />
          </StudentStateContainer>
          <Line6 src="/icons/line.png" alt="Line 6" />
          <StudentStateContainer onClick={handlePropagation}>
            <StyledEditText value={year} onChange={handleYearChange} />
            <EditImg src="/icons/EditSM.png" alt="edit" />
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
  //justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 5px;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledEditText = styled(EditText)`
  width: 200px;
  z-index: 1;
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
