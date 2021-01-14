import React, {StrictMode} from 'react';
import {render} from 'react-dom';
import Navigation from "./components/Navigation";
import Classics from "./components/Classics";
import Warning from "./components/Warning";

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <Classics />
      <Warning />
    </StrictMode >,
    document.getElementById('react-root')
);
