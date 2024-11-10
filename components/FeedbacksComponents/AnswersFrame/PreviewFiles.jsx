import React, { useState } from 'react';
import styled from 'styled-components';
import PreviewPdfFile from '../../../components2/PreviewPdfFile';

const PreviewFiles = ({ id, url }) => {
  const [isImageValid, setIsImageValid] = useState(null);

  const checkImgUrl = new window.Image();
    checkImgUrl.src = url;

    checkImgUrl.onload = () => {
      setIsImageValid(true);
    };

    checkImgUrl.onerror = () => {
      setIsImageValid(false);
    }; 

  return isImageValid ? (
    <PreviewImg key={id} id={id} src={url} />
  ) : (
    <PreviewPdfFile url={url}/>
  );
};

export default PreviewFiles;

export const PreviewImg = styled.img`
  width: 100%;
`;
