import React, {Component} from "react";

import './app.scss';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import {PeoplePage, PlanetPage, StarshipPage} from '../../pages';
import {SwapiServiceProvider} from "../swapi-service-context";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import ErrorBoundary from "../error-boundary/error-boundary";


export default class App extends Component {
    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService(),
        hasError: false,
    }

    onServiceChange = () => {
        this.setState(({swapiService}) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            };
        })
    }

    render() {

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div>
                        <Header onServiceChange={this.onServiceChange}/>
                        <div className="base">
                            <main className="wrapper">
                                <RandomPlanet />
                                <PeoplePage/>
                                <PlanetPage/>
                                <StarshipPage/>
                            </main>
                        </div>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}

