import React from "react";
import Notifications from "../Notifications";
import RichTextComponents from "../RichTextComponents";
import SubmissionGroup25 from "../SubmissionGroup25";
import RichTextComponents2 from "../RichTextComponents2";
import Buttons from "../Buttons";
import SubmissionFrame13922 from "../SubmissionFrame13922";
import styled from "styled-components";
import {
  IbmplexsansNormalBlack20px,
  IbmplexsansNormalShark20px,
  IbmplexsansNormalPersianIndigo20px,
  IbmplexsansNormalChicago14px,
} from "../../styledMixins";
import "./AssignmentTheoryTablet.css";

function AssignmentTheoryTablet(props) {
  const {
    frame1349,
    frame5,
    physicsThermodyna,
    boremIpsumDolorSi,
    line6,
    koremIpsumDolorSi,
    line7,
    time015823,
    q124,
    marks10,
    notificationsProps,
    richTextComponents1Props,
    richTextComponents2Props,
    richTextComponents3Props,
    richTextComponents4Props,
    richTextComponents5Props,
    richTextComponents6Props,
    richTextComponents7Props,
    richTextComponents8Props,
    richTextComponents9Props,
    group25Props,
    richTextComponents2Props2,
    richTextComponents10Props,
  } = props;

  return (
    <div className="assignment-theory-tablet screen">
      <Frame1350>
        <Frame1349 src={frame1349} alt="Frame 1349" />
        <Frame5>
          <Notifications src={notificationsProps.src} />
          <Frame51 src={frame5} alt="Frame 5" />
        </Frame5>
      </Frame1350>
      <Frame1401>
        <Frame1311>
          <Frame1399>
            <PhysicsThermodyna>{physicsThermodyna}</PhysicsThermodyna>
          </Frame1399>
          <Frame1400>
            <BoremIpsumDolorSi>{boremIpsumDolorSi}</BoremIpsumDolorSi>
          </Frame1400>
          <Frame1396>
            <Frame1398>
              <Frame1395>
                <Frame1397>
                  <PrimaryOptions>
                    <RichTextComponents
                      src={richTextComponents1Props.src}
                      className={richTextComponents1Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents2Props.src}
                      className={richTextComponents2Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents3Props.src}
                      className={richTextComponents3Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents4Props.src}
                      className={richTextComponents4Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents5Props.src}
                      className={richTextComponents5Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents6Props.src}
                      className={richTextComponents6Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents7Props.src}
                      className={richTextComponents7Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents8Props.src}
                      className={richTextComponents8Props.className}
                    />
                    <RichTextComponents
                      src={richTextComponents9Props.src}
                      className={richTextComponents9Props.className}
                    />
                    <SubmissionGroup25
                      dropdown1Props={group25Props.dropdown1Props}
                      dropdown2Props={group25Props.dropdown2Props}
                      dropdown3Props={group25Props.dropdown3Props}
                    />
                    <RichTextComponents2 src={richTextComponents2Props2.src} />
                    <RichTextComponents
                      src={richTextComponents10Props.src}
                      className={richTextComponents10Props.className}
                    />
                  </PrimaryOptions>
                  <Line6 src={line6} alt="Line 6" />
                </Frame1397>
                <Frame1400>
                  <KoremIpsumDolorSi>{koremIpsumDolorSi}</KoremIpsumDolorSi>
                </Frame1400>
              </Frame1395>
              <ButtonsNoBreak labels={['Previous', 'Next']}/>
            </Frame1398>
            <Frame1209>
              <Line7 src={line7} alt="Line 7" />
              <Frame12091>
                <Time015823>{time015823}</Time015823>
                <Q124>{q124}</Q124>
                <Marks10>{marks10}</Marks10>
              </Frame12091>
            </Frame1209>
          </Frame1396>
        </Frame1311>
      </Frame1401>
      <SubmissionFrame13922 />
    </div>
  );
}

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
  min-width: 857.75px;
  height: 37.48828125px;
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

const Frame1401 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 60px;
  position: relative;
  align-self: stretch;
`;

const Frame1311 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 37px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1399 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--blue-chalk-2);
  border-radius: 16px 16px 0px 0px;
  overflow: hidden;
`;

const PhysicsThermodyna = styled.p`
  ${IbmplexsansNormalPersianIndigo20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Q124 = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1400 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const BoremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const KoremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalBlack20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Time015823 = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1396 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1398 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1395 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 1px 1px 78px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--black);
`;

const Frame1397 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
`;

const PrimaryOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px 8px 0px 0px;
`;

const Line6 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 822px;
  height: 1px;
  object-fit: cover;
`;

const Frame1209 = styled.div`
  display: flex;
  flex-direction: column;
  height: 58px;
  align-items: center;
  gap: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 0px 0px 16px 16px;
`;

const Line7 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 904px;
  height: 1px;
  margin-top: -1px;
  object-fit: cover;
`;

const Frame12091 = styled.div`
  ${IbmplexsansNormalChicago14px}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0px 40px;
  position: relative;
  align-self: stretch;
`;

const Marks10 = styled.div`
  position: relative;
  flex: 1;
  margin-top: -1px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
`;

export default AssignmentTheoryTablet;
