import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarText } from 'reactstrap'
const { Logo, Dash , Search , Bell, Logout} = require('../dry/Image')


class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <nav className="TopMenu" color="white" light expand="md">
                <div className="left-container">
                    <div className="Logo">
                        <img className="logo" src={Logo} alt="Logo"/>
                    </div>
                    <div className="Title">
                        <span className="nav-text">Stocks</span>
                        <img src={Dash} alt=""/>
                        <span className="nav-text">Netflix</span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="Icons">
                        <img src={Search} alt=""/>
                        <img src={Bell} alt=""/>
                        <img src={Logout} alt=""/>
                    </div>
                </div>
            </nav>
        )
    }
}
 
export default TopMenu