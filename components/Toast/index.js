import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import { capitalizeFirstLetter } from '../../utils/strings';

function Toast({ message, link }) {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        fontFamily: 'var(--font-family-ibm_plex_sans)',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>{capitalizeFirstLetter(message)}</div>
      {link && (
        <Button
          color="secondary"
          style={{
            color: 'white',
            fontFamily: 'var(--font-family-ibm_plex_sans)',
          }}
          size="small"
          onClick={() => {
            navigate(link.replace('#', ''));
          }}
        >
          View
        </Button>
      )}
    </div>
  );
}

export default Toast;
