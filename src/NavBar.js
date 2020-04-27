import React, { Component } from 'react'
import Link from './Links/Link.js';
import Logo from './Logo.js';

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <Logo />
                {
                  this.props.links.map((linkItem) => {
                    return <Link 
                        location={ linkItem.location }
                        description={ linkItem.description}
                    />
                  })
                }
                {/* <SearchSection /> */}
            </div>
        )
    }
}
