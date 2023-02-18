import React from 'react';

function GuessInput({ addGuessToList }) {
  const [value, setValue] = React.useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    addGuessToList(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={value}
        onChange={(event) => {
          setValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
