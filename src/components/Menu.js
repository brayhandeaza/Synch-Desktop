import React, { Component } from 'react'
import '../css/Menu.scss'
import {connect} from 'react-redux';
const { Icons } = require('../constants/Image')


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
                        <span>{this.props.state.window}</span>
                        <span>-</span>
                        <span>Twitter</span>
                    </div>
                </div>
                <div className="right">
                    <div className="search">
                        <input type="text" placeholder="Search..."/>
                        <img src={Icons.Menu.Search} alt="bell"/>
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
 
function mapStateToProps(state) {
    return { state }
  }
export default connect(mapStateToProps)(Menu)
