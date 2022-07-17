/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import Redirect from 'react-router-dom';
import NavBar from '../components/NavBar';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart')
      // eslint-disable-next-line consistent-return
      .then((response) => {
        if (response.status !== 300) {
          console.warn(response.status);
          return <Redirect to="/maintenance" />;
        }
      }).catch();
  });
  return (
    <>
      <NavBar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
