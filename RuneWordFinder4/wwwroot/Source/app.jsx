import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RuneWordFinder from './main.jsx';

import '../scss/layout.scss';

ReactDOM.render(
    <Main />,
    document.getElementById('runewordapp')
);

module.hot.accept();
