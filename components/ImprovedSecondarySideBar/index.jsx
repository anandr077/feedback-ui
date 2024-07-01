import React from 'react'
import { isTabletView } from '../ReactiveRender';
import SecondSidebar from '../SecondSidebar';
import ClickOutsideHandler from '../ClickOutsideHandler';

function ImprovedSecondarySideBar({ isShowMenu, setShowMenu, id = null }) {
  const tabletView = isTabletView();
  return (
    <>
      {!tabletView ? (
        <SecondSidebar id={id} />
      ) : (
        isShowMenu && (
          <ClickOutsideHandler setShowMenu={setShowMenu}>
            <SecondSidebar setShowMenu={setShowMenu} id={id} />
          </ClickOutsideHandler>
        )
      )}
    </>
  );
}

export default ImprovedSecondarySideBar