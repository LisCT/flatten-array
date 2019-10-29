import React from 'react';

const Input = ({ copy = "click me", handleSubmit }) => (
    <div>
        <button
            onClick={handleSubmit}
        >
        {copy}
        </button>
    </div>
)

export default Input;
