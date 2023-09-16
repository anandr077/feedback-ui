import React from 'react';
import Frame1441 from '../Frame1441';
import styled from 'styled-components';

function Checkbox(props) {
  const { className, frame1441Props } = props;

  return (
    <Checkbox1 className={`checkbox-1 ${className || ''}`}>
      <Checkbox2 className="checkbox-2">
        <Rectangle43 className="rectangle-43"></Rectangle43>
        <Vector className="vector" src="/img/vector@2x.png" alt="Vector" />
      </Checkbox2>
      <Frame1441 className={frame1441Props.className}>
        {frame1441Props.children}
      </Frame1441>
    </Checkbox1>
  );
}

const Checkbox1 = styled.article`
  display: flex;
  align-items: center;
  gap: 8px;
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
  top: -4781px;
  left: -4948px;
`;

const Vector1 = styled.img`
  .checkbox-1.checkbox-3 & {
    top: -4813px;
  }
`;

const Vector2 = styled.img`
  .checkbox-1.checkbox-4 & {
    top: -4845px;
  }
`;

const Vector3 = styled.img`
  .checkbox-1.checkbox-5 & {
    top: -4877px;
  }
`;

const Vector4 = styled.img`
  .checkbox-1.checkbox-6 & {
    top: -4909px;
  }
`;

const Vector5 = styled.img`
  .checkbox-1.checkbox-7 & {
    top: -4941px;
  }
`;

export default Checkbox;
