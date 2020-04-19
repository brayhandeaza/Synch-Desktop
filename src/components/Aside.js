import React, { Component } from 'react'
import '../css/Aside.scss'
// icons
const { Icons } = require('../constants/Image')

export default class Asides extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <div className="Aside">
                <div className="top">
                    <div className="icons">
                        <img src={Icons.Aside.Apps} alt="app"/>
                    </div>
                    <div className="icons">
                        <img src={Icons.Aside.Chart} alt="chart"/>
                    </div>
                    <div className="icons">
                        <img src={Icons.Aside.News} alt="news"/>
                    </div>
                    <div className="icons">
                        <img src={Icons.Aside.Calculator} alt="claculator"/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="icons">
                        <img src={Icons.Aside.User} alt="user"/>
                    </div>
                </div>
            </div>    
        )
    }
}
 



           