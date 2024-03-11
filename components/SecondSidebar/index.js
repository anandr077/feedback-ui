import React, { useState, useEffect } from 'react'
import {
  MainContainer,
  Button
} from './style'

const subRoutes = ["Classwork", "Feedback Requests(4)", "Closed Tasks"]

const SecondSidebar = () => {
  const [containerHeight, setContainerHeight] = useState(0)

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

  return (
    <MainContainer height={containerHeight}>
      {
        subRoutes.map((route, idx) =>{
          return (
            <Button highlight={idx === 0}>{route}</Button>
          )
        })
      }
    </MainContainer>
  )
}

export default SecondSidebar