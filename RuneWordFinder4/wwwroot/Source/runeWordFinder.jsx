import React from 'react';

import Footer from './footer.jsx';
import Header from './header.jsx';
import Runes from './runes.jsx';

// RuneWordFinder sets up the layout of the page and adds the content.
const RuneWordFinder = () => (
    <div className="container-grid">
        <div id="header">
            <Header></Header>
        </div>
        <div id="content">
            <Runes/>
        </div>
        <div id="footer">
            <Footer></Footer>
        </div>
    </div>
)
export default RuneWordFinder;
