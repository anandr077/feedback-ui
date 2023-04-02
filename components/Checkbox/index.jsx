import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../../styledMixins";

function Checkbox(props) {
  const { className } = props;

  return (
    <Checkbox1 className={`checkbox ${className || ""}`}>
      <Checkbox2 className="checkbox-1">
        <Rectangle43 className="rectangle-43"></Rectangle43>
        <Vector className="vector-2" src="/img/vector-5@2x.png" alt="Vector" />
      </Checkbox2>
      <Assignment className="assignment-2">Class Name</Assignment>
    </Checkbox1>
  );
}

const Checkbox1 = styled.article`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Checkbox2 = styled.div`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Rectangle43 = styled.div`
  position: absolute;
  width: 22px;
  height: 22px;
  top: -1px;
  left: -1px;
  background-color: var(--white);
  border-radius: 6px;
  border: 1px solid;
  border-color: var(--light-mode-purple);
`;

const Vector = styled.img`
  position: absolute;
  width: 10px;
  height: 7px;
  top: -14211px;
  left: -2227px;
`;

const Assignment = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Vector1 = styled.img`
  .checkbox.checkbox-2 & {
    top: -14248px;
  }
`;

const Vector2 = styled.img`
  .checkbox.checkbox-3 & {
    top: -14285px;
  }
`;

const Vector3 = styled.img`
  .checkbox.checkbox-4 & {
    top: -14322px;
  }
`;

const Vector4 = styled.img`
  .checkbox.checkbox-5 & {
    top: -14359px;
  }
`;

const Vector5 = styled.img`
  .checkbox.checkbox-6 & {
    top: -14396px;
  }
`;

export default Checkbox;
