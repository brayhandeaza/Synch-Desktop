import React, { Component } from 'react'
import '../css/Home.scss'

// Components
import Menu from '../components/Menu'
import Aside from '../components/Aside'
import Charts from '../components/Charts'

import {connect} from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cHeight: 0
         }

    }
   
    componentDidMount() {
        // const menu = document.querySelector('.Menus').style.height
        // console.log(menu);
        
        this.props.dispatch({type: "isCharts"})
    }
    
    render() { 
        return ( 
            <div className="Home">
                <div className="Menus">
                    <Menu/>
                    <Aside/>
                </div>
                <Charts canvasHeight={"this.canvasHeight()"}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {state}
  }
export default connect(mapStateToProps)(Home)