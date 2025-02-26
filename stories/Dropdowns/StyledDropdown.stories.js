import React, { useState } from "react";
import { MemoryRouter } from "react-router-dom";
import StyledDropDown from "../../components2/StyledDropDown";

export default {
  title: "Components/Dropdowns/StyledDropDown",
  component: StyledDropDown,
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
      defaultValue: [
        { id: 1, title: "Option 1" },
        { id: 2, title: "Option 2" },
        { id: 3, title: "Option 3" },
      ],
    },
    selectedIndex: { control: "number", defaultValue: 0 },
    showAvatars: { control: "boolean", defaultValue: false },
    search: { control: "boolean", defaultValue: false },
    group: { control: "boolean", defaultValue: false },
    independent: { control: "boolean", defaultValue: false },
    showImage: { control: "boolean", defaultValue: false },
    fullWidth: { control: "boolean", defaultValue: false },
    width: { control: "number", defaultValue: 150 },
  },
};

const Template = ({
  menuItems,
  selectedIndex,
  showAvatars,
  search,
  group,
  independent,
  showImage,
  fullWidth,
  width,
}) => {
  const [selectedValue, setSelectedValue] = useState(selectedIndex);

  const handleSelection = (selectedItem) => {
    setSelectedValue(selectedItem);
    alert(`Selected: ${selectedItem.title}`);
  };

  return (
    <StyledDropDown
      menuItems={menuItems}
      selectedIndex={selectedValue}
      showAvatars={showAvatars}
      search={search}
      group={group}
      independent={independent}
      showImage={showImage}
      fullWidth={fullWidth}
      width={width}
      onItemSelected={handleSelection}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  menuItems: [
    { id: 1, title: "Option 1" },
    { id: 2, title: "Option 2" },
    { id: 3, title: "Option 3" },
  ],
  selectedIndex: 0,
  showAvatars: false,
  search: false,
  group: false,
  independent: false,
  showImage: false,
  fullWidth: false,
  width: 150,
};
