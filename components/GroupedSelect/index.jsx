import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import React, * as React from 'react';
import {
  OptGroupOption,
  CustomGroupSelectDiv,
  CustomOptionDiv,
  CustomHiddenOptions,
  OptionLabel,
  CustomOpt,
  ArrowDownIconWithHover,
  CustomOptionTitle,
  CustomOptLavel
} from './GroupSelectStyle'
import ArrowDownIconWithHover from './GroupSelectStyle';
import { useState} from 'react';


export default function GroupedSelect(props) {
  const { label, groups, onClick } = props;
  console.log({'group:':  groups}, {"label": onClick});
  const [showOptions, setShowOptions] = useState(false)
  const [selectOption, setSelectOption] = useState('Choose your option')



  
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
          {groups && groups.map((group, index) => (
            <optgroup key={index} label={group.label}>
              {group.options.map((option) => (
                <option key={option.value} value={`${index}-${option.value}`}>
                  {option.label}
                </option>
              ))}
            </optgroup>
          ))}
        </Select>
      </FormControl> */}
      

      <CustomGroupSelectDiv>
          <CustomOptionDiv onClick={()=> setShowOptions(!showOptions)}>
             <CustomOptionTitle>{selectOption}</CustomOptionTitle>
             <ArrowDownIconWithHover />
          </CustomOptionDiv>
          <CustomHiddenOptions style={showOptions ? {display: 'block'} : {display: 'none'}}>
            {
              groups &&
              groups.map((group, idx)=>(
                <OptGroupOption key={idx}>
                    <OptionLabel>{group.lavel}</OptionLabel> 
                    {
                      group.options.map((option, index) =>(
                        <CustomOpt 
                        key={index}
                        onClick={()=> {
                          setSelectOption(option.label)
                          setShowOptions(!showOptions)
                        }}
                        >
                          <CustomOptLavel>{option.label}</CustomOptLavel>
                          <p>{option.value}</p>
                        </CustomOpt>
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
