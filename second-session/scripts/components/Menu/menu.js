import React from 'react';
import { Link } from 'react-router'
import NavLink from '../NavLinks/NavLinks'


var Menu = React.createClass({
    render: function() {
        return (
            <div className={'component component-menu ' + this.props.currentClubCss}>
                <ul>
                    <li><NavLink to="/" onlyActiveOnIndex>HOME</NavLink></li>
                    <li><NavLink to="/stats">STATS</NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>
                </ul>
            </div>
        )
    }
});

export default Menu;