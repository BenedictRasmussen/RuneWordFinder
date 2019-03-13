import React from 'react';

const Runeword = props => (
    <div>
        <h2>{ props.runeword.name }</h2>
        <h3>{ props.runeword.runes.map(rune => rune.charAt(0).toUpperCase() + rune.slice(1)).join('') }</h3>
        <p><b>Equipment Type:</b> {props.runeword.runes.length} socketed { props.runeword.type }</p>
        <ul>{ props.runeword.stats.map(statLine => <li>{statLine}</li>) }</ul>
    </div>
)
export default Runeword;
