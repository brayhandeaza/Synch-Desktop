import React, {Component} from 'react'
import './css/App.scss'
import { Switch, Route } from 'react-router-dom';

import {connect} from 'react-redux';


// Components
import Home from './views/Home'
import Aside from './components/Aside'
import Menu from './components/Menu'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render(){
    return (
      <Switch>
          <Route exact  path='/' component={Home}/>
          <Route exact  path='/charts' component={Home}/>
          <Route exact  path='/news' component={Home}/>
          <Route exact  path='/calculator' component={Home}/>
      </Switch>
    )
  }
}
function mapStateToProps(state) {
  return {state}
}
export default connect(mapStateToProps)(App)
