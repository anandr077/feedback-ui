import React, { useState, useEffect, useRef } from 'react';
import {
    HiddenInputBox,
    InputBox,
    ButtonsContainer,
    Button,
    EditTextContainer
} from './editableTextStyle'

const EditableText = ({ initialValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [tempValue, setTempValue] = useState(initialValue);
    const textareaRef = useRef(null)


      useEffect(() => {
        if (textareaRef.current) {
          const lineHeight = 25;
          const minRows = 3;
          const maxRows = 10;
    
          const numberOfRows = Math.min(
            Math.max(
              Math.ceil(textareaRef.current.scrollHeight / lineHeight),
              minRows
            ),
            maxRows
          );
    
          const newHeight = numberOfRows * lineHeight;
          textareaRef.current.style.height = `${newHeight}px`;
        }
      }, []);

    const calculateTextareaHeight = () => {
        const lineHeight = 25; 
        const minRows = 3;
        const maxRows = 10; 
    
        const numberOfRows = Math.min(
          Math.max(Math.ceil(textareaRef.current?.scrollHeight / lineHeight), minRows),
          maxRows
        );
    
        const newHeight = numberOfRows * lineHeight;
        return `${newHeight}px`;
      };

    const handleEditClick = () => {
        setIsEditing(true);
        setTempValue(value); 
    };

    const handleSave = () => {
        setIsEditing(false);
        setValue(tempValue); 
        onSave(tempValue);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempValue(value);
    };

    const handleInputChange = (e) => {
        setTempValue(e.target.value);
    };


    return (
        <EditTextContainer>
            {isEditing ? (
                <>
                    <InputBox
                        type="text"
                        value={tempValue}
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <ButtonsContainer>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCancel} type="cancel">Cancel</Button>
                    </ButtonsContainer>
                </>
            ) : (
                <div>
                    {value ? (
                        <>
                        <HiddenInputBox
                            type="text"
                            value={tempValue}
                            onChange={handleInputChange}
                            autoFocus
                            readOnly={true}
                            style={{height: calculateTextareaHeight()}}
                            ref={textareaRef}
                        />
                            <Button onClick={handleEditClick}>Edit</Button>
                        </>
                    ) : (
                        <Button onClick={handleEditClick}>Click to Edit</Button>
                    )}
                </div>
            )}
        </EditTextContainer>
    );
};


export default EditableText;
