import React, { useState } from 'react';
import Frame13123 from '../Frame13123';
import styled from 'styled-components';

function CommonMistakeBox({ title, message }) {
  const sentences = message?.split('. ');

  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      {isExpanded ? (
        <Frame1313>
          <Frame1312>
            <Frame13123
              title={title}
              arrowdown2="/img/arrowup.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
          <Stats>
            <Line14 src="/img/line-14.png" alt="Line 14" />
            {sentences?.map((sentence) => {
              return <EachLine>{sentence}</EachLine>;
            })}
          </Stats>
        </Frame1313>
      ) : (
        <Frame1313>
          <Frame1312>
            <Frame13123
              title={title}
              arrowdown2="/img/arrowdown2-1@2x.png"
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </Frame1312>
        </Frame1313>
      )}
    </>
  );
}

const Frame1313 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 16px;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1312 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  align-self: stretch;
`;

const Line14 = styled.img`
  position: relative;
  align-self: stretch;
  width: 100%;
  height: 1px;
  object-fit: cover;
`;

const Stats = styled.div`
  padding: 10px 10px 0px 10px;
`;

const EachLine = styled.div`
  margin: 10px 10px 0px 20px;
`;
export default CommonMistakeBox;
