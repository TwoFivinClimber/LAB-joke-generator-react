import { useState } from 'react';
import getJoke from '../api/jokeData';
import JokeRender from '../components/JokeRender';

function Home() {
  const [buttonText, setButtonText] = useState('Get a Joke');
  const [jokeText, setJokeText] = useState({});

  const changeButton = (str) => {
    setButtonText(str);
  };

  const jokeStart = () => {
    getJoke().then((jokeObj) => {
      setJokeText({
        setup: jokeObj.setup,
        delivery: jokeObj.delivery,
      });
      changeButton('Get The Punchline');
    });
  };

  return (
    <div className="text-center d-flex flex-column justify-content-center align-content-center">
      <JokeRender jokeText={jokeText} buttonText={buttonText} />
      <button type="button" onClick={buttonText !== 'Get The Punchline' ? jokeStart : () => changeButton('Get Another Joke')}>{buttonText}</button>
    </div>
  );
}

export default Home;
