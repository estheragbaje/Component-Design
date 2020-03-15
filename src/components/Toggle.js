import React from 'react';
import '../App.css';

function Toggle(props) {
  return (
    <label className="toggle-label">
      <div className="toggle-container">
        <div className="toggle-switch"></div>
      </div>
      <input type="checkbox" />
    </label>
  );
}

export default Toggle;
