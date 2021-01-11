import React from 'react';
import {render} from 'react-dom';

function Hello() {
    return <h1 >Hello from Webpack!</h1 >;
}

render(
    <Hello />,
    document.getElementById('react-root')
);

const btn = document.getElementById('click')
btn.addEventListener('click', () => alert('You clicked the button!'))
