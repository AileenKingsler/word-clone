import React from 'react';

function GuessInput({ submitHandler, isDisabled }) {
  const [value, setValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    submitHandler(value);
    setValue('');
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={isDisabled}
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
