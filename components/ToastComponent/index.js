import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';

function ToastComponent({ message, link }) {
  const history = useHistory();
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
      <div>{message}</div>
      {link && (
        <Button
          color="secondary"
          style={{
            color: 'white',
            fontFamily: 'var(--font-family-ibm_plex_sans)',
          }}
          size="small"
          onClick={() => {
            window.location.href = link;
            // history.push('/' + link);
            // history.replace('/' + link);
          }}
        >
          View
        </Button>
      )}
    </div>
  );
}

export default ToastComponent;
