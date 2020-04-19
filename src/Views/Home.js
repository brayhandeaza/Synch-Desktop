import React, { Component } from 'react'
import '../css/Home.scss'

// Components
import Aside from '../components/Aside'
import Charts from '../components/Charts'


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
                <Charts/>
            </div>
        )
    }
}
 
export default Home