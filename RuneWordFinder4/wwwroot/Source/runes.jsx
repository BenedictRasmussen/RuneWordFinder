import * as React from 'react';
import Checkbox from './checkbox.jsx';
import Runeword from './runeword.jsx'

import '../scss/runes.scss';

export default class RuneList extends React.Component {
    constructor(props) {
        super(props);
        this.selectedCheckboxes = new Set();
        this.state = {
            rune_data: null,
            runeword_data: null
        }
    }

    componentDidMount = () => {
        fetch('/Home/List').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Unable to fetch /Home/List (" + response.status + ")", response.statusText);
            }
        }).then(responseData => {
            console.log("Rune data: ");
            console.log(responseData);
            this.setState({
                rune_data: responseData
            });
        })
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
                return response.json();
            } else {
                throw new Error("Failed to complete runeword search (" + response.status + ")", response.statusText)
            }
        }).then(responseData => {
          console.log("Runeword data: ");
          console.log(responseData);
          this.setState({
              runeword_data: responseData
          })
        })
    }

    // If the label already exists, remove the checkbox from the list of selected boxes. Otherwise, add the label.
    toggleCheckbox = runeName => {
        this.selectedCheckboxes.has(runeName) ?
            this.selectedCheckboxes.delete(runeName) : this.selectedCheckboxes.add(runeName);
    }

    renderRuneOptions = () => {
        if (this.state.rune_data !== null) {
            return this.state.rune_data.map(
                rune => <Checkbox rune={rune} handleCheckboxChange={this.toggleCheckbox} key={rune.name} />
            )
        }
        // TODO Swap load out: https://codepen.io/Manoz/pen/pydxK/
        return (<p>Loading runes...</p>);
    }

    renderRunewordResults = () => {
        if (this.state.runeword_data !== null) {
            return this.state.runeword_data.map(
                runeword => <Runeword runeword={runeword}></Runeword>
            )
        }

        return (<span>Waiting for runeword search...</span>);
    }

    render() {
        return (
            <div id="runes-grid">
                <div id="rune-options">
                    <p> Fill out runes form:</p>
                    <form onSubmit={this.handleFormSubmit}>
                        { this.renderRuneOptions() }
                        <button type="submit">Save</button>
                    </form>
                </div>
                <div id="runeword-results">
                    { this.renderRunewordResults() }
                </div>
            </div>
        );
    }
}
