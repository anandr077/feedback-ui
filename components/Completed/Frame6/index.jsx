import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo13px } from "../styledMixins";


function Frame6(props) {
  const { className } = props;

  return (
    <Frame61 className={`frame-6-5 ${className || ""}`}>
      <MainWebsite className="main-website">Main Website</MainWebsite>
      <MainWebsite className="terms">Terms</MainWebsite>
      <MainWebsite className="privacy">Privacy</MainWebsite>
    </Frame61>
  );
}

const Frame61 = styled.div`
  ${IbmplexsansNormalPersianIndigo13px}
  display: flex;
  position: relative;
  width: fit-content;
  align-items: flex-start;
  gap: 28px;
`;

const MainWebsite = styled.div`
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame6;
