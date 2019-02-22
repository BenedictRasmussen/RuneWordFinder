import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RuneWordFinder from './runeWordFinder.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

ReactDOM.render(
    <RuneWordFinder />,
    document.getElementById('runewordapp')
);

module.hot.accept();