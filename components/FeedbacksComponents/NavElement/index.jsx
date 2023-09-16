import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalPersianIndigo20px } from '../../../styledMixins';

function NavElement(props) {
  const { home3, place, className } = props;

  return (
    <NavElement1 className={`nav-element ${className || ''}`}>
      <Group1 className="group-1">
        <Home3 className="home3" src={home3} alt="home3" />
        <Place className="place">{place}</Place>
      </Group1>
    </NavElement1>
  );
}

const NavElement1 = styled.article`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 60px;
  position: relative;
  border-radius: 26.5px;
`;

const Group1 = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  min-width: 88px;
  height: 26px;
  margin-right: -2px;
`;

const Home3 = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Place = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 54px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

const Group11 = styled.div`
  .nav-element.nav-element-1 & {
    min-width: 150px;
  }
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-1  & {
    width: 116px;
  }
`;

const Group12 = styled.div`
  .nav-element.nav-element-2 & {
    min-width: 103px;
  }
`;

const Home1 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-2  & {
    width: 69px;
  }
`;

const Group13 = styled.div`
  .nav-element.nav-element-4 & {
    min-width: 150px;
  }
`;

const Home2 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-4  & {
    width: 116px;
  }
`;

const Group14 = styled.div`
  .nav-element.nav-element-5 & {
    min-width: 103px;
  }
`;

const Home4 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-5  & {
    width: 69px;
  }
`;

const Group15 = styled.div`
  .nav-element.nav-element-6 & {
    min-width: 150px;
  }
`;

const Home5 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-6  & {
    width: 116px;
  }
`;

const Group16 = styled.div`
  .nav-element.nav-element-7 & {
    min-width: 103px;
  }
`;

const Home6 = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}

  .nav-element.nav-element-7  & {
    width: 69px;
  }
`;

export default NavElement;
