import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";

export default function FocusAreaDialog({ handleData, colors }) {
  const [open, setOpen] = React.useState(true);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedColor, setSelectedColor] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    handleData(title, description, selectedColor);
    setTitle("");
    setDescription("");
    setSelectedColor("");
    setError(false);
  };

  const handleSubmit = () => {
    if (!title || !selectedColor) {
      setError(true);
    } else {
      handleClose();
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new focus area</DialogTitle>
        <DialogContent>
          <GroupedInputs>
            <Input
              autoFocus
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              placeholder="Enter title*"
              error={error && !title}
              required
            />
            {error && !title && (
              <ErrorMessage>Please enter a title</ErrorMessage>
            )}
            <TextArea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add short description"
            />
            <ParentColorBox>
              <div>Pick focus area color*</div>
              <SelectColorBox>
                {colors.map((color) => {
                  return (
                    <Ellipse141
                      onClick={(e) => handleColorChange(color)}
                      backgroundColor={color}
                      style={{ cursor: "pointer" }}
                    />
                  );
                })}
              </SelectColorBox>
              <ShowSelectedColor>
                SelectedColor: <Ellipse141 backgroundColor={selectedColor} />
              </ShowSelectedColor>
              {error && !selectedColor && (
                <ErrorMessage>
                  Please select a color for the focus area
                </ErrorMessage>
              )}
            </ParentColorBox>
          </GroupedInputs>
        </DialogContent>
        <Save onClick={handleSubmit}>Save focus area</Save>
      </Dialog>
    </>
  );
}
const GroupedInputs = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
`;
const Input = styled("input")`
  border: 1px solid #1e252a;
  border-radius: 8px;
  padding: 9px 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1e252a;
  width: 257px;
  height: 42px;
  box-sizing: border-box;
  font-family: "IBM Plex Sans", sans-serif;
`;

const TextArea = styled("textarea")`
  padding: 9px 12px;
  width: 257px;
  height: 80px;
  border: 1px solid #1e252a;
  border-radius: 8px;
  box-sizing: border-box;
  width: 257px;
  height: 80px;
  resize: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #1e252a;
  font-family: "IBM Plex Sans", sans-serif;
`;
const ParentColorBox = styled("div")`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #979797;
  font-family: "IBM Plex Sans", sans-serif;
`;

const SelectColorBox = styled("div")`
  box-sizing: border-box;
  border: 1px solid #1e252a;
  border-radius: 8px;
  padding: 9px 12px;
  width: 257px;
  height: fit-content;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`;

const ShowSelectedColor = styled("div")`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Save = styled("div")`
  padding: 8px 16px;
  width: 257px;
  height: 37px;
  box-sizing: border-box;
  background: #7200e0;
  border: 1px solid #7200e0;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #ffffff;
  font-family: "IBM Plex Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  margin-bottom: 12px;
  cursor: pointer;
`;

const Ellipse141 = styled("div")`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;

const ErrorMessage = styled("span")`
  color: red;
`;
