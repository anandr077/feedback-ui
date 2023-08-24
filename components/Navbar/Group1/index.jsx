import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo20px } from '../../../styledMixins';

function Group1(props) {
  const { iconHome, text, isSelected } = props;
  if (isSelected) {
    return (
      <Group11>
        <IconHome src={iconHome} alt="icon-home" />
        <Place>{text}</Place>
      </Group11>
    );
  } else {
    return (
      <Group11>
        <IconHome src={iconHome} alt="icon-home" />
        <UnselectedPlace>{text}</UnselectedPlace>
      </Group11>
    );
  }
}

const Group11 = styled.div`
  margin-top: 14px;
  width: 88px;
  margin-left: 16px;
  display: flex;
  gap: 8px;
`;

const IconHome = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Place = styled.div`
  width: 54px;
  height: 26px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-m);
  letter-spacing: 0;
  line-height: normal;
`;

const UnselectedPlace = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 51px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Group1;
