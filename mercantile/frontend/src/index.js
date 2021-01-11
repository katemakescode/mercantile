import React from 'react';
import {render} from 'react-dom';
import Button from 'react-bootstrap/Button';

function Warning() {
    return (<>
        <div className="col col-md-9 mx-auto" >
            <h3 >WARNING</h3 >
            <h5 className="text my-4 px-1" >
                This bookstore, despite appearances, sells no books.
            </h5 >
            <Button variant="outline-primary" id="click" className="mt-4" >Clickety</Button >
        </div >
    </>);
}

render(
    <Warning />,
    document.getElementById('react-root')
);

const btn = document.getElementById('click')
btn.addEventListener('click', () => alert('Click logic in index.js'))
