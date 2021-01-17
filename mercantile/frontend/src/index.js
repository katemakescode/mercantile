import React, {StrictMode} from 'react';
import {render} from 'react-dom';

import Classics from './components/Classics';
import BookSearch from "./components/BookSearch";
import Navigation from './components/Navigation';
import Warning from './components/Warning';

import bookData from './book-data.json';

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <BookSearch />
      <Classics books={bookData.books} />
      <Warning />
    </StrictMode >,
    document.getElementById('react-root')
);
