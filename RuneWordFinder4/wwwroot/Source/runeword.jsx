import React from 'react';

const Runeword = props => (
    <div>
        <h2>{ props.runeword.name }</h2>
        <h3>{ props.runeword.runeName }</h3>
        <div>{ props.runeword.stats.map(statLine => <div>- {statLine}</div>) }</div>
    </div>
)
export default Runeword;
