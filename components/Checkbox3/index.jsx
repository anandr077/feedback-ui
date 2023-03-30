import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark20px } from "../../styledMixins";

function Checkbox3(props) {
  const { className } = props;

  return (
    <Checkbox className={`checkbox-8 ${className || ""}`}>
      <Checkbox1 className="checkbox-9">
        <Rectangle43 />
        {/* <Vector className="vector-3" src="/img/vector-5@2x.png" alt="Vector" /> */}
      </Checkbox1>
      <Assignment className="assignment-4">Class Name</Assignment>
    </Checkbox>
  );
}

const Checkbox = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  flex: 1;
`;

const Checkbox1 = styled.div`
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
  top: -13755px;
  left: -1203px;
`;

const Assignment = styled.div`
  ${IbmplexsansNormalShark20px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Vector1 = styled.img`
  .checkbox-8.checkbox-10 & {
    left: -1340px;
  }
`;

const Vector2 = styled.img`
  .checkbox-8.checkbox-11 & {
    left: -1478px;
  }
`;

const Vector3 = styled.img`
  .checkbox-8.checkbox-12 & {
    left: -1615px;
  }
`;

const Vector4 = styled.img`
  .checkbox-8.checkbox-13 & {
    left: -1752px;
  }
`;

const Vector5 = styled.img`
  .checkbox-8.checkbox-14 & {
    left: -1890px;
  }
`;

const Vector6 = styled.img`
  .checkbox-8.checkbox-15 & {
    top: -13771px;
    left: 28px;
  }
`;

const Vector7 = styled.img`
  .checkbox-8.checkbox-16 & {
    top: -13771px;
    left: -129px;
  }
`;

const Vector8 = styled.img`
  .checkbox-8.checkbox-17 & {
    top: -13771px;
    left: -285px;
  }
`;

const Vector9 = styled.img`
  .checkbox-8.checkbox-18 & {
    top: -13771px;
    left: -442px;
  }
`;

const Vector10 = styled.img`
  .checkbox-8.checkbox-19 & {
    top: -13771px;
    left: -599px;
  }
`;

const Vector11 = styled.img`
  .checkbox-8.checkbox-20 & {
    top: -13771px;
    left: -755px;
  }
`;

const Vector12 = styled.img`
  .checkbox-8.checkbox-21 & {
    top: -13771px;
    left: 1826px;
  }
`;

const Vector13 = styled.img`
  .checkbox-8.checkbox-22 & {
    top: -13771px;
    left: 1598px;
  }
`;

const Vector14 = styled.img`
  .checkbox-8.checkbox-23 & {
    top: -13771px;
    left: 1369px;
  }
`;

const Vector15 = styled.img`
  .checkbox-8.checkbox-24 & {
    top: -13771px;
    left: 1141px;
  }
`;

const Vector16 = styled.img`
  .checkbox-8.checkbox-25 & {
    top: -13771px;
    left: 913px;
  }
`;

const Vector17 = styled.img`
  .checkbox-8.checkbox-26 & {
    top: -13771px;
    left: 684px;
  }
`;

export default Checkbox3;
