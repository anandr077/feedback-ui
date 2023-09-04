import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React, * as React from 'react';
import {
  GroupSelect,
  Optgroup,
  OptGroupOption,


  CustomGroupSelectDiv,
  CustomOptionDiv,
  CustomHiddenOptions,
  OptionLabel,
  CustomOpt,
  ArrowDownIconWithHover
} from './GroupSelectStyle'
import ArrowDownIconWithHover from './GroupSelectStyle';
import { useState } from 'react';


const dummyGroups = [
  {
    label: 'Group 1',
    options: [
      { value: 'option1', label: 'Option 1-1' },
      { value: 'option2', label: 'Option 1-2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { value: 'option3', label: 'Option 2-1' },
      { value: 'option4', label: 'Option 2-2' },
    ],
  },
];

export default function GroupedSelect(props) {
  const { label, groups, onClick } = props;
  console.log({'group:':  groups}, {"label": onClick});
  const [showOptions, setShowOptions] = useState(false)

  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const [groupId, actualValue] = selectedValue.split('-');

    onClick(groups[groupId], actualValue);
  };

  return (
    <div style={{width: '100%'}}>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">{label}</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          label="Grouping"
          onChange={handleChange}
        >
          <option aria-label="None" value="" />
          {groups ? groups.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option key={option.value} value={`${index}-${option.value}`}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          )) : 
          dummyGroups.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option  key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))  
          }
        </Select>
      </FormControl> */}
      
      {/* <GroupSelect onChange={onClick} name="GroupSelect">
        <option aria-label="None" value="">Choose Your option</option>
        {groups ?
          groups.map((group, idx) => (
            <Optgroup key={idx} label={group.label}>
              {group.options.map((option) => (
                <OptGroupOption key={option.value} value={option.value}>
                  {option.label}
                </OptGroupOption>
              ))}
            </Optgroup>
          ))
         :
         dummyGroups.map((group, index) => (
          <Optgroup key={index} label={group.label}>
            {group.options.map((option) => (
              <OptGroupOption  key={option.value} value={option.value}>
                {option.label}
              </OptGroupOption>
            ))}
          </Optgroup>
        ))
        }
      </GroupSelect> */}

      <CustomGroupSelectDiv>
          <CustomOptionDiv onClick={()=> setShowOptions(!showOptions)}>
             <p style={{whiteSpace: 'nowrap', width: '70%', userSelect: 'none'}}>Choose your option</p>
             <ArrowDownIconWithHover />
          </CustomOptionDiv>
          <CustomHiddenOptions style={showOptions ? {display: 'block'} : {display: 'none'}}>
            {
              groups ? 
              groups.map((group, idx)=>(
                <OptGroupOption key={idx}>
                    <OptionLabel>{group.lavel}</OptionLabel>
                    {
                      group.options.map((option) =>(
                        <CustomOpt key={option.value}>{option.label}</CustomOpt>
                      ))
                    }
                </OptGroupOption>
              )) :
              dummyGroups.map((group, idx)=>(
                <OptGroupOption key={idx} >
                    <OptionLabel>{group.label}</OptionLabel>
                    {
                      group.options.map((option) =>(
                        <CustomOpt key={option.value}>{option.label}</CustomOpt>
                      ))
                    }
                </OptGroupOption>
              ))
            }
          </CustomHiddenOptions>
      </CustomGroupSelectDiv>
    </div>
  );
}
