import React, { useState } from 'react';
import {
    HiddenInputBox,
    InputBox,
    ButtonsContainer,
    Button,
    OverAllCommentBox
} from './editableTextStyle'

const EditableText = ({ initialValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [tempValue, setTempValue] = useState(initialValue);

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
        <div>
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
                        />
                            {/* <OverAllCommentBox>{value}</OverAllCommentBox> */}
                            <Button onClick={handleEditClick}>Edit</Button>
                        </>
                    ) : (
                        <Button onClick={handleEditClick}>Click to Edit</Button>
                    )}
                </div>
            )}
        </div>
    );
};


export default EditableText;
