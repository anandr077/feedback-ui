import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  IbmplexsansNormalPersianIndigo14px,
  IbmplexsansNormalShark14px,
} from "../../styledMixins";
import "./Tooltip2.css";

function Tooltip2(props) {
  const { help, tip, byDefaultTheTeach } = props;

  return (
    <div className="tooltip2 screen">
      <Tooltip21>
        <Frame1302>
          <Link to="/tooltip2">
            <Help src={help} alt="help" />
          </Link>
          <Tip>{tip}</Tip>
        </Frame1302>
        <ByDefaultTheTeach>{byDefaultTheTeach}</ByDefaultTheTeach>
      </Tooltip21>
    </div>
  );
}

const Tooltip21 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  padding: 12px;
  background-color: var(--white);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 10px #7200e01a;
`;

const Frame1302 = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  position: relative;
  align-self: stretch;
`;

const Help = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
  cursor: pointer;
`;

const Tip = styled.div`
  ${IbmplexsansNormalPersianIndigo14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ByDefaultTheTeach = styled.p`
  ${IbmplexsansNormalShark14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default Tooltip2;
