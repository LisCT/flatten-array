import React from 'react';

const Input = ({ clas, copy = "click me", handleSubmit, disabled }) => (
    <div className="form__content">
    <button
        className={`btn ${clas}`}
        onClick={handleSubmit}
        type="submit"
        disabled={disabled === ''}
    >
    {copy}
    </button>
    </div>
)

export default Input;
