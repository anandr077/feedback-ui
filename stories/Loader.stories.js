import React from "react";
import Loader from "../components/Loader";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {
    isVisible: { control: "boolean", defaultValue: true },
  },
};

const Template = ({ isVisible }) => {
  return isVisible ? <Loader /> : null;
};

export const Default = Template.bind({});
Default.args = {
  isVisible: true,
};
