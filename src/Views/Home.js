import React, { Component } from 'react'

// Components
import TopMenu from '../Componets/TopMenu'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
     
    render() { 
        return ( 
            <div className="Home">
                <TopMenu/>
            </div>
         )
    }
}
 
export default Home