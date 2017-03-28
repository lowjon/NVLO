import React from 'react'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'
import Main from '../components/main/Main.jsx'
import Home from '../components/home/Home.jsx'
import Inventory from '../components/inv/Inventory.jsx'
import AuthService from '../utils/AuthService'

const auth = new AuthService('9uNjh5xED9JpR28QPORjoyq7bMcNHg8W', 'lowjon@auth0.com');

//validate auth for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={Main} auth={auth}>
      <IndexRoute component={Home} onEnter={requireAuth}/>
      <Route path="/inventory" component={Inventory} />
      <Route path="/login" component={Login}
    </Route>
  </Router>
)

export default routes
