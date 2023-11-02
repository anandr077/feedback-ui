import arrowImg from '../../static/img/frame-1284@2x.png';
import React, * as React from 'react';
import {
  OptGroupOption,
  CustomGroupSelectDiv,
  CustomOptionDiv,
  CustomHiddenOptions,
  OptionLabel,
  CustomOpt,
  CustomOptionTitle,
  CustomOptLavel,
  ArrowDownIcon,
} from './GroupSelectStyle';
import { useState, useEffect, useRef } from 'react';

export default function GroupedSelect(props) {
  const { label, groups, onClick } = props;
  const [showOptions, setShowOptions] = useState(false);
  const [selectOption, setSelectOption] = useState('');
  const customHiddenOptionsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        customHiddenOptionsRef.current &&
        !customHiddenOptionsRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (event, option) => {
    const selectedValue = event;
    const [groupId, actualValue] = selectedValue.split('-');

    onClick(groups[groupId], actualValue);
    setSelectOption(option);
    setShowOptions(!showOptions);
  };

  return (
    <CustomGroupSelectDiv>
      <CustomOptionDiv onClick={() => setShowOptions(!showOptions)}>
        <CustomOptionTitle>
          {selectOption === ''
            ? groups && groups[0].options[0].value
            : selectOption}
        </CustomOptionTitle>
        <ArrowDownIcon>
          <img
            src={arrowImg}
            style={{ width: '15px', height: '15px' }}
            alt="arrow"
          />
        </ArrowDownIcon>
      </CustomOptionDiv>
      <CustomHiddenOptions
        ref={customHiddenOptionsRef}
        style={showOptions ? { display: 'block' } : { display: 'none' }}
      >
        {groups &&
          groups.map((group, index) => {
            const isHeading = group.label;
            return (
              <OptGroupOption key={index}>
                <CustomOptLavel>{isHeading}</CustomOptLavel>
                {group.options.map((option, idx) => (
                  <CustomOpt
                    key={idx}
                    onClick={() => {
                      handleClick(`${index}-${option.value}`, option.value);
                    }}
                  >
                    <p>{option.value}</p>
                  </CustomOpt>
                ))}
              </OptGroupOption>
            );
          })}
      </CustomHiddenOptions>
    </CustomGroupSelectDiv>
  );
}
