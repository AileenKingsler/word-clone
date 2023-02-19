import React from 'react';

import { range } from '../../utils';

function Guess({ children }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={children ? `cell ${children[num].status}` : `cell`}
        >
          {children && children[num].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
