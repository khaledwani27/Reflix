import React, { Component } from 'react'
import {Link } from 'react-router-dom'

export class Header extends Component {
    updateActiveUser = () =>{
        this.props.updateActiveUser(0)
    }
    render() {
        return (
            <div id="main">
                <div id="main-links">
                    <Link to="/" onClick={this.updateActiveUser}>Home</Link>
                    <Link to="/catalog">Catalog</Link>
                </div>
                <h1 className='main-title'>Reflix</h1>
            </div>
        )
    }
}

export default Header


