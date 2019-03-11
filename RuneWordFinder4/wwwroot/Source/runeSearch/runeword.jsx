import React from 'react';

const Runeword = props => (
    <div>
        <h2>{ props.runeword.name }</h2>
        <h3>{ props.runeword.runeName }</h3>
        <ul>{ props.runeword.stats.map(statLine => <li>{statLine}</li>) }</ul>
    </div>
)
export default Runeword;
