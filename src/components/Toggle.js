import React from 'react';
import '../App.css';

function Toggle(props) {
  return (
    <form>
      <div className="toggle-container">
        <div className="toggle-switch"></div>
      </div>
      <input type="checkbox" />
    </form>
  );
}

export default Toggle;
