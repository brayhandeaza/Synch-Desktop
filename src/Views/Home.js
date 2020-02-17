import React, { Component } from 'react'

// Components
import Menu from '../Componets/Menu'
import Aside from '../Componets/Aside'
import Charts from '../Componets/Charts'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
     
    render() { 
        return ( 
            <div className="Home">
                <Menu/>
                <div className="Main">
                    <Aside/>
                    <Charts/>
                </div>
            </div>
        )
    }
}
 
export default Home