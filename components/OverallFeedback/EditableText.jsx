import React, { useState } from 'react';

const EditableText = ({ initialValue }) => {
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
