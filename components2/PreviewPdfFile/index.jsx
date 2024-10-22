import React from 'react';

const PreviewPdfFile = ({ url }) => {
  return (
    <div style={{ width: '100%' }}>
      <object data={url} type="application/pdf" width="100%" height="700px">
        <p>
          Alternative text - include a link <a href={url}>to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default PreviewPdfFile;
