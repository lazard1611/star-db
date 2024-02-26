import React, {Component} from "react";
import ErrorBoundary from "../../components/error-boundary/error-boundary";
import RowColumn from '../../components/row-column/row-column';
import { StarshipList, StarshipDetails } from '../../components/sw-components/index';

export default class StarshipPage extends Component {
    state = {
        selectedItem: 3,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundary>
                <StarshipList onItemSelected={this.onItemSelected}/>
            </ErrorBoundary>
        );

        const itemDetails = (
            <ErrorBoundary>
                <StarshipDetails itemId={this.state.selectedItem}/>
            </ErrorBoundary>
        );

        return (
            <RowColumn leftCol={itemList} rightCol={itemDetails}/>
        );
    }
};
