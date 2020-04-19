import React, { Component } from 'react'
import '../css/Home.scss'

// Components
import Aside from '../components/Aside'
import Charts from '../components/Charts'

import {connect} from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }

    componentDidMount() {
        this.props.dispatch({type: "isCharts"})
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

function mapStateToProps(state) {
    return {state}
  }
export default connect(mapStateToProps)(Home)