import * as React from 'react';
import Checkbox from "./Checkbox";

// TODO Populate using call to DB
const runes = [
    'El',
    'Eld',
    'Ith',
    'Eth',
];

export default class RuneList extends React.Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        for (const checkbox of this.selectedCheckboxes) {
            console.log(checkbox, ' is selected.')
        }
    }

    createCheckbox = label => (
        <Checkbox label={label} handleCheckboxChange={this.toggleCheckbox} key={label} />
    )

    createCheckboxes = () => (
        runes.map(this.createCheckbox)    
    )

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}