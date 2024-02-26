import React, {Component} from "react";
import './header.scss';
import Burger from '../burger/burger';


class Header extends Component {
    state = {
        isMenuOpen: false
    }

    dataLink = [
        {label: 'planets', url: '#'},
        {label: 'person', url: '#'},
        {label: 'starship', url: '#'},
    ]

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            }
        });
    }

    render() {
        const { isMenuOpen } = this.state;

        const bodyOpenMenuState = 'body--open_menu_state';

        if (isMenuOpen) {
            document.body.classList.add(bodyOpenMenuState);
        } else {
            document.body.classList.remove(bodyOpenMenuState);
        }

        return (
            <header className="header">
                <div className="header_in">
                    <a href='#' className="header_logo">Star DB</a>
                    <nav className="header_nav">
                        <ul className="header_list">
                            {this.dataLink.map((item, index) => {
                                const {label, url} = item;
                                return (<li key={index} className="header_item">
                                    <a href={url} className="header_link">{label}</a>
                                </li>)
                            })
                            }
                        </ul>
                    </nav>
                    <Burger handleClick={this.handleClick}/>
                    <button
                        onClick={this.props.onServiceChange}
                        className="button button--yellow_color">
                        Change Service
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;

