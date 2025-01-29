import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom"; // ✅ Mock router
import RoundedDropDown from "../../components2/RoundedDropDown";

export default {
    title: "Components/Dropdowns/RoundedDropDown",
    component: RoundedDropDown,
    decorators: [
      (Story) => (
        <MemoryRouter initialEntries={["/storybook"]}>
          <Story />
        </MemoryRouter>
      ),
    ],
    argTypes: {
      menuItems: {
        control: "array",
        defaultValue: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      defaultValue: { control: "text", defaultValue: "Option 1" },
      search: { table: { disable: true } }, // ✅ Completely disable the search prop
      fullWidth: { control: "boolean", defaultValue: false },
      type: { control: "text", defaultValue: "Dropdown" },
      width: { control: "number", defaultValue: 150 },
    },
  };
  
  const Template = ({ menuItems, defaultValue, fullWidth, type, width }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
  
    const handleSelection = (dropdownType, value) => {
      setSelectedValue(value);
      alert(`Selected ${dropdownType}: ${value}`);
    };
  
    return (
      <RoundedDropDown
        menuItems={menuItems}
        defaultValue={selectedValue}
        search={false} // ✅ Force search to be disabled
        fullWidth={fullWidth}
        type={type}
        width={width}
        selectedIndex={handleSelection}
      />
    );
  };
  
  export const Default = Template.bind({});
  Default.args = {
    menuItems: ["Option 1", "Option 2", "Option 3", "Option 4"],
    defaultValue: "Option 1",
    fullWidth: false,
    type: "Dropdown",
    width: 150,
  };