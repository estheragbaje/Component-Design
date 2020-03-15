import React from 'react';
import '../App.css';

function Toggle(props) {
  return (
    <label className="label">
      <div className="toggle-container">
        <div className="toggle-switch"></div>
      </div>
      <input id="toggle" name="toggle" type="checkbox" />
    </label>
  );
}

export default Toggle;
