import React, { Component } from 'react'
import '../css/Menu.scss'
const { Icons } = require('../dry/Image')


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div className="Header">
                 <div className="left">
                    <div className="logo">
                        <img src={Icons.Menu.Logo} alt="logo"/>
                    </div>
                    <div className="titles-container">
                        <span>Stocks</span>
                        <span>-</span>
                        <span>Twitter</span>
                    </div>
                </div>
                <div className="right">
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="icons">
                        <img src={Icons.Menu.Bell} alt="bell"/>
                    </div>
                    <div className="icons">
                        <img src={Icons.Menu.Logout} alt="logout"/>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Menu
