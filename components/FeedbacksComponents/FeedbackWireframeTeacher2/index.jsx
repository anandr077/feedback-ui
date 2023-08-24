import React from 'react';
import { Link } from 'react-router-dom';
import TeacherDashboardHeader2 from '../TeacherDashboardHeader2';
import ReviewsFrame1315 from '../ReviewsFrame1315';
import ReviewsFrame1295 from '../ReviewsFrame1295';
import ReviewsFrame1317 from '../ReviewsFrame1317';
import ReviewsFrame1311 from '../ReviewsFrame1311';
import SidebarNav from '../SidebarNav';
import SidebarNav2 from '../SidebarNav2';
import ReviewsFrame1366 from '../ReviewsFrame1366';
import ReviewsFrame1322 from '../ReviewsFrame1322';
import Buttons42 from '../Buttons42';
import ReviewsFrame12973 from '../ReviewsFrame12973';
import ReviewsFrame1370 from '../ReviewsFrame1370';
import ReviewsFrame6 from '../ReviewsFrame6';
import styled from 'styled-components';
import {
  IbmplexsansNormalMountainMist16px,
  IbmplexsansNormalShark20px,
  IbmplexsansMediumPersianIndigo20px,
  IbmplexsansBoldShark36px,
} from '../../../styledMixins';
import './FeedbackWireframeTeacher2.css';

function FeedbackWireframeTeacher2(props) {
  const {
    physicsThermodyna,
    frame1284,
    q1PoremIpsumDolo,
    line261,
    line262,
    enterNewShortcut,
    teacherDashboardHeaderProps,
    frame1315Props,
    frame1317Props,
    sidebarNav22Props,
    sidebarNav23Props,
    sidebarNav24Props,
    frame13661Props,
    frame13662Props,
    frame1322Props,
    buttons4Props,
    frame129731Props,
    frame129732Props,
    frame129733Props,
    frame129734Props,
    frame1370Props,
    frame13662Props2,
  } = props;

  return (
    <div className="feedback-u45-wireframe-u45-teacher screen">
      <TeacherDashboardHeader2
        logo={teacherDashboardHeaderProps.logo}
        className={teacherDashboardHeaderProps.className}
        frame5Props={teacherDashboardHeaderProps.frame5Props}
        frame4Props={teacherDashboardHeaderProps.frame4Props}
      />
      <ReviewsFrame1315
        breadcrumb21Props={frame1315Props.breadcrumb21Props}
        breadcrumb22Props={frame1315Props.breadcrumb22Props}
      />
      <Frame1371>
        <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
        <Frame1369>
          <Link to="/students-list">
            <Frame1316>
              <ReviewsFrame1295 />
              <Frame1284 src={frame1284} alt="Frame 1284" />
            </Frame1316>
          </Link>
          <ReviewsFrame1317
            buttonsProps={frame1317Props.buttonsProps}
            buttons2Props={frame1317Props.buttons2Props}
          />
        </Frame1369>
      </Frame1371>
      <Frame1368>
        <Frame1319>
          <ReviewsFrame1311 />
          <Frame1318>
            <SidebarNav />
            <SidebarNav2 />
            <SidebarNav2 className={sidebarNav22Props.className} />
            <SidebarNav2 className={sidebarNav23Props.className} />
            <SidebarNav2 className={sidebarNav24Props.className} />
          </Frame1318>
        </Frame1319>
        <Group1225>
          <Frame1367>
            <Frame13661>
              <Q1PoremIpsumDolo>{q1PoremIpsumDolo}</Q1PoremIpsumDolo>
              <ToremIpsumDolorSi>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curabitur
                tempor quis eros tempus lacinia. Nam bibendum pellentesque quam
                a convallis. Sed ut vulputate nisi. Integer in felis sed leo
                vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat
                ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus
                lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
                amet magna non ligula vestibulum eleifend. Nulla varius volutpat
                turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed
                nec ante dictum sem condimentum ullamcorper quis venenatis nisi.
                Proin vitae facilisis nisi, ac posuere leo.
              </ToremIpsumDolorSi>
              <Link to="/shortcuts">
                <Group1308>
                  <OverlapGroup>
                    <Rectangle546></Rectangle546>
                    <Rectangle547></Rectangle547>
                  </OverlapGroup>
                </Group1308>
              </Link>
              <Link to="/shortcuts">
                <Group1309>
                  <OverlapGroup1>
                    <Rectangle5461></Rectangle5461>
                    <Rectangle5471></Rectangle5471>
                    <Rectangle548></Rectangle548>
                  </OverlapGroup1>
                </Group1309>
              </Link>
            </Frame13661>
            <Line26 src={line261} alt="Line 26" />
            <ReviewsFrame1366
              q2PoremIpsumDolo={frame13661Props.q2PoremIpsumDolo}
            />
            <Line26 src={line262} alt="Line 26" />
            <ReviewsFrame1366
              q2PoremIpsumDolo={frame13662Props.q2PoremIpsumDolo}
            />
          </Frame1367>
        </Group1225>
        <Frame1330>
          <ReviewsFrame1322
            frame13201Props={frame1322Props.frame13201Props}
            frame13202Props={frame1322Props.frame13202Props}
          />
          <Frame1329>
            <Frame1326>
              <EnterNewShortcut>{enterNewShortcut}</EnterNewShortcut>
            </Frame1326>
            <Buttons42 className={buttons4Props.className}>
              {buttons4Props.children}
            </Buttons42>
          </Frame1329>
          <Frame1328>
            <ReviewsFrame12973>{frame129731Props.children}</ReviewsFrame12973>
            <ReviewsFrame12973>{frame129732Props.children}</ReviewsFrame12973>
            <ReviewsFrame12973>{frame129733Props.children}</ReviewsFrame12973>
            <ReviewsFrame12973>{frame129734Props.children}</ReviewsFrame12973>
          </Frame1328>
        </Frame1330>
      </Frame1368>
      <ReviewsFrame1370 frame1317Props={frame1370Props.frame1317Props} />
      <ReviewsFrame6 className={frame13662Props2.className} />
    </div>
  );
}

const Frame1371 = styled.div`
  display: flex;
  margin-left: 240px;
  width: 1440px;
  height: 94px;
  position: relative;
  margin-top: 30px;
  align-items: flex-start;
  gap: 155px;
`;

const PhysicsThermodyna = styled.h1`
  ${IbmplexsansBoldShark36px}
  position: relative;
  width: 704px;
  margin-top: -1px;
  letter-spacing: -0.9px;
  line-height: normal;
`;

const Frame1369 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 30px;
  position: relative;
`;

const Frame1316 = styled.div`
  display: flex;
  width: 328px;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
  cursor: pointer;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Frame1368 = styled.div`
  display: flex;
  margin-left: 32px;
  width: 1856px;
  height: 1034px;
  position: relative;
  margin-top: 40px;
  align-items: flex-end;
  gap: 32px;
`;

const Frame1319 = styled.div`
  display: flex;
  flex-direction: column;
  width: 421px;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1318 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 950px;
  height: 1034px;
`;

const Frame1367 = styled.div`
  display: flex;
  width: 950px;
  height: 1034px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 30px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame13661 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 100px;
  position: relative;
  align-self: stretch;
`;

const Q1PoremIpsumDolo = styled.p`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

const Group1308 = styled.div`
  position: absolute;
  top: 74px;
  left: 100px;
  width: 739px;
  height: 51px;
  mix-blend-mode: multiply;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  position: relative;
  height: 51px;
`;

const Rectangle546 = styled.div`
  position: absolute;
  width: 500px;
  height: 26px;
  top: 0;
  left: 239px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle547 = styled.div`
  position: absolute;
  width: 444px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Group1309 = styled.div`
  position: absolute;
  top: 309px;
  left: 100px;
  width: 739px;
  height: 76px;
  mix-blend-mode: multiply;
  cursor: pointer;
`;

const OverlapGroup1 = styled.div`
  position: relative;
  height: 76px;
`;

const Rectangle5461 = styled.div`
  position: absolute;
  width: 392px;
  height: 26px;
  top: 0;
  left: 347px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle5471 = styled.div`
  position: absolute;
  width: 739px;
  height: 26px;
  top: 25px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Rectangle548 = styled.div`
  position: absolute;
  width: 673px;
  height: 26px;
  top: 50px;
  left: 0;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
  mix-blend-mode: multiply;
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 950px;
  height: 1px;
  object-fit: cover;
`;

const Frame1330 = styled.div`
  display: flex;
  flex-direction: column;
  width: 421px;
  align-items: flex-start;
  gap: 20px;
  padding: 30px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1329 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const EnterNewShortcut = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame1328 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

export default FeedbackWireframeTeacher2;
