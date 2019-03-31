import React from 'react'
import Rune from './rune.jsx'

const Runes = props => {
    console.log(props.runes)
    let runeGroupA = props.runes.filter(rune => rune.level > 0 && rune.level <= 19);
    let runeGroupB = props.runes.filter(rune => rune.level > 19 && rune.level <= 39);
    let runeGroupC = props.runes.filter(rune => rune.level > 39 && rune.level <= 59);
    let runeGroupD = props.runes.filter(rune => rune.level > 59);

    return (
        <div>
        <div className="rune-row">
            <div className="rune-col">
                <h3>Runes lvl 0 - 19</h3>
                {
                    runeGroupA.map(rune =>
                           <Rune rune={ rune } key={ rune.name } handleCheckboxChange={ props.toggleCheckbox }></Rune>)
                }
            </div>
            <div className="rune-col">
                <h3 >Runes lvl 19 - 39</h3>
                {
                    runeGroupB.map(rune =>
                            <Rune rune={ rune } key={ rune.name } handleCheckboxChange={ props.toggleCheckbox }></Rune>)
                }
            </div>
        </div>
        <div className="rune-row">
            <div className="rune-col">
                <h3>Runes lvl 39 - 59</h3>
                {
                    runeGroupC.map(rune =>
                            <Rune rune={ rune } key={ rune.name } handleCheckboxChange={ props.toggleCheckbox }></Rune>)
                }
            </div>
            <div className="rune-col">
                <h3>Runes lvl 59+</h3>
                {
                    runeGroupD.map(rune =>
                            <Rune rune={ rune } key={ rune.name } handleCheckboxChange={ props.toggleCheckbox }></Rune>)
                }
            </div>
        </div>
        </div>
    )
}
export default Runes;
