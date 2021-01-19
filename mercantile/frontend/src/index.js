import React, {StrictMode} from 'react';
import {render} from 'react-dom';

import BookSearchResults from './components/BookSearchResults';
import BookSearch from "./components/BookSearch";
import Navigation from './components/Navigation';
import Warning from './components/Warning';

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <BookSearch />
      <BookSearchResults />
      <Warning />
    </StrictMode >,
    document.getElementById('react-root')
);
