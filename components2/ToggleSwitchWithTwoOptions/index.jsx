import React from 'react';
import {
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
} from './style';

const ToggleSwitchWithTwoOptions = ({
  text1,
  text2,
  icon1,
  icon1Active,
  icon2,
  icon2Active,
  onChangeFn,
  isChecked,
}) => {
  return (
    <ToggleContainer>
      <ToggleLavel>
        <ToggleInput
          checked={isChecked}
          onChange={() => onChangeFn()}
          type="checkbox"
        />
        <ToggleBtn>
          <img
            src={isChecked ? icon2Active : icon1Active}
            alt={isChecked ? text2 : text1}
          />
          {isChecked ? text2 : text1}
        </ToggleBtn>
        <ToggleSwitchLabels>
          <span>
            <img src={icon1} /> {text1}
          </span>
          <span>
            <img src={icon2} /> {text2}
          </span>
        </ToggleSwitchLabels>
      </ToggleLavel>
    </ToggleContainer>
  );
};

export default ToggleSwitchWithTwoOptions;
