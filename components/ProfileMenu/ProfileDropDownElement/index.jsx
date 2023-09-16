import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../../styledMixins';
function ProfileDropDownElement(props) {
  const { text, link, onClick, noIcon } = props;
  const redirectTo = () => {
    if (onClick) {
      onClick();
      return;
    }
    window.location.href = link;
  };
  return (
    <ElementContainer onClick={redirectTo}>
      <TextStyle>{text}</TextStyle>
      {!noIcon && (
        <IconContainer
          className="exportsquare"
          src="/icons/redirectIcon.png"
          alt="exportsquare"
        />
      )}
    </ElementContainer>
  );
}

const TextStyle = styled.div`
  ${IbmplexsansNormalBlack16px}
`;

const ElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const IconContainer = styled.img`
  width: 15px;
  height: 15px;
  object-fit: contain;
`;
export default ProfileDropDownElement;
