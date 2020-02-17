import React, { Component } from 'react'
const { Menu} = require('../dry/Image')


class TopMenu extends Component {
    constructor(props) {
        super(props)
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="Menu" color="white" light expand="md">
                <div className="left-container">
                    <div className="Logo">
                        <img className="logo" src={Menu.Logo} alt="Logo"/>
                    </div>
                    <div className="Title">
                        <span className="nav-text">Stocks</span>
                        <img src={Menu.Dash} alt=""/>
                        <span className="nav-text">Netflix</span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="Icons">
                        <img src={Menu.Search} alt=""/>
                        <img src={Menu.Bell} alt=""/>
                        <img src={Menu.Logout} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default TopMenu