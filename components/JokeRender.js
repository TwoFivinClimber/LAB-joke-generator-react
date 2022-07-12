import React from 'react';
import PropTypes from 'prop-types';

export default function JokeRender({ buttonText, jokeText }) {
  return (
    <>
      <h1>{buttonText === 'Get a Joke' ? "The Joke's On You" : '' }</h1>
      <h1>{jokeText.setup}</h1>
      <h4>{buttonText === 'Get Another Joke' ? jokeText.delivery : ''}</h4>
    </>
  );
}

JokeRender.propTypes = {
  jokeText: PropTypes.shape({
    setup: PropTypes.string,
    delivery: PropTypes.string,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
};
