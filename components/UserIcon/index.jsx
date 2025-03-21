import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack16px } from '../../styledMixins';
import { Avatar } from '@boringer-avatars/react';
import { getUserName } from '../../userLocalDetails';
import ProfileDropdown from '../ProfileMenu/ProfileDropdown';

function Frame4(props) {
  const name = getUserName();
  const header = (
    <Frame41>
      <Avatar
        title={false}
        size={45}
        variant="beam"
        name={name}
        square={false}
      />
      <Frame3>
        <Name>{name}</Name>

        <Frame27 src="/img/frame-27@2x.png" alt="Frame 27" />
      </Frame3>
    </Frame41>
  );
  return (
    <>
      {' '}
      <Frame41>
        <Avatar
          title={false}
          size={45}
          variant="beam"
          name={name}
          square={false}
        />
        <Frame3>
          <Name>{name}</Name>

          <Frame27 src="/img/frame-27@2x.png" alt="Frame 27" />
        </Frame3>
      </Frame41>
    </>
  );
}

const Frame41 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
  cursor: pointer;
`;

const MaskGroup = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

const Frame3 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Name = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame27 = styled.img`
  position: relative;
  min-width: 6.780029296875px;
  height: 8.1158447265625px;
  margin-right: -1.03px;
`;

const Frame42 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const MaskGroup1 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
`;

const Frame31 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 4px;
  position: relative;
`;

const Name1 = styled.div`
  ${IbmplexsansNormalBlack16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame271 = styled.img`
  position: relative;
  min-width: 6.780029296875px;
  height: 8.1158447265625px;
  margin-right: -1.03px;
`;

export default Frame4;
