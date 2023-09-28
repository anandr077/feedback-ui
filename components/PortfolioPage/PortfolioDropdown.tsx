import React from 'react';
import styled from 'styled-components';


const PortfolioDropdown = ({name, options, onChange}) => {
    const handleOptionChange = (event) =>{
        const selectedOption = event.target.value;
        onChange(selectedOption)
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


const SelectStyle = styled.select`
  min-width: 78px;
  border-radius: 8px;
  border: 1px solid #f2e6fe;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(48, 27, 114, 0.07);
  padding: 12px;
  outline: none;
  cursor: pointer;

  @media (max-width: 576px) {
    flex: 1;
  }
`;
