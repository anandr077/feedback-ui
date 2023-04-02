import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px, IbmplexsansNormalShark14px } from "../../styledMixins";
import "./Tooltip1.css";

function Tooltip1(props) {
  const { help, tip, selectTheClassesW } = props;

  return (
    <div className="tooltip1 screen">
      <Tooltip11>
        <Frame1302>
          <Link to="/tooltip1">
            <Help src={help} alt="help" />
          </Link>
          <Tip>{tip}</Tip>
        </Frame1302>
        <SelectTheClassesW>{selectTheClassesW}</SelectTheClassesW>
      </Tooltip11>
    </div>
  );
}

const Tooltip11 = styled.div`
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

const SelectTheClassesW = styled.p`
  ${IbmplexsansNormalShark14px}
  position: relative;
  width: fit-content;
  letter-spacing: 0;
  line-height: normal;
`;

export default Tooltip1;
