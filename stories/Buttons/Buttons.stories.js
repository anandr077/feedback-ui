import React from "react"; 
import AiButton from "../../components2/Buttons/AiButton";
import CloseButton from "../../components2/Buttons/CloseButton";
import GrayBackgroundBtn from "../../components2/Buttons/GrayBackgroundBtn";
import NoBackgroundAndBorderBtn from "../../components2/Buttons/NoBackground&BorderBtn";
import NoBgRoundedBlackBorder from "../../components2/Buttons/NoBgRoundedBlackBorder";
import OutlineBtn from "../../components2/Buttons/OutlineBtn";
//import RectangularBigBtn from "../components2/Buttons/RectangularBigBtn";
import RectangularBigBtn2 from "../../components2/Buttons/RectangularBigBtn2";
import RoundedBorderLeftIconBtn from "../../components2/Buttons/RoundedBorderLeftIconBtn";
import RoundedBorderSubmitBtn from "../../components2/Buttons/RoundedBorderSubmitBtn";
import TransparentbigBtn from "../../components2/Buttons/TransparentbigBtn";

export default {
  title: "Components/Buttons",
  argTypes: {
    buttonType: {
      control: "select",
      options: [
        "AiButton",
        "CloseButton",
        "GrayBackgroundBtn",
        "NoBackgroundAndBorderBtn",
        "NoBgRoundedBlackBorder",
        "OutlineBtn",
    
        "RectangularBigBtn2",
        "RoundedBorderLeftIconBtn",
        "RoundedBorderSubmitBtn",
        "TransparentbigBtn",
      ],
    },
    text: { control: "text", defaultValue: "Click Me" },
    disabled: { control: "boolean", defaultValue: false },
    leftIcon: { control: "text", defaultValue: "" },
    rightIcon: { control: "text", defaultValue: "" },
  },
};

const Template = ({ buttonType, text, leftIcon, rightIcon, disabled }) => {
  const components = {
    AiButton,
    CloseButton,
    GrayBackgroundBtn,
    NoBackgroundAndBorderBtn,
    NoBgRoundedBlackBorder,
    OutlineBtn,
  
    RectangularBigBtn2,
    RoundedBorderLeftIconBtn,
    RoundedBorderSubmitBtn,
    TransparentbigBtn,
  };

  const ButtonComponent = components[buttonType];

  return (
    <ButtonComponent
      buttonText={"Button text"}
      text={"Button text"}
      btnText={"Button text"}
      isDisabled={disabled}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onClickFn={() => alert(`${text} Clicked`)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  buttonType: "AiButton",
};
