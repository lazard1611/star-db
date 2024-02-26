import React, {Component} from "react";
import ErrorBoundary from "../../components/error-boundary/error-boundary";
import RowColumn from '../../components/row-column/row-column';
import { PlanetList, PlanetDetails } from '../../components/sw-components/index';

export default class PlanetPage extends Component {
    state = {
        selectedItem: 2,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    };

    render() {
        const itemList = (
            <ErrorBoundary>
                <PlanetList onItemSelected={this.onItemSelected}/>
            </ErrorBoundary>
        );

        const itemDetails = (
            <ErrorBoundary>
                <PlanetDetails itemId={this.state.selectedItem}/>
            </ErrorBoundary>
        );

        return (
            <RowColumn leftCol={itemList} rightCol={itemDetails}/>
        );
    }
};
