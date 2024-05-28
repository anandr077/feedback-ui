import React from 'react';
import {
  ToggleContainer,
  ToggleLavel,
  ToggleInput,
  ToggleBtn,
  ToggleSwitchLabels,
} from './style';

const ToggleSwitch = ({
    text1,
    text2,
    icon1,
    icon1Active,
    icon2,
    icon2Active,
    onChangeFn,
    isChecked
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
            src={isChecked ? icon1Active : icon2Active}
            alt={isChecked ? text1 : text2}
          />
          {isChecked ? text1 : text2}
        </ToggleBtn>
        <ToggleSwitchLabels>
          <span>
            <img src={icon2} /> {text2}
          </span>
          <span>
            <img src={icon1} /> {text1}
          </span>
        </ToggleSwitchLabels>
      </ToggleLavel>
    </ToggleContainer>
  );
};

export default ToggleSwitch;
