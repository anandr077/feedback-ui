import React from 'react';

const PreviewPdfFile = ({ url }) => {
  return (
    <div style={{ width: '100%' }}>
      <iframe
        src={url}
        width="100%"
        height="700px"
        style={{ border: 'none' }}
      />
    </div>
  );
};

export default PreviewPdfFile;
