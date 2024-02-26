import React, {Component} from "react";
import ErrorBoundary from "../../components/error-boundary/error-boundary";
import RowColumn from '../../components/row-column/row-column';
import { PersonList, PersonDetails } from '../../components/sw-components/index';

export default class PeoplePage extends Component {
    state = {
        selectedItem: null,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundary>
                <PersonList onItemSelected={this.onItemSelected}/>
            </ErrorBoundary>
        );

        const itemDetails = (
            <ErrorBoundary>
                <PersonDetails itemId={this.state.selectedItem}/>
            </ErrorBoundary>
            );

        return (
            <RowColumn leftCol={itemList} rightCol={itemDetails}/>
        );
    }
};
