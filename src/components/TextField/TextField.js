import React, { memo, useCallback } from 'react';

import './TextField.css';

const TextField = ({ value, onChange, label }) => {
  const onChangeHandler = useCallback(e => onChange(e.target.value), [onChange]);

  return (
    <div className="input-container">
      <input
        id="name"
        className="input"
        type="number"
        value={value}
        onChange={onChangeHandler}
        pattern=".+"
        required
      />
      <label className="label" htmlFor="name">
        {label}
      </label>
    </div>
  );
};

export default memo(TextField);
