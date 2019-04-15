import * as React from 'react';
import Runes from './runes.jsx';
import Runeword from './runeword.jsx'
import axios from 'axios'

import '../../scss/runes.scss';

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
        axios.get('/api/v1/runes').then(response => {
            this.setState({
                rune_data: response.data
            });
        }).catch(error => {
            console.log("Failed to fetch runes:" + error)
        })
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        axios.post('/api/v1/runewordSearch', {
            runes: Array.from(this.selectedCheckboxes)
        }).then(response => {
          this.setState({
              runeword_data: response.data
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
            return <Runes runes={ this.state.rune_data } toggleCheckbox={ this.toggleCheckbox }></Runes>;
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

        return <span>Waiting for runeword search...</span>;
    }

    render() {
        return (
            <div id="runes-grid">
                <div id="rune-options">
                    <form onSubmit={this.handleFormSubmit}>
                        { this.renderRuneOptions() }
                        <button id="search-submit" type="submit">Save</button>
                    </form>
                </div>
                <div id="runeword-results">
                    { this.renderRunewordResults() }
                </div>
            </div>
        );
    }
}
