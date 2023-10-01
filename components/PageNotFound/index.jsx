import React from 'react';
import Footer from '../Footer';
import styled from 'styled-components';

export default function PageNotFound() {
  return (
    <>
      <Container>
        <ImageContainer />
        <TextMain>Looks like you’re lost</TextMain>
        <TextSub>The page you were looking for was not found</TextSub>
        <HomeButtonContiner>
          <Icon src="/icons/homeIconUnselected.png" />
          <CustomLink href="/#/">
            <GoHomeLink>Go back home</GoHomeLink>
          </CustomLink>
        </HomeButtonContiner>
      </Container>
      {/* <FooterContainer>
        <Footer />
      </FooterContainer> */}
    </>
  );
}

const CustomLink = styled.a`
  text-decoration: none;
`;

const HomeButtonContiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  width: 100%;
  padding: 0px 0px 10px 0px;
  :hover {
    scale: 1.2;
    transition: 0.3s;
  }
`;

const Icon = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #fcfaff;
  z-index: -1;
`;

const ImageContainer = styled.div`
  width: 414px;
  height: 331px;
  background-image: url('./icons/pagenotfound.png');
  margin: 0px 0px 20px 0px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;
`;

const TextMain = styled.div`
  width: 310px;
  height: 42px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  text-align: center;
  color: #1e252a;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px 20px 0px;
`;

const TextSub = styled.div`
  width: 400px;
  height: 26px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #1e252a;
  flex: none;
  order: 1;
`;

const GoHomeLink = styled.div`
  height: 26px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 0;
  height: 60px;
`;
