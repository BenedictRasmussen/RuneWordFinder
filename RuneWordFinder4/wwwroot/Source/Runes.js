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
    constructor() {
        super(this.props);
    }

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

    controllerRequest() {
        let xhr = new XMLHttpRequest();
        xhr.open('get', '/Home/List', true);
        xhr.onload = () => {
            xhr.response.map(res => <p>{res}</p>)
        }
    }
    //https://visualstudiomagazine.com/articles/2016/06/01/processing-data.aspx
    render() {
        let state = this.state;
        console.log(state);
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <button type="submit">Save</button>
                    <br />
                    <br />
                    <h1>Controller Request</h1>
                    <p>Temporarily disabled</p>
                </form>
            </div>
        );
    }
}