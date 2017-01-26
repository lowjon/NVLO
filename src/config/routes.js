import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from '../components/main/Main.jsx'
import Home from '../components/home/Home.jsx'
import Inventory from '../components/inv/Inventory.jsx'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="/inventory" component={Inventory} />
    </Route>
  </Router>
)

module.exports = routes
