import React, {StrictMode} from "react";
import {render} from "react-dom";

import Books from "./components/books/Books";
import Navigation from "./components/Navigation";
import Warning from "./components/Warning";

render(
    <Navigation url={window.url} />,
    document.getElementById('navbar-root')
);

render(
    <StrictMode >
      <Books />
    </StrictMode >,
    document.getElementById('react-root')
);

render(
    <Warning />,
    document.getElementById('footer-root')
);
