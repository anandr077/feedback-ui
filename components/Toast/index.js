import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/strings';

function Toast({ message, link }) {
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
            history.push(link.replace('#', ''));
          }}
        >
          View
        </Button>
      )}
    </div>
  );
}

export default Toast;
