import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <Logo1>
      <Union src="/img/union@2x.png" alt="Union" />
      <VectorContainer>
        <Vector src="/img/vector@2x.png" alt="Vector" />
        <Vector1 src="/img/vector-1@2x.png" alt="Vector" />
        <Vector2 src="/img/vector-2@2x.png" alt="Vector" />
      </VectorContainer>
    </Logo1>
  );
}

const Logo1 = styled.div`
  position: relative;
  min-width: 138.0001220703125px;
  height: 33.98849868774414px;
`;

const Union = styled.img`
  position: absolute;
  width: 83px;
  height: 27px;
  top: 3px;
  left: 55px;
`;

const VectorContainer = styled.div`
  position: absolute;
  width: 50px;
  height: 37px;
  top: -2px;
  left: -2px;
`;

const Vector = styled.img`
  position: absolute;
  width: 27px;
  height: 20px;
  top: 17px;
  left: 8px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 50px;
  height: 33px;
  top: 0;
  left: 0;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 37px;
  height: 24px;
  top: 6px;
  left: 5px;
`;

const Logo2 = styled.div`
  position: relative;
  min-width: 138.0001220703125px;
  height: 33.98849868774414px;
`;

const Union1 = styled.img`
  position: absolute;
  width: 83px;
  height: 27px;
  top: 3px;
  left: 55px;
`;

const VectorContainer1 = styled.div`
  position: absolute;
  width: 50px;
  height: 37px;
  top: -2px;
  left: -2px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 27px;
  height: 20px;
  top: 17px;
  left: 8px;
`;

const Vector4 = styled.img`
  position: absolute;
  width: 50px;
  height: 33px;
  top: 0;
  left: 0;
`;

const Vector5 = styled.img`
  position: absolute;
  width: 37px;
  height: 24px;
  top: 6px;
  left: 5px;
`;

export default Logo;
