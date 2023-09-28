import React from 'react';

import {
  SelectStyle
} from './PortfolioDropdownStyle';


const PortfolioDropdown = ({name, options, onChange}) => {
    const handleOptionChange = (event) =>{
        const selectedOption = event.target.value;
        
        if(typeof onChange === 'function'){
          onChange(selectedOption)
        }
    }

  return (
    <SelectStyle name={name} onChange={handleOptionChange} >
      <option value="" disabled selected hidden>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </option>
      {options.map((option: string, idx: number)=>(
        <option key={idx} value={option}>
            {option}
        </option>
      ))}
    </SelectStyle>
  );
};

export default PortfolioDropdown;



