export default class DummySwapiService {
    _imageBase = 'https://picsum.photos/id/'

    _people = [
        {
            id: '1',
            name: 'Luke Skywalker [TEST DATA]',
            gender: 'male',
            birthYear: '19BBY',
            eyeColor: 'blue'
        },
        {
            id: '2',
            name: 'C-3PO [TEST DATA]',
            gender: 'n/a',
            birthYear: "112BBY",
            eyeColor: "yellow"

        }
    ]

    _planets = [
        {
            id: '1',
            name: 'Tatooine [TEST DATA]',
            population: '200000',
            rotationPeriod: '23',
            diameter: '10465'
        },
        {
            id: '2',
            name: 'Alderaan [TEST DATA]',
            population: '2000000000',
            rotationPeriod: '24',
            diameter: '12500'
        }
    ]

    _starship = [
        {
            id: '2',
            name: 'CR90 corvette [TEST DATA]',
            model: 'CR90 corvette',
            manufacturer: 'Corellian Engineering Corporation',
            passengers: '600',
        },
        {
            id: '3',
            name: 'Star Destroyer [TEST DATA]',
            model: 'Imperial I-class Star Destroyer',
            manufacturer: 'Kuat Drive Yards',
            passengers: "843,342",
        }
    ]

    getAllPeople = async () => {
        return this._people;
    }
    getPerson = async () => {
        return this._people[0];
    }
    getAllPlanets = async () => {
        return this._planets;
    }
    getPlanet = async () => {
        return this._planets[1];
    }
    getAllStarships = async () => {
        return this._starship;
    }
    getStarship = async () => {
        return this._starship[1];
    }

    getPersonImage = ({id}) => {
        return `${this._imageBase}${id}0/500/500.jpg`
    }

    getPlanetImage = ({id}) => {
        return `${this._imageBase}${id}0/500/500.jpg`
    }

    getStarshipImage = ({id}) => {
        return `${this._imageBase}${id}0/500/500.jpg`
    }
}

