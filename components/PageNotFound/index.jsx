import React from 'react'
import Header from '../Header'
import HeaderSmall from '../HeaderSmall'
import { homeHeaderProps , teacherHomeHeaderProps} from '../../utils/headerProps'
import ReactiveRender from '../ReactiveRender'
import { getUserRole } from '../../service'
import styled from "styled-components";

export default function PageNotFound() {
    const isTeacher = getUserRole() === "TEACHER";
    const headerProps = !isTeacher ? teacherHomeHeaderProps: homeHeaderProps;
  return (
    <ReactiveRender
      mobile={
        <>
        <HeaderSmall headerProps={headerProps}/>
        <Container>
        <ImageContainer/>
        <TextMain>Looks like you’re lost</TextMain>
        <TextSub>The page you were looking for was not found</TextSub>
    </Container>
    </>
        
      }
      tablet={
        <>
        <HeaderSmall headerProps={headerProps}/>
        <Container>
        <ImageContainer/>
        <TextMain>Looks like you’re lost</TextMain>
        <TextSub>The page you were looking for was not found</TextSub>
    </Container>
    </>
      }
      laptop={
        <>
        <Header headerProps={headerProps} />
        <Container>
        <ImageContainer/>
        <TextMain>Looks like you’re lost</TextMain>
        <TextSub>The page you were looking for was not found</TextSub>
    </Container>
    </>
      }
      desktop={
        <>
        <Header headerProps={headerProps} />
        <Container>
        <ImageContainer/>
        <TextMain>Looks like you’re lost</TextMain>
        <TextSub>The page you were looking for was not found</TextSub>
    </Container>
    </>
      }
    />
   
  )
}

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
  z-index: -1;
`;

const ImageContainer = styled.div`
  width: 414px;
  height: 331px;
  background-image: url("./icons/pagenotfound.png");
  margin: 0px 0px 20px 0px; ;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  z-index: 0;`;

const TextMain = styled.div`
width: 310px;
height: 42px;
font-family: "IBM Plex Sans", sans-serif;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 42px;
text-align: center;
color: #1E252A;
flex: none;
order: 0;
flex-grow: 0;
margin: 0px 0px 20px 0px;`; 

const TextSub = styled.div`width: 400px;
height: 26px;
font-family: "IBM Plex Sans", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 26px;
text-align: center;
color: #1E252A;
flex: none;
order: 1;
`;