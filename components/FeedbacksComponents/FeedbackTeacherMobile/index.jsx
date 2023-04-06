import React from "react";
import { Link } from "react-router-dom";
import Notifications from "../Notifications";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import ReviewsFrame129522 from "../ReviewsFrame129522";
import ReviewsFrame131722 from "../ReviewsFrame131722";
import ReviewsFrame136622 from "../ReviewsFrame136622";
import ReviewsFrame1317 from "../ReviewsFrame1317";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px,
  IbmplexsansMediumPersianIndigo20px,
  IbmplexsansNormalPersianIndigo13px,
  IbmplexsansNormalChicago13px,
} from "../../../styledMixins";
import "./FeedbackTeacherMobile.css";

function FeedbackTeacherMobile(props) {
  const {
    frame1349,
    frame5,
    physicsThermodyna,
    frame12841,
    q1PoremIpsumDolo,
    line261,
    line262,
    frame12842,
    x2023JeddleAllRightsReserved,
    mainWebsite,
    terms,
    privacy,
    breadcrumb21Props,
    breadcrumb22Props,
    frame13172Props,
    frame136621Props,
    frame136622Props,
    frame1317Props,
  } = props;

  return (
    <div className="feedback-teacher-mobile screen">
      <Frame1388>
        <Frame1387>
          <Frame1350>
            <Frame1349 src={frame1349} alt="Frame 1349" />
            <Frame5>
              <Notifications />
              <Frame51 src={frame5} alt="Frame 5" />
            </Frame5>
          </Frame1350>
          <Frame1315>
            <Breadcrumb />
            <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
            <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
          </Frame1315>
        </Frame1387>
        <Frame1386>
          <Frame1371>
            <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
            <Frame1369>
              <Link to="/students-list">
                <Frame1316>
                  <ReviewsFrame129522 />
                  <Frame1284 src={frame12841} alt="Frame 1284" />
                </Frame1316>
              </Link>
              <ReviewsFrame131722
                buttonsProps={frame13172Props.buttonsProps}
                buttons2Props={frame13172Props.buttons2Props}
              />
            </Frame1369>
          </Frame1371>
          <Frame1368>
            <Group1225>
              <Frame1367>
                <Frame1366>
                  <Q1PoremIpsumDolo>{q1PoremIpsumDolo}</Q1PoremIpsumDolo>
                  <ToremIpsumDolorSi>
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                    vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curabitur
                    tempor quis eros tempus lacinia. Nam bibendum pellentesque
                    quam a convallis. Sed ut vulputate nisi. Integer in felis
                    sed leo vestibulum venenatis. Suspendisse quis arcu sem.
                    Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
                    magna. Nam metus lacus, porttitor eu mauris a, blandit
                    ultrices nibh. Mauris sit amet magna non ligula vestibulum
                    eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget
                    mi in purus lobortis eleifend. Sed nec ante dictum sem
                    condimentum ullamcorper quis venenatis nisi. Proin vitae
                    facilisis nisi, ac posuere leo.
                  </ToremIpsumDolorSi>
                  <Group1307></Group1307>
                </Frame1366>
                <Line26 src={line261} alt="Line 26" />
                <ReviewsFrame136622
                  q2PoremIpsumDolo={frame136621Props.q2PoremIpsumDolo}
                />
                <Line26 src={line262} alt="Line 26" />
                <ReviewsFrame136622
                  q2PoremIpsumDolo={frame136622Props.q2PoremIpsumDolo}
                />
              </Frame1367>
            </Group1225>
          </Frame1368>
          <Frame1370>
            <Frame13161>
              <ReviewsFrame129522 />
              <Frame1284 src={frame12842} alt="Frame 1284" />
            </Frame13161>
            <ReviewsFrame1317
              buttonsProps={frame1317Props.buttonsProps}
              buttons2Props={frame1317Props.buttons2Props}
            />
          </Frame1370>
        </Frame1386>
      </Frame1388>
      <Frame1380>
        <X2023JeddleAllRightsReserved>
          {x2023JeddleAllRightsReserved}
        </X2023JeddleAllRightsReserved>
        <Frame6>
          <MainWebsite>{mainWebsite}</MainWebsite>
          <Terms>{terms}</Terms>
          <Terms>{privacy}</Terms>
        </Frame6>
      </Frame1380>
    </div>
  );
}

const Frame1388 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame1387 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1350 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const Frame1349 = styled.img`
  position: relative;
  flex: 1;
  min-width: 223.75px;
  height: 37.4892578125px;
  margin-left: -1.75px;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame51 = styled.img`
  position: relative;
  min-width: 48px;
  height: 48px;
  cursor: pointer;
`;

const Frame1315 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
  padding: 0px 0px 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1386 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1371 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 25px;
  position: relative;
  align-self: stretch;
`;

const PhysicsThermodyna = styled.h1`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 700;
  color: var(--dark-purple);
  font-size: var(--font-size-l);
  letter-spacing: -0.6px;
  line-height: normal;
`;

const Frame1369 = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
`;

const Frame1316 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
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
  align-items: flex-end;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Group1225 = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  min-width: 350px;
  height: 2106px;
`;

const Frame1367 = styled.div`
  display: flex;
  width: 350px;
  height: 2106px;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding: 20px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0px 4px 22px #2f1a720a;
`;

const Frame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
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

const Group1307 = styled.div`
  position: absolute;
  top: 99px;
  left: 506px;
  width: 77px;
  height: 26px;
  background-color: var(--texas);
  border: 1px dashed;
  border-color: var(--royal-purple);
`;

const Line26 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 350px;
  height: 1px;
  object-fit: cover;
`;

const Frame1370 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  position: relative;
  align-self: stretch;
`;

const Frame13161 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const Frame1380 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
`;

const X2023JeddleAllRightsReserved = styled.p`
  ${IbmplexsansNormalChicago13px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const MainWebsite = styled.div`
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame6 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Terms = styled.div`
  position: relative;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default FeedbackTeacherMobile;
