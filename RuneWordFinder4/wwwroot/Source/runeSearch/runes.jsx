import React from 'react'
import Rune from './rune.jsx'

const Runes = props => {
    console.log(props.runes)
    let runeGroupA = props.runes.filter(rune => rune.level > 0 && rune.level <= 21);
    let runeGroupB = props.runes.filter(rune => rune.level > 21 && rune.level <= 41);
    let runeGroupC = props.runes.filter(rune => rune.level > 41 && rune.level <= 61);
    let runeGroupD = props.runes.filter(rune => rune.level > 61);

    return (
        <div>
            <h3>Runes lvl 1 - 21</h3>
            <div>
                {
                    runeGroupA.map(rune =>
                           <Rune rune={ rune } handleCheckboxChange={ props.toggleCheckbox } key={ rune.name }></Rune>)
                }
            </div>
            <h3>Runes lvl 22 - 41</h3>
            <div>
                {
                    runeGroupB.map(rune =>
                            <Rune rune={ rune } handleCheckboxChange={ props.toggleCheckbox } key={ rune.name }></Rune>)
                }
            </div>
            <h3>Runes lvl 42 - 61</h3>
            <div>
                {
                    runeGroupC.map(rune =>
                            <Rune rune={ rune } handleCheckboxChange={ props.toggleCheckbox } key={ rune.name }></Rune>)
                }
            </div>
            <h3>Runes lvl 61+</h3>
            <div>
                {
                    runeGroupD.map(rune =>
                            <Rune rune={ rune } handleCheckboxChange={ props.toggleCheckbox } key={ rune.name }></Rune>)
                }
            </div>
        </div>
    )
}
export default Runes;
