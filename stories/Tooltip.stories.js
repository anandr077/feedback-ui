import React from "react";
import QuestionTooltip from "../components2/QuestionTooltip";
import sampleImage from "../static/img/ai.svg"; 

export default {
  title: "Components/Tooltips/QuestionTooltip",
  component: QuestionTooltip,
  argTypes: {
    text: { control: "text", defaultValue: "This is a tooltip" },
    img: { control: "text", defaultValue: sampleImage },
    onClickFn: { action: "clicked" }, 
  },
};

const Template = ({ text, img, onClickFn }) => (
  <QuestionTooltip text={text} img={img} onClickFn={onClickFn} />
);

export const Default = Template.bind({});
Default.args = {
  text: "This is a tooltip",
  img: sampleImage,
};
