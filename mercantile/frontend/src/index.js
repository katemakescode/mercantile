import React from 'react';
import {render} from 'react-dom';
import Classics from "./components/Classics";
import Warning from "./components/Warning";

window.static = '/static/';

render(
    <Classics />,
    document.getElementById('classics-root')
);

render(
    <Warning />,
    document.getElementById('warning-root')
);

const btn = document.getElementById('click')
btn.addEventListener('click', () => alert('Click logic in index.js'))
