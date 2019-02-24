import * as React from 'react';
import ReactDOM from 'react-dom';

import Footer from './footer.jsx';
import Header from './header.jsx';
import Runes from './runes.jsx';

// RuneWordFinder sets up the layout of the page and adds the content.
export default class RuneWordFinder extends React.Component {
    // In the future, the content div can be swapped with a router
    render() {
        return (
            <div className="container-grid">
                <div id="header">
                    <Header></Header>
                </div>
                <div id="content">
                    <Runes />
                </div>
                <div id="footer">
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}