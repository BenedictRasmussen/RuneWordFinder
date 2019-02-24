import * as React from 'react';
import ReactDOM from 'react-dom';

import Runes from './runes.jsx';

// RuneWordFinder sets up the layout of the page and adds the content.
export default class RuneWordFinder extends React.Component {
    render() {
        return (
            <div className="container-grid">
                <Runes />
            </div>
        );
    }
}