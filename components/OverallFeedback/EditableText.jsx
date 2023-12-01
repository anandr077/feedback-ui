import React, { useState } from 'react';
import {
    InputBox,
    ButtonsContainer,
    Button,
    OverAllCommentBox
} from './editableTextStyle'

const EditableText = ({ initialValue, handleSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);
    const [tempValue, setTempValue] = useState(initialValue);

    const handleEditClick = () => {
        setIsEditing(true);
        setTempValue(value); 
    };

    const onSave = () => {
        setIsEditing(false);
        setValue(tempValue); 
        handleSave(tempValue);
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
                    <Button onClick={handleSave} type="save">Save</Button>
                    <Button onClick={handleCancel} type="cancel">Cancel</Button>
                    </ButtonsContainer>
                </>
            ) : (
                <div>
                    {value ? (
                        <>
                            <OverAllCommentBox>{value}</OverAllCommentBox>
                            <Button onClick={handleEditClick} type="edit">Edit</Button>
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
