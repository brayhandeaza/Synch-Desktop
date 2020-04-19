import React, { Component } from 'react'
import '../css/Aside.scss'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


// icons
const { Icons } = require('../constants/Image')

class Asides extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            iconStatus: ""    
        }
    }

    handleClick = (e) => {
        this.props.dispatch({type: e.currentTarget.id})
        console.log(this.props);
    }
    componentDidMount() {
        this.setState({
            iconStatus: Icons.Aside.ChartRed
        })
    }
    render() { 
        return (
            <div className="Aside">
                <div className="top">
                    <Link id="isStocks" to="/"  onClick={this.handleClick}>
                        <div className="icons">
                            <img src={Icons.Aside.Apps} alt="app"/>
                        </div>
                    </Link>
                    <Link id="isCharts" to='charts' onClick={this.handleClick}>
                        <div className="icons"  >
                            <img src={ this.props.state.isCharts ? this.state.iconStatus : Icons.Aside.Chart} alt="chart"/>
                        </div>
                    </Link>
                    <Link id="isNews" to='/news'  onClick={this.handleClick}>
                        <div className="icons ">
                            <img src={ Icons.Aside.News} alt="news"/>
                        </div>
                    </Link>
                    <Link id="isCalculator" to="calculator" onClick={this.handleClick}>
                        <div className="icons ">
                            <img src={Icons.Aside.Calculator} alt="calculator"/>
                        </div>
                    </Link>
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
 
function mapStateToProps(state) {
    return { state }
  }
export default connect(mapStateToProps)(Asides)

           