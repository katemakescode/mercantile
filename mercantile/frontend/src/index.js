import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import bookData from './book-data.json';

import Navigation from './components/Navigation';
import Classics from './components/Classics';
import Warning from './components/Warning';

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <Classics books={bookData.books} />
      <Warning />
    </StrictMode >,
    document.getElementById('react-root')
);
