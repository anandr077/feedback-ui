import React, { useRef, useEffect } from 'react';
import { MenuContainer } from './style';

const ClickOutsideHandler = ({ setShowMenu, children }) => {
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return <MenuContainer ref={wrapperRef}>{children}</MenuContainer>;
};

export default ClickOutsideHandler;
