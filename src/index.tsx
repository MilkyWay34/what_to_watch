import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const CARDS_COUNT = 5;
const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const releaseDate = new Date();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmsCount={CARDS_COUNT} title={title} genre={genre} releaseDate={releaseDate}/>
  </React.StrictMode>,
);
