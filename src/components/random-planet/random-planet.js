import React, {Component} from "react";
import './random-planet.scss';
import SwapiService from '../../services/swapi-service';
import Spiner from '../spiner/spiner';
import ErrorInd from '../error-indicator/error-indicator';

export default class RandomPlanet extends Component {
    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 5000
    };

    static propTypes = {
        updateInterval: (props, propName, componentName) => {
            const value = props[propName];
            if (typeof value === 'number' && !isNaN(value)) {
                return null;
            }
            return new TypeError(`${componentName}: ${propName} must be number`)
        }
    };

    state = {
        planet: {},
        loading: true,
        error: false,
    }

    componentDidMount() {
        const { updateInterval } = this.props;
        this.updatePlanet();
        setInterval(this.updatePlanet, updateInterval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*15 + 2);
        // const id = 100;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    render() {
        const { planet, loading, error } = this.state;
        const hasDate = !(loading || error);
        const errorMassage = error ? <ErrorInd/> : null;
        const spinner = loading ? <Spiner/> : null;
        const content = hasDate ? <PlanetView planet={planet}/> : null;

        return (
            <section className="section">
                <div className="section__in">
                    <div className="block random_planets">
                        {errorMassage}
                        {spinner}
                        {content}
                    </div>
                </div>
            </section>
        )
    }
};

const PlanetView = ({planet}) => {
    const {
            id, name, population, rotationPeriod, diameter
        } = planet
    return (
        <React.Fragment>
            <picture className="random_planets__pic">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name}/>
            </picture>
            <div className="random_planets__wrap">
                <h3 className="random_planets__title">
                    {name}
                </h3>
                <ul className="random_planets__list">
                    <li className="list_item random_planets__item">
                        <span>Population: </span>
                        <span>{population}</span>
                    </li>
                    <li className="list_item random_planets__item">
                        <span>Rotation period: </span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list_item list_item random_planets__item">
                        <span>Diameter: </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
