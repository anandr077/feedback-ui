import React from 'react';
import Frame1219 from '../Frame1219';
import styled from 'styled-components';
import { IbmplexsansBoldShark36px } from '../../../styledMixins';

function Frame1372(props) {
  const { className, saveMethod, deleteMethod, isUpdating, withoutTitle } =
    props;

  return (
    <>
      {withoutTitle ? (
        <WithoutTitleFrame className={`frame-1372 ${className || ''}`}>
          <Frame1219
            saveMethod={saveMethod}
            deleteMethod={deleteMethod}
            isUpdating={isUpdating}
          />
        </WithoutTitleFrame>
      ) : (
        <Frame13721 className={`frame-1372 ${className || ''}`}>
          <Title className="title">
            {isUpdating
              ? 'Update marking template'
              : 'Create new marking template'}
          </Title>
          <Frame1219
            saveMethod={saveMethod}
            deleteMethod={deleteMethod}
            isUpdating={isUpdating}
          />
        </Frame13721>
      )}
    </>
  );
}

const Frame13721 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
  position: relative;

  &.frame-1372.frame-1372-1 {
    margin-right: -120px;
  }
`;

const WithoutTitleFrame = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  position: relative;

  &.frame-1372.frame-1372-1 {
    margin-right: -120px;
  }
`;

const Title = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

export default Frame1372;
