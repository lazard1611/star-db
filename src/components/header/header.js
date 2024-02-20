import React, {Component} from "react";
import './header.scss';
import Navigation from '../navigation/navigation';
import Burger from '../burger/burger';
import Logo from '../logo/logo';
import Lang from '../lg-btn/lg-btn';

class Header extends Component {
    state = {
        isMenuOpen: false
    }

    handleClick = () => {
        this.setState((prevState) => {
            return {
                isMenuOpen: !prevState.isMenuOpen
            }
        });
    }

    render() {
        const { lgLinks, links, logoURL } = this.props.data;
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
                    <Lang lgLinks={lgLinks} />
                    <div className="header_logo_wrap">
                        <Logo url={logoURL} />
                    </div>
                    <Burger handleClick={this.handleClick}/>
                    <Navigation
                        links={links}
                        handleClick={this.handleClick}
                    />
                </div>
            </header>
        );
    }
}

export default Header;

