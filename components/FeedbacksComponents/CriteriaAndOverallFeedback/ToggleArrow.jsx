import React, { useState } from 'react';
import { HideArrow } from './style';
import ArrowDownIcon from '../../../static/img/arrowdown2.svg';
import ArrowUpIcon from '../../../static/img/arrowup2.svg';

function ToggleArrow({ refProp, toggleSection }) {
  const [isVisible, setIsVisible] = useState(true);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    toggleSection(refProp);
  };
  return (
    <HideArrow
      src={isVisible ? ArrowUpIcon : ArrowDownIcon}
      onClick={toggleVisibility}
    />
  );
}

export default ToggleArrow;
