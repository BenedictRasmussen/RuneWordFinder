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

    createCheckbox = rune => (
        <Checkbox label={rune.name} handleCheckboxChange={this.toggleCheckbox} key={rune.name} />
    )

    createCheckboxes = () => (
        this.state.rune_data.map(this.createCheckbox)    
    )

    //https://visualstudiomagazine.com/articles/2016/06/01/processing-data.aspx
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