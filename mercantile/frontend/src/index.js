import React, {StrictMode} from 'react';
import {render} from 'react-dom';

import Classics from './components/Classics';
import Masthead from "./components/Masthead";
import Navigation from './components/Navigation';
import Warning from './components/Warning';

import bookData from './book-data.json';

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <Masthead />
      <Classics books={bookData.books} />
      <Warning />
    </StrictMode >,
    document.getElementById('react-root')
);
