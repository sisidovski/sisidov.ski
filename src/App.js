import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import Header from './components/Header'
import Particles from 'react-particles-js';


import './app.scss'

const App = () => (
  <Router>
    <div>
      <Header />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
