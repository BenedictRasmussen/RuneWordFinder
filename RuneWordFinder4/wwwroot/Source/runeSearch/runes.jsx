import React from 'react'
import Rune from './rune.jsx'

const Runes = props => {
    return props.runes.map(
        rune => <Rune rune={rune} handleCheckboxChange={ props.toggleCheckbox } key={ rune.name } />
    )
}

export default Runes;
