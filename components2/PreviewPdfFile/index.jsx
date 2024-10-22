import React from 'react';

const PreviewPdfFile = ({ url }) => {
  return (
    <div style={{ width: '100%' }}>
      <object data={url} type="application/pdf" width="100%" height="700px">
      </object>
    </div>
  );
};

export default PreviewPdfFile;
