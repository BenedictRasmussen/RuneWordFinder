﻿import * as React from 'react';

// http://react.tips/checkboxes-in-react/
export default class Checkbox extends React.Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, label } = this.props;

        this.setState(({ isChecked }) => ({
                isChecked: !isChecked,
        }));

        handleCheckboxChange(label);
    }

    render() {
        const { label } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="checkbox">
                <label>
                    <input type="checkbox" value={label} checked={isChecked}
                        onChange={this.toggleCheckboxChange} />
                    {label}
                </label>
            </div>
        );
    }
}