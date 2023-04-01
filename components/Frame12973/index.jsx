import React from "react";
import RichTextComponents from "../RichTextComponents";
import RichTextComponents2 from "../RichTextComponents2";
import Frame12803 from "../Frame12803";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";

function Frame12973(props) {
  const { number, frame1284, richTextComponentsProps, sectiontitle } = props;

  return (
    <Frame1297>
      <RichTextComponents
        src={richTextComponentsProps.src}
        className={richTextComponentsProps.className}
      />
      <Frame1287>
        <Frame1283>
          <Frame1282>
            <Text9>{number}</Text9>
            <Frame1281>
              <QuestionSection>{sectiontitle}</QuestionSection>
              <RichTextComponents2 />
            </Frame1281>
          </Frame1282>
          <Frame1284 src={frame1284} alt="Frame 1284" />
        </Frame1283>
        {/* <Frame12803 className={frame12803Props.className} /> */}
      </Frame1287>
    </Frame1297>
  );
}

const Frame1297 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const Frame1287 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  position: relative;
  flex: 1;
`;

const Frame1283 = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

const Frame1282 = styled.div`
  ${IbmplexsansNormalShark20px}
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Text9 = styled.div`
  position: relative;
  width: 20px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1281 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  position: relative;
  flex: 1;
`;

const QuestionSection = styled.p`
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1284 = styled.img`
  position: relative;
  min-width: 28px;
  height: 28px;
`;

export default Frame12973;
