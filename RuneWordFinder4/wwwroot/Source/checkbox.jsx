import * as React from 'react';

// http://react.tips/checkboxes-in-react/
export default class Checkbox extends React.Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, rune } = this.props;
        const label = rune.name;

        this.setState(({ isChecked }) => ({
                isChecked: !isChecked,
        }));

        handleCheckboxChange(label);
    }

    render() {
        const runeName = this.props.rune.name;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <img src={ "../" + this.props.rune.image }></img>
                <label>
                    <input type="checkbox" value={runeName} checked={isChecked}
                        onChange={this.toggleCheckboxChange} />
                    {runeName}
                </label>
            </div>
        );
    }
}