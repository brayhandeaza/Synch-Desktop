import React, { Component } from 'react'
import '../css/Home.scss'

// Components
import Aside from '../Componets/Aside'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
     
    render() { 
        return ( 
            <div className="Home">
                <Aside/>
            </div>
        )
    }
}
 
export default Home