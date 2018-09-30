import React from 'react'
import { Router } from 'react-static'
import { hot } from 'react-hot-loader'
import Routes from 'react-static-routes'
import Header from './components/Header'
import Analytics from './components/Analytics'

import './app.scss'

const App = () => (
  <Router>
    <Analytics id="UA-118791117-1">
      <div>
        <Header />
        <div className="content">
          <Routes />
        </div>
      </div>
    </Analytics>
  </Router>
)

export default hot(module)(App)
