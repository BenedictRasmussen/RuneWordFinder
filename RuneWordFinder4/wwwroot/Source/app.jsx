import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RuneWordFinder from './runeWordFinder.jsx';

import '../scss/layout.scss';

ReactDOM.render(
    <RuneWordFinder />,
    document.getElementById('runewordapp')
);

module.hot.accept();