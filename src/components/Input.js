import React from 'react';

const Input = ({ handleChange, value, name }) => (
    <div className="form__content">
        <input 
            type="text"
            onChange={handleChange}
            value={value}
            name={name}
        />
    </div>
)

export default Input;
