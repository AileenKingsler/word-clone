import React from 'react';

import { range } from '../../utils';

function Guess({ children }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className="cell">
          {children && children[num]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
