import * as React from 'react';
import Checkbox from "./Checkbox";
import { create } from 'domain';

export default class RuneList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    componentDidMount = () => {
        fetch('/Home/List').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Unable to fetch /Home/List");
            }
        }).then(responseData => {
            console.log("Rune data: ");
            console.log(responseData);
            this.setState({
                rune_data: responseData
            });
        })
    }

    // If the label already exists, remove the checkbox from the list of selected boxes. Otherwise, add the label.
    toggleCheckbox = runeName => {
        if (this.selectedCheckboxes.has(runeName)) {
            this.selectedCheckboxes.delete(runeName);
        } else {
            this.selectedCheckboxes.add(runeName);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        // TODO: https://stackoverflow.com/questions/44925223/how-to-pass-data-to-controller-using-fetch-api-in-asp-net-core
        for (const runeName of this.selectedCheckboxes) {
            console.log(runeName, ' is selected.')
        }

        //TODO Send selected checkboxes (a set of rune names as strings) to Controller
    }

    createCheckbox = rune => (
        <Checkbox rune={rune} handleCheckboxChange={this.toggleCheckbox} key={rune.name} />
    )

    createCheckboxes = () => (
        this.state.rune_data.map(this.createCheckbox)
    )

    render() {
        console.log("STATE ready = " + (this.state.rune_data !== null && this.state.rune_data !== undefined));
        return (
            <div>
                <p> Fill out runes form:</p>
                <form onSubmit={this.handleFormSubmit}>
                    {
                        (this.state.rune_data !== null && this.state.rune_data !== undefined) ?
                            this.createCheckboxes() :
                            <p>Loading runes...</p>
                    }
                    <button type="submit">Save</button>
                    <br />
                    <br />
                </form>
            </div>
        );
    }
}