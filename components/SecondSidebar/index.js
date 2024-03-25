import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import {
  MainContainer,
  Button
} from './style'

const subRoutes = [
  {
    link: '/',
    subLinks: [
      {
        icon: '',
        title: 'Classwork'
      },
      {
        icon: '',
        title: 'Feedback Requests(4)'
      },
      {
        icon: '',
        title: 'Closed Tasks'
      },
    ]
  },
  {
    link: '/tasks',
    subLinks: [
      {
        icon: '',
        title: 'Classwork'
      },
      {
        icon: '',
        title: 'Feedback Requests(4)'
      },
      {
        icon: '',
        title: 'Closed Tasks'
      },
    ]
  },
  {
    link: '/settings',
    subLinks: [
      {
        icon: '',
        title: 'User Settings'
      },
      {
        icon: '',
        title: 'Marking Templates'
      },
      {
        icon: '',
        title: 'Comment Banks'
      },
    ]
  },
  {
    link: '/giveFeedback',
    subLinks: [
      {
        icon: '',
        title: 'Feedback Requests'
      },
      {
        icon: '',
        title: 'Feedback History'
      },
    ]
  },
  {
    link: '/feedbackHistory',
    subLinks: [
      {
        icon: '',
        title: 'Feedback Requests'
      },
      {
        icon: '',
        title: 'Feedback History'
      },
    ]
  }
]

const SecondSidebar = () => {
  const [containerHeight, setContainerHeight] = useState(0)
  const location = useLocation();

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
      {subRoutes.map((route, idx) => {
        if (route.link === location.pathname) {
          return (
            <React.Fragment key={idx}>
              {route.subLinks.map((subLink, subIdx) => (
                <Button key={subIdx}>{subLink.title}</Button>
              ))}
            </React.Fragment>
          );
        } else {
          return null;
        }
      })}
    </MainContainer>
  )
}

export default SecondSidebar

//<Button highlight={idx === 0}>{route}</Button>