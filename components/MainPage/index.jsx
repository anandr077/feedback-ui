import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  /* position: absolute; */
  /* top: 70px; */
`;

const Sidebar = styled.div`
  width: ${props => (props.isOpen ? '250px' : '0')};
  height: 100vh;
  overflow-x: hidden; // Hide content when sidebar is collapsed
  transition: width 0.3s; // Smooth transition for collapsing and expanding
  background-color: #f0f0f0; // Example background color
  position: fixed; // Needed for sticky positioning context
  align-self: stretch;
  top: 70px
  overflow-y: scroll;
`;

const StickyItem = styled.div`
  /* position: sticky; */
  top: 0; // Adjust as needed
  background-color: white; // Example background color for visibility
  padding: 10px;
  // Add more styles as needed
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  margin-left: 250px; // Same width as sidebar
`;

const ToggleButton = styled.button`
  position: absolute;
  left: ${props => (props.isOpen ? '250px' : '0')};
  transition: left 0.3s;
  // Style your button
`;

// Main Page Component
const MainPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen}>
        <StickyItem>Sticky Item 1</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        <StickyItem>Sticky Item 2</StickyItem>
        {/* More sidebar content */}
      </Sidebar>
      <Content>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        <>aa<br/></>
        
        {/* Main Content Here */}
      </Content>
      <ToggleButton isOpen={isSidebarOpen} onClick={toggleSidebar}>
        {isSidebarOpen ? '<' : '>'}
      </ToggleButton>
    </Container>
  );
};

export default MainPage;
