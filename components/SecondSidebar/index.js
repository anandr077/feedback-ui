import React, { useState, useEffect } from 'react';
import {
  useLocation,
  useHistory,
} from 'react-router-dom/cjs/react-router-dom.min';
import { MainContainer, Button } from './style';
import { subRoutes } from './subRoutes';


const SecondSidebar = () => {
  const [containerHeight, setContainerHeight] = useState(0);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const updateHeight = () => {
      const windowHeight = window.innerHeight;
      setContainerHeight(`calc(${windowHeight}px - 170px)`);
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  const handleButtonClick = (link) => {
    history.push(link);
  };

  return (
    <MainContainer height={containerHeight}>
      {subRoutes.map((route, idx) => {
        if (route.link === location.pathname) {
          return (
            <React.Fragment key={idx}>
              {route.subLinks.map((subLink, subIdx) => (
                <Button
                  key={subIdx}
                  onClick={() => handleButtonClick(subLink.link)}
                  active={subLink.link === location.pathname}
                >
                  {subLink.icon && <img src={subLink.icon} alt={subLink.title} />}
                  {subLink.title}
                </Button>
              ))}
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </MainContainer>
  );
};

export default SecondSidebar;
