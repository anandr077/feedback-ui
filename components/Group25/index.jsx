import React from 'react';
import styled from 'styled-components';

function Group25(props) {
  const { src } = props;

  return (
    <Group251>
      <Vector src={src} alt="Vector" />
      <EllipseContainer>
        <Ellipse3></Ellipse3>
        <Ellipse3></Ellipse3>
        <Ellipse3></Ellipse3>
      </EllipseContainer>
    </Group251>
  );
}

const Group251 = styled.div`
  position: relative;
  min-width: 20px;
  height: 15px;
`;

const Vector = styled.img`
  position: absolute;
  width: 14px;
  height: 16px;
  top: 0;
  left: 6px;
`;

const EllipseContainer = styled.div`
  position: absolute;
  width: 5px;
  top: -2px;
  left: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 19px;
  gap: 2px;
`;

const Ellipse3 = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--black);
  border-radius: 1.5px;
  border: 2px solid;
`;

const Group252 = styled.div`
  position: relative;
  min-width: 20px;
  height: 15px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 14px;
  height: 16px;
  top: 0;
  left: 6px;
`;

const EllipseContainer1 = styled.div`
  position: absolute;
  width: 5px;
  top: -2px;
  left: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 19px;
  gap: 2px;
`;

const Ellipse31 = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--black);
  border-radius: 1.5px;
  border: 2px solid;
`;

const Group253 = styled.div`
  position: relative;
  min-width: 20px;
  height: 15px;
`;

const Vector2 = styled.img`
  position: absolute;
  width: 14px;
  height: 16px;
  top: 0;
  left: 6px;
`;

const EllipseContainer2 = styled.div`
  position: absolute;
  width: 5px;
  top: -2px;
  left: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 19px;
  gap: 2px;
`;

const Ellipse32 = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--black);
  border-radius: 1.5px;
  border: 2px solid;
`;

const Group254 = styled.div`
  position: relative;
  min-width: 20px;
  height: 15px;
`;

const Vector3 = styled.img`
  position: absolute;
  width: 14px;
  height: 16px;
  top: 0;
  left: 6px;
`;

const EllipseContainer3 = styled.div`
  position: absolute;
  width: 5px;
  top: -2px;
  left: -2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 19px;
  gap: 2px;
`;

const Ellipse33 = styled.div`
  width: 5px;
  height: 5px;
  background-color: var(--black);
  border-radius: 1.5px;
  border: 2px solid;
`;

export default Group25;
