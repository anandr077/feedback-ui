import { Divider, Drawer } from '@mui/material';
import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  DrawerBody,
  DrawerInput,
  DrawerSubjects,
  DrawerVericalNav,
  DrawerVericalNavData,
} from './style';
const drawerWidth = 275;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center',
  background: '#7200E0',
  padding: '16px',
  borderRadius: '12px',
  gap: '4px',
  color: 'white',
  margin: '20px',
  fontFamily: 'IBM Plex Sans',
}));

function IndepentdentUserSidebar({
  open,
  subjects,
  setSelectedSubject,
  subjectFiles,
}) {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        fontFamily: 'IBM Plex Sans',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
          width: '0px', // Set the width to 0
        },
        '&::-webkit-scrollbar-thumb': {
          display: 'none', // Hide the scrollbar thumb
        },
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>+ New Draft</DrawerHeader>
      <Divider />
      <DrawerBody>
        <DrawerInput placeholder="Search" />
        <p
          style={{
            fontSize: '12px',
            lineHeight: '15.6px',
            fontWeight: '500',
          }}
        >
          SUBJECTS
        </p>
        <DrawerSubjects>
          {subjects?.map((subject, index) => (
            <span
              style={{
                padding: '8px 12px',
                border: '1px solid #DEC7FF',
                background: 'linear-gradient(0deg, #DEC7FF, #DEC7FF)',
                borderRadius: '12px',
                cursor: 'pointer',
                fontFamily: 'IBM Plex Sans',
              }}
              onClick={() => setSelectedSubject(subject)}
            >
              {subject.className}
            </span>
          ))}
          <span
            style={{
              padding: '8px 12px',
              border: '1px solid #DEC7FF',
              background: '#7200E0',
              borderRadius: '12px',
              cursor: 'pointer',
              color: 'white',
              fontFamily: 'IBM Plex Sans',
            }}
          >
            + New Subject
          </span>
        </DrawerSubjects>

        <DrawerVericalNav>
          {/* <DrawerVericalNavData
            style={{ color: 'white', background: '#7200E0' }}
          >
            What are lanthanides?
          </DrawerVericalNavData> */}
          {subjectFiles?.files[2].files.map((file, index) => (
            <DrawerVericalNavData>{file.title}</DrawerVericalNavData>
          ))}
        </DrawerVericalNav>
      </DrawerBody>
    </Drawer>
  );
}

export default IndepentdentUserSidebar;
