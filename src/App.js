import React, { Component } from 'react'
import './css/App.scss'
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';


// Components
import Home from "./Views/Home"
// import Aside from './components/Aside'
// import Menu from './components/Menu'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		return (
			<Switch>
				<Route exact path='/' component={Home} />
			</Switch>
		)
	}
}
function mapStateToProps(state) {
	return { state }
}
export default connect(mapStateToProps)(App)
