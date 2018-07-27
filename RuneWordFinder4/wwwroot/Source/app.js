import ES6Lib from './es6codelib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './reactcomponent';

ReactDOM.render(
    <Counter />,
    document.getElementById('basicreactcomponent')
);

/*
$('#fillthiswithjquery').html('Filled by Jquery!');
let myES6Object = new ES6Lib();
$('#fillthiswithes6lib').html(myES6Object.getData());
*/

module.hot.accept();