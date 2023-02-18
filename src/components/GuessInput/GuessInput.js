import React from 'react';

function GuessInput() {
  const [value, setValue] = React.useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(value);
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
        pattern="[A-Z]{5}"
        value={value}
        onChange={(event) => {
          setValue(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
