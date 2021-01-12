import React from 'react';
import {render} from 'react-dom';
import Warning from "./components/Warning";

render(
    <Warning />,
    document.getElementById('react-root')
);

const btn = document.getElementById('click')
btn.addEventListener('click', () => alert('Click logic in index.js'))
