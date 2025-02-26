import React, { useState } from "react";
import GeneralPopup from '../../components/GeneralPopup';

export default {
    title: "Components/Popups/GeneralPopup",
    component: GeneralPopup,
    argTypes: {
      title: { control: "text", defaultValue: "Confirmation" },
      textContent: { control: "text", defaultValue: "Are you sure you want to proceed?" },
      buttonText: { control: "text", defaultValue: "Confirm" },
      closeBtnText: { control: "text", defaultValue: "Cancel" },
      confirmationMessage: { control: "text", defaultValue: "This action cannot be undone." },
      warningMessage: { control: "text", defaultValue: "" },
      smartAnnotation: { control: "boolean", defaultValue: false },
      isOpen: { control: "boolean", defaultValue: true }, // Manages popup open state
    },
  };
  
  const Template = ({ isOpen, ...args }) => {
    const [open, setOpen] = useState(isOpen);
  
    return (
      <GeneralPopup
        {...args}
        open={open}
        hidePopup={() => setOpen(false)}
        cancelPopup={() => setOpen(false)}
        confirmButtonAction={() => alert("Confirmed")}
        createSmartAnnotationHandler={(text) => alert(`Annotation Created: ${text}`)}
      />
    );
  };
  
  export const Default = Template.bind({});
  Default.args = {
    isOpen: true,
    title: "Confirmation",
    textContent: "Are you sure you want to proceed?",
    buttonText: "Confirm",
    closeBtnText: "Cancel",
    confirmationMessage: "This action cannot be undone.",
    warningMessage: "",
    smartAnnotation: false,
  };