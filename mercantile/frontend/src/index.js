import React from 'react';
import {render} from 'react-dom';

function Hello() {
    return <h1 >Hello!</h1 >;
}

render(
    <Hello />,
    document.getElementById('react-root')
);
