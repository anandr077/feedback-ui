import React from 'react';
import Footer from '../Footer';
import FooterSmall from '../FooterSmall';
import ReactiveRender from '../ReactiveRender';
import { getUserRole } from '../../service';
import styled from 'styled-components';

export default function PageNotFound() {
  const isTeacher = getUserRole() === 'TEACHER';

  return (
    <ReactiveRender
      mobile={
        <>
          <Container>
            <ImageContainerSmall />
            <TextMainSmall>Looks like you’re lost</TextMainSmall>
            <TextSubSmall>
              The page you were looking for was not found
            </TextSubSmall>
            <HomeButtonContiner>
              <IconSmall src="/icons/homeIconUnselected.png" />
              <CustomLink href="/#/">
                <GoHomeLinkSmall>Go back home</GoHomeLinkSmall>
              </CustomLink>
            </HomeButtonContiner>
          </Container>
          <FooterContainer>
            {' '}
            <FooterSmall />
          </FooterContainer>
        </>
      }
      tablet={
        <>
          <Container>
            <ImageContainerSmall />
            <TextMainSmall>Looks like you’re lost</TextMainSmall>
            <TextSubSmall>
              The page you were looking for was not found
            </TextSubSmall>
            <HomeButtonContiner>
              <IconSmall src="/icons/homeIconUnselected.png" />
              <CustomLink href="/#/">
                <GoHomeLinkSmall>Go back home</GoHomeLinkSmall>
              </CustomLink>
            </HomeButtonContiner>
          </Container>
          <FooterContainer>
            {' '}
            <FooterSmall />
          </FooterContainer>
        </>
      }
      laptop={
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
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </>
      }
      desktop={
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
          <FooterContainer>
            <Footer />
          </FooterContainer>
        </>
      }
    />
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

const IconSmall = styled.img`
  position: relative;
  min-width: 13px;
  height: 13px;
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

const ImageContainerSmall = styled.div`
  width: 214px;
  height: 150px;
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

const TextMainSmall = styled.div`
  width: 155px;
  height: 21px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #1e252a;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px 10px 0px;
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

const GoHomeLinkSmall = styled.div`
  height: 13px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;
`;

const TextSubSmall = styled.div`
  width: 400px;
  height: 13px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  color: #1e252a;
  flex: none;
  order: 1;
`;

const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 0;
  height: 60px;
`;
