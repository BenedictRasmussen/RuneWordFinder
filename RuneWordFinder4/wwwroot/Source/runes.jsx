import * as React from 'react';
import Checkbox from "./checkbox.jsx";
import { create } from 'domain';
import { URLSearchParams } from 'url';

import '../scss/runes.scss';

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
            console.log("Unchecking " + runeName)
            this.selectedCheckboxes.delete(runeName);
        } else {
            console.log("Checking " + runeName)
            this.selectedCheckboxes.add(runeName);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        console.log("Sending for search: " + JSON.stringify(Array.from(this.selectedCheckboxes)));

        // https://stackoverflow.com/questions/44925223/how-to-pass-data-to-controller-using-fetch-api-in-asp-net-core
        fetch('/Home/Search', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(Array.from(this.selectedCheckboxes))
        }).then(response => {
            if (response.ok) {
                console.log("Search response OKAY!")
            } else {
                console.log("Search failed!")
            }
        })
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
            <div id="runes-grid">
                <div id="rune-options">
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
                <div id="runeword-results">
                    <span>Placeholder for runeword results...</span>
                </div>
            </div>
        );
    }
}