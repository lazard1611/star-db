import React, { Component } from 'react';
import './burger.scss';

export default class Burger extends Component {
    render () {
        const {handleClick} = this.props;

        return (
            <button onClick={handleClick} className="burger" type="button" aria-label="Toggle menu">
                <span></span>
            </button>
        );
    }
};


