import { useState } from 'react';

function Home() {
  const [buttonText] = useState('Get a Joke');
  const [jokeText] = useState('The Joke is On You');

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '450px',
        margin: '0 auto',
      }}
    >
      <h1>{jokeText}</h1>
      <button type="button">{buttonText}</button>
    </div>
  );
}

export default Home;
