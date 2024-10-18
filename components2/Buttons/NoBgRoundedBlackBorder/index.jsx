import React from 'react'
import styled from 'styled-components';

const NoBgRoundedBlackBorder = ({
    leftIcon = "",
    rightIcon = "",
    disabled = false,
    text,
    onclick 
}) => {
  return (
    <QuestionBtn onClick={onclick}>
        <img src={leftIcon} />
        <span>{text}</span>
    </QuestionBtn>
  )
}

export default NoBgRoundedBlackBorder



export const QuestionBtn = styled.button`
  min-width: 85px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 4px 20px;
  border-radius: 16px;
  border: 1.5px solid rgba(75, 70, 79, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 20px;
  color: rgba(75, 70, 79, 1);
  white-space: nowrap;
  background-color: transparent;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  img{
    height: 16px;
    width: 16px;
  }
`;