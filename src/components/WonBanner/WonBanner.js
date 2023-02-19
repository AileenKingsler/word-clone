import React from 'react';

import Banner from '../Banner/Banner';

function WonBanner({ guessesCount }) {
  return (
    <Banner variant="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {guessesCount} {guessesCount === 1 ? 'guess' : 'guesses'}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WonBanner;
