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
  const [error, setError] = React.useState("");

  const handleClose = () => {
    setOpen(false);
    handleData(title, description, selectedColor);
    setTitle("");
    setDescription("");
    setSelectedColor("");
    setError("");
  };

  const handleSubmit = () => {
    if (!title || !selectedColor) {
      setError("Please fill in all the required fields.");
      alert("Please fill in all the required fields.");
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

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
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
            <TextArea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Add short description"
            />
            <Select
              value={selectedColor}
              onChange={handleColorChange}
              error={error && !selectedColor}
            >
              <option value="">Pick a colour for focus area*</option>
              {colors.map((color) => (
                <option key={color.value} value={color.value}>
                  <Ellipse141 backgroundColor={color.value}/>
                  {color.name}
                </option>
              ))}
            </Select>
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

const Select = styled("select")`
  border: 1px solid #1e252a;
  border-radius: 8px;
  padding: 9px 12px;
  width: 257px;
  height: 42px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #979797;
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
`;

const Ellipse141 = styled("span")`
  position: relative;
  min-width: 20px;
  height: 20px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
`;
