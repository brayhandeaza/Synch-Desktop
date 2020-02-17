import React, { Component } from 'react'

// icons
const { Aside } = require('../dry/Image')

export default class Asides extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (    
            <div className="Asides">
                <div className="Icons Top">
                    <img src={Aside.Apps} alt="Apps"/>
                    <img src={Aside.Chart} alt="Apps"/>
                    <img src={Aside.News} alt="Apps"/>
                    <img src={Aside.Calculator} alt="Apps"/>
                </div>
                <div className="Icons Bottom">
                    <img src={Aside.User} alt="Apps"/>
                </div>
            </div>
        )
    }
}
 


