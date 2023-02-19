import React from 'react';

const keyboardLetters = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function Keyboard({ lettersStatus }) {
  return (
    <div className="keyboard">
      {keyboardLetters.map((row, index) => (
        <div className="keyboard__row" key={index}>
          {row.map((letter) => (
            <div
              className={
                lettersStatus[letter]
                  ? `keyboard__letter ${lettersStatus[letter]}`
                  : `keyboard__letter`
              }
              key={letter}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
