import React, { useState } from 'react';

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
                    <input
                        type="text"
                        value={tempValue}
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
            ) : (
                <div>
                    {value ? (
                        <>
                            {value}
                            <button onClick={handleEditClick}>Edit</button>
                        </>
                    ) : (
                        <button onClick={handleEditClick}>Click to Edit</button>
                    )}
                </div>
            )}
        </div>
    );
};

export default EditableText;
