import React, { Component } from 'react'

export default class Link extends Component {
    render() {
        return (
            <div className="nav-link">
                <a href={this.props.location}>
                    {this.props.description}
                </a>
            </div>
        )
    }
}
