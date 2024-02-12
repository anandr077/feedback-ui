import React, { useEffect, useRef, useState } from 'react';
import {
  ProgressBardiv,
  ProgressContainer,
  StarImg,
  StarPart,
  StarsContainer,
  StarsPart,
  StartLevel,
} from './style';
import startColor from '../../static/img/Start-color.svg';
import startWhite from '../../static/img/Star-white.svg';

function ProgressBarComponent({ levelNumber }) {
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });
  const stepRef = useRef([]);

  useEffect(() => {
    if (stepRef.current.length > 0) {
      setMargins({
        marginLeft: stepRef.current[0].offsetWidth / 2,
        marginRight:
          stepRef.current[stepRef.current.length - 1].offsetWidth / 2,
      });
    }
  }, [stepRef.current.length]);

  const percentage =
    levelNumber <= 0 ? 0 : (((levelNumber - 1) / 4) * 100).toFixed(2);

  return (
    <>
      <StarsContainer>
        <StarsPart>
          {[...Array(5).fill(0)].map((_, index) => (
            <StarPart key={index} ref={(el) => (stepRef.current[index] = el)}>
              <StarImg
                src={index < levelNumber ? startColor : startWhite}
                width="32px"
              />
              <StartLevel>Level {index + 1}</StartLevel>
            </StarPart>
          ))}
        </StarsPart>

        <ProgressContainer
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
          }}
        >
          <ProgressBardiv style={{ width: `${percentage}%` }}></ProgressBardiv>
        </ProgressContainer>
      </StarsContainer>
    </>
  );
}

export default ProgressBarComponent;
