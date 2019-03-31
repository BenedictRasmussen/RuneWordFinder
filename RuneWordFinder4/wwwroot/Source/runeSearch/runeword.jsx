import React from 'react';

const Runeword = props => (
    <div className="runeword">
        <h1>{ props.runeword.name }</h1>
        <h2>{ props.runeword.runes.map(rune => rune.charAt(0).toUpperCase() + rune.slice(1)).join(' ') }</h2>
        <p><b>Equipment Type:</b> {props.runeword.runes.length} socketed { props.runeword.type }</p>
        <ul>{ props.runeword.stats.map(statLine => <li>{statLine}</li>) }</ul>
    </div>
)
export default Runeword;
