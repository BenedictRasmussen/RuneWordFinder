import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import RuneWordFinder from './RuneWordFinder';

ReactDOM.render(
    <RuneWordFinder />,
    document.getElementById('runewordapp')
);

module.hot.accept();