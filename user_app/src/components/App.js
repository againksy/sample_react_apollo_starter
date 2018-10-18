import React, { Component } from 'react'
import { Switch, Route, } from 'react-router-dom'
import Users from './Users'
import User from './User'
class App extends Component {
  render() {
    return (
      <div className="app">
        <section className="app__content">
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/user/:id" component={User} />
          </Switch>
        </section>
      </div>
    )
  }
}

export default App
