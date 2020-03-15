import React from 'react';

function NumberInput(props) {
  return (
    <label className="label">
      <div className="flex">
        <div className="number-input">-</div>
        <div className="number-display">0</div>
        <div className="number-input">+</div>
      </div>
      <input type="number" name="number-input" />
    </label>
  );
}

export default NumberInput;
