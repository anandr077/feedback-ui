import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumPersianIndigo20px } from "../../../styledMixins";


function VericalNav(props) {
  const { children } = props;

  return (
    <VericalNav1>
      <Label>{children}</Label>
    </VericalNav1>
  );
}

const VericalNav1 = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--white-pointer);
  border-radius: 38px;
`;

const Label = styled.div`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const VericalNav2 = styled.article`
  display: flex;
  width: 245px;
  align-items: flex-start;
  gap: 10px;
  padding: 16px 24px;
  position: relative;
  background-color: var(--white-pointer);
  border-radius: 38px;
`;

const Label1 = styled.div`
  ${IbmplexsansMediumPersianIndigo20px}
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
  background-color: var(--white-pointer);
  border-radius: 38px;
`;

const Label2 = styled.div`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default VericalNav;
