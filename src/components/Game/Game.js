import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [status, setStatus] = React.useState('running');

  const submitHandler = (guess) => {
    const newGuess = checkGuess(guess, answer);
    const nextGuessList = [...guessList, newGuess];

    setGuessList(nextGuessList);

    const doesWin = newGuess.every((letter) => letter.status === 'correct');

    if (doesWin) {
      setStatus('won');
      return;
    }

    if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost');
    }
  };

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        submitHandler={submitHandler}
        isDisabled={status !== 'running'}
      />
      {status === 'won' && <WonBanner guessesCount={guessList.length} />}
      {status === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
