import React from 'react';

import Footer from './footer.jsx';
import Header from './header.jsx';
import RuneSearch from './runeSearch/runeSearch.jsx';

// Main sets up the layout of the page and adds the content.
const Main = () => (
    <div className="container-grid">
        <div id="header">
            <Header></Header>
        </div>
        <div id="content">
            <RuneSearch></RuneSearch>
        </div>
        <div id="footer">
            <Footer></Footer>
        </div>
    </div>
)
export default Main;
