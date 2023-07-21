import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px } from "../../../styledMixins";


function VericalNav2(props) {
  const { children } = props;

  return (
    <VericalNav>
      <Label>{children}</Label>
    </VericalNav>
  );
}

const VericalNav = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 38px;
`;

const Label = styled.div`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const VericalNav1 = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 38px;
`;

const Label1 = styled.div`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const VericalNav3 = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--royal-purple);
  border-radius: 38px;
`;

const Label2 = styled.div`
  ${IbmplexsansNormalWhite20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default VericalNav2;
