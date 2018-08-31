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
    constructor(props) {
        super(props);
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    componentDidMount = () => {
        //this.xhrRequest();
        fetch('/Home/List').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Unable to fetch /Home/List");
            }
        }).then(responseData =>  {
            console.log("Rune data: ");
            console.log(responseData);
        })
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

    //https://visualstudiomagazine.com/articles/2016/06/01/processing-data.aspx
    render() {
        return (
            <div>
                <p> Fill out runes form:</p>
                <form onSubmit={this.handleFormSubmit}>
                    {this.createCheckboxes()}
                    <button type="submit">Save</button>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}