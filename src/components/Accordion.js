import React from 'react';

function Accordion() {
  return (
    <div>
      <ul role="list" aria-roledescription="accordion">
        <li>
          <details>
            <summary>Meat</summary>
            <p>Here is my content</p>
          </details>
        </li>
        <li>
          <details>
            <summary>Meat</summary>
            <p>Here is my content</p>
          </details>
        </li>
      </ul>
    </div>
    
  );
}

export default Accordion;
